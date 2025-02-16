import { Router, Request, Response} from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { UpdateUserController } from './controllers/user/UpdateUserController';


const router = Router();

//-------------------USER-------------------//
router.post('/users', new CreateUserController().handle);//post server para mandar informações para o servidor
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailUserController().handle);//get serve para pegar informações do servidor
router.put('/users');//put serve para atualizar informações

export { router };