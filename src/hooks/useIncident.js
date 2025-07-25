import { useState, useCallback, useEffect } from 'react';
import { fetchIncidents, resolveIncident as apiResolveIncident } from '../config/api';

export const useIncidents = (initialIncidents) => {
  const [incidents, setIncidents] = useState(initialIncidents);
  const [selectedIncident, setSelectedIncident] = useState(initialIncidents[0]);
  const [loading, setLoading] = useState(false);

  // Load incidents from API on mount
  useEffect(() => {
    const loadIncidents = async () => {
      try {
        setLoading(true);
        const apiIncidents = await fetchIncidents(false);
        if (apiIncidents.length > 0) {
          setIncidents(apiIncidents);
          setSelectedIncident(apiIncidents[0]);
        }
      } catch (error) {
        console.error('Failed to load incidents from API:', error);
        // Fall back to initial incidents
      } finally {
        setLoading(false);
      }
    };

    loadIncidents();
  }, []);

  const selectIncident = useCallback((incident) => {
    setSelectedIncident(incident);
  }, []);

  const resolveIncident = useCallback(async (incidentId) => {
    try {
      // Call the actual API
      const updatedIncident = await apiResolveIncident(incidentId);
      
      setIncidents(prev => 
        prev.map(incident => 
          incident.id === incidentId 
            ? { ...incident, resolved: updatedIncident.resolved }
            : incident
        )
      );
      
      return { success: true };
    } catch (error) {
      console.error('Failed to resolve incident:', error);
      return { success: false, error };
    }
  }, []);

  const fetchIncidentsData = useCallback(async (resolved = false) => {
    try {
      const data = await fetchIncidents(resolved);
      return data;
    } catch (error) {
      console.error('Failed to fetch incidents:', error);
      return [];
    }
  }, []);

  return {
    incidents,
    selectedIncident,
    selectIncident,
    resolveIncident,
    fetchIncidents: fetchIncidentsData,
    loading
  };
};
