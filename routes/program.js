import express from 'express';
import {
  changeContent,
  create,
  update,
  deletePageRecord,
  details,
  list,
  loadContent,
} from '../controllers/program';

const programRoute = express.Router();
programRoute.post('/', create);
programRoute.post('/:pageId/content', changeContent);

programRoute.put('/:pageId', update);

programRoute.delete('/:pageId', deletePageRecord);

programRoute.get('/:pageId', details);
programRoute.get('/', list);
programRoute.get('/:pageId/content', loadContent);

export default programRoute;