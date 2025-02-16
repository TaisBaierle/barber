import { Request, Response, NextFunction} from "express";
import { verify } from "jsonwebtoken";

interface Payload {
    sub: string;
}
//middlewares servem para interceptar a requisição e fazer alguma coisa com ela
export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
){
    const authToken = req.headers.authorization;

    if(!authToken){
        return res.status(401).end();//401 é o status de não autorizado
    }
    //A vírgula server para desconsiderar o que vem antes
    const[, token] = authToken.split(" ");

    try{
      const{ sub } = verify(
        token,
        process.env.JWT_SECRET
      ) as Payload;

      req.user_id = sub;
      
      return next();
    }catch(err){
      return res.status(401).end();//Na prática, o erro é tratado com um status 401, não está autorizado  
    }


}