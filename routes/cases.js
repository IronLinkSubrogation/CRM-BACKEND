import express from 'express';
import { getAllCases } from '../controllers/casesController.js'; // ✅ Import controller

const router = express.Router();

// ✅ Route uses controller function
router.get('/', getAllCases);

export default router;