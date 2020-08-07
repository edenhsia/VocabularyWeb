import { Router } from 'express';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const router = Router();

router.get('/', async (req, res) => {
  const categorys = await prisma.category.findMany();
  res.json(categorys);
});

router.post('/', async (req: { body: { name: string } }, res) => {
  const { name } = req.body;

  const category = await prisma.category.create({ data: { name } });
  res.json(category);
});

router.put(
  '/:id',
  async (req: { params: { id: string }; body: { name: string } }, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const category = await prisma.category.update({
      where: { id: Number.parseInt(id, 10) },
      data: { name },
    });

    res.json(category);
  }
);

router.delete('/:id', async (req: { params: { id: string } }, res) => {
  const { id } = req.params;

  const category = await prisma.category.delete({
    where: { id: Number.parseInt(id, 10) },
  });

  res.json(category);
});

export default router;
