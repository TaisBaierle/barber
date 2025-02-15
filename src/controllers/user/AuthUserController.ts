import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";

class AuthUserController{
  async handle(req: Request, res: Response){
    const { email, password } = req.body; //pegar os atributos email e senha do body da requisição

    const authUserService = new AuthUserService();

    const session = await authUserService.execute({
        email,
        password
    })
    return res.json(session);
  }
}

export { AuthUserController } 