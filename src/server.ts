import express, {Request, Response, NextFunction} from 'express';
import 'express-async-errors';
import cors from 'cors';
import { router } from './routes'

const app = express();

app.use(express.json());//permite que a aplicação entenda json
app.use(cors());//permite que qualquer aplicação acesse a api

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) { //verifica se o erro é uma instância de Error
        return res.status(400).json({//400 bad request
            error: err.message//retorna o erro
        });
    }

    return res.status(500).json({ //500 internal server error  
        status: "error",
        message: "Internal Server Error"
    })  
});

app.listen(3333, () => {
  console.log('Server started on port 3333');
});