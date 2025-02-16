import { Request, Response } from 'express';
import { UserDetailService } from '../../services/user/DetailUserService';

class DetailUserController {
    async handle(req: Request, res: Response){
        const user_id = req.user_id;//pega o id do usuário que está logado
        
        const userDetailService = new UserDetailService();// cria uma instância da classe de detalhamento de usuário

        const detailUser = await userDetailService.execute(user_id);

        return res.json(detailUser);
    }
}

export { DetailUserController }
