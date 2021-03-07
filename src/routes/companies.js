import { Router } from 'express';
import Company from '../controllers/company';

const router = Router();

router.get('/', Company.homePage);
router.post('/api/company', Company.create);
router.get('/api/companies', Company.getAll);
router.get('/api/company/:id', Company.getOne);
router.put('/api/company/:id', Company.update);
router.delete('/api/company/:id', Company.delete);

export default router;
