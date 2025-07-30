import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Health check OK ✅',
    timestamp: new Date().toISOString()
  });
});

export default router;