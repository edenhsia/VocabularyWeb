import { Router } from 'express';

import Project from '../models/Project';

const router = Router();

/**
 * post projects
 * 限 admin, keeper 存取
 */
router.post('/', (req, res, next) => {
  /**
   * 不處理非 array 資料
   */
  if (!Array.isArray(req.body)) return next(new Error('資料格式錯誤'));

  /**
   * 檢查 post 資料群是否唯一
   */
  if (new Set(req.body.map(({ projectId }) => projectId)).size !== req.body.length) {
    return next(new Error('Project ID 重複'));
  }

  return Project.create(req.body).then(
    (data) => res.json(data),
    next,
  );
});

export default router;
