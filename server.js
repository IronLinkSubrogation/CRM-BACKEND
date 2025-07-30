import express from 'express';
import healthRoute from './routes/health.js';
import casesRoute from './routes/cases.js'; // ✅ Add this line

const app = express();
app.use(express.json());

app.use('/health', healthRoute);
app.use('/cases', casesRoute); // ✅ Mount cases route

app.get('/', (req, res) => {
  res.send('IronLink CRM backend is running 🚀');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});