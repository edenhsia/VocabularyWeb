import { Router } from 'express';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const router = Router();

router.post('/', async (req: { body: { name: string } }, res) => {
  const { name } = req.body;

  const category = await prisma.category.create({ data: { name } });
  res.json(category);
});

export default router;
