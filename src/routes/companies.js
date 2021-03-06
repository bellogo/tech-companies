import { Router } from 'express';
import Company from '../controllers/company';

const router = Router();

router.get('/', Company.homePage);
router.post('/company', Company.create);
router.get('/companies', Company.getAll);
router.get('/company/:id', Company.getOne);
router.put('/company/:id', Company.update);
router.delete('/company/:id', Company.delete);

export default router;
