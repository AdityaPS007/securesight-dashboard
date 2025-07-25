import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Load incidents data
const loadIncidents = () => {
  try {
    const data = fs.readFileSync(path.join(__dirname, 'data', 'incidents.json'));
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading incidents:', error);
    return { cameras: [], incidents: [] };
  }
};

const saveIncidents = (data) => {
  try {
    fs.writeFileSync(
      path.join(__dirname, 'data', 'incidents.json'), 
      JSON.stringify(data, null, 2)
    );
  } catch (error) {
    console.error('Error saving incidents:', error);
  }
};

// Routes

// GET /api/incidents?resolved=false - return newest-first JSON
app.get('/api/incidents', (req, res) => {
  const { resolved } = req.query;
  const data = loadIncidents();
  
  let filteredIncidents = data.incidents;
  
  if (resolved !== undefined) {
    const isResolved = resolved === 'true';
    filteredIncidents = data.incidents.filter(incident => 
      incident.resolved === isResolved
    );
  }
  
  // Sort by timestamp (newest first)
  filteredIncidents.sort((a, b) => new Date(b.tsStart) - new Date(a.tsStart));
  
  res.json(filteredIncidents);
});

// PATCH /api/incidents/:id/resolve - flip resolved and echo updated row
app.patch('/api/incidents/:id/resolve', (req, res) => {
  const { id } = req.params;
  const data = loadIncidents();
  
  const incidentIndex = data.incidents.findIndex(incident => incident.id === parseInt(id));
  
  if (incidentIndex === -1) {
    return res.status(404).json({ error: 'Incident not found' });
  }
  
  // Flip resolved status
  data.incidents[incidentIndex].resolved = !data.incidents[incidentIndex].resolved;
  
  // Save updated data
  saveIncidents(data);
  
  res.json(data.incidents[incidentIndex]);
});

// GET /api/cameras - return all cameras
app.get('/api/cameras', (req, res) => {
  const data = loadIncidents();
  res.json(data.cameras);
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`SecureSight API server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});