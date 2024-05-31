import express from 'express';

import { postTrade } from '../controllers/trades';

const router = express.Router();

router.post('/', postTrade);

export default router;
