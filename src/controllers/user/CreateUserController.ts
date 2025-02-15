import e, { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
    async handle(req: Request, res: Response) {
       const { name, email, password} = req.body;

       const createUserService = new CreateUserService();// cria uma instância da classe de criação de usuário
       const user = await createUserService.execute({ 
        name,
        email,
        password
       }); //executa a função de criação de usuário

       return res.json(user);//retorna o usuário criado
    }
}

export { CreateUserController }
