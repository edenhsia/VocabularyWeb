import { Router } from 'express';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const router = Router();

type Vocabulary = {
  name: string;
  sentance: string;
  chinese: string;
  chineseSentance: string;
  src: string;
  category: string;
};

router.get('/', async (req, res) => {
  const vocabularys = await prisma.vocabulary.findMany();
  res.json(vocabularys);
});

router.post('/', async (req: { body: Vocabulary }, res) => {
  const { name, sentance, chinese, chineseSentance, src, category } = req.body;

  const vocabulary = await prisma.vocabulary.create({
    data: {
      name,
      sentance,
      chinese,
      chineseSentance,
      src,
      category: {
        connect: { name: category },
      },
    },
  });
  res.json(vocabulary);
});

router.put(
  '/:id',
  async (req: { params: { id: string }; body: Vocabulary }, res) => {
    const { id } = req.params;
    const {
      name,
      sentance,
      chinese,
      chineseSentance,
      src,
      category,
    } = req.body;

    const vocabulary = await prisma.vocabulary.update({
      where: { id: Number.parseInt(id, 10) },
      data: {
        name,
        sentance,
        chinese,
        chineseSentance,
        src,
        category: {
          connect: { name: category },
        },
      },
    });

    res.json(vocabulary);
  }
);

router.delete('/:id', async (req: { params: { id: string } }, res) => {
  const { id } = req.params;

  const vocabulary = await prisma.vocabulary.delete({
    where: { id: Number.parseInt(id, 10) },
  });

  res.json(vocabulary);
});

export default router;
