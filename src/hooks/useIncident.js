import { useState, useCallback } from 'react';

export const useIncidents = (initialIncidents) => {
  const [incidents, setIncidents] = useState(initialIncidents);
  const [selectedIncident, setSelectedIncident] = useState(initialIncidents[0]);

  const selectIncident = useCallback((incident) => {
    setSelectedIncident(incident);
  }, []);

  const resolveIncident = useCallback(async (incidentId) => {
    try {
      // In a real app, this would call the API: PATCH /api/incidents/:id/resolve
      // const response = await fetch(`/api/incidents/${incidentId}/resolve`, {
      //   method: 'PATCH',
      //   headers: { 'Content-Type': 'application/json' }
      // });
      
      setIncidents(prev => 
        prev.map(incident => 
          incident.id === incidentId 
            ? { ...incident, resolved: true }
            : incident
        )
      );
      
      return { success: true };
    } catch (error) {
      console.error('Failed to resolve incident:', error);
      return { success: false, error };
    }
  }, []);

  const fetchIncidents = useCallback(async (resolved = false) => {
    try {
      // In a real app, this would call: GET /api/incidents?resolved=false
      // const response = await fetch(`/api/incidents?resolved=${resolved}`);
      // const data = await response.json();
      // setIncidents(data);
      
      // For now, just filter mock data
      const filteredIncidents = initialIncidents.filter(i => i.resolved === resolved);
      return filteredIncidents;
    } catch (error) {
      console.error('Failed to fetch incidents:', error);
      return [];
    }
  }, [initialIncidents]);

  return {
    incidents,
    selectedIncident,
    selectIncident,
    resolveIncident,
    fetchIncidents
  };
};