import { Router, Request, Response} from 'express';

//-------------------USER-------------------//
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { UpdateUserController } from './controllers/user/UpdateUserController';

//-------------------HAIRCUT-------------------//
import { CreateHaircutController } from './controllers/haircut/CreateHaircutController'; 


const router = Router();

//-------------------USER-------------------//
router.post('/users', new CreateUserController().handle);//post server para mandar informações para o servidor
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailUserController().handle);//get serve para pegar informações do servidor
router.put('/users', isAuthenticated, new UpdateUserController().handle);//put serve para atualizar informações

//-------------------HAIRCUT-------------------//
router.post('/haircut', isAuthenticated, new CreateHaircutController().handle);

export { router };