import express from 'express';

import PrismaClient from '@prisma/client';

const prisma = new PrismaClient.PrismaClient();

const router = express.Router();

router.post('/', async (req, res) => {
  const { name } = req.body;

  const category = await prisma.category.create({ data: { name } });
  res.json(category);
});

export default router;
