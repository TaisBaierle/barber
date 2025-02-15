import prismaClient from "../../prisma";
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface AuthUserRequest{//interface para definir o tipo de dado que será recebido
    email: string;
    password: string;
}
/*No TypeScript, uma interface é usada para definir a forma de um objeto. 
Ela permite que você defina a estrutura que um objeto deve seguir, especificando 
os tipos de dados que ele deve conter. Isso ajuda a garantir que os objetos usados 
no seu código tenham a forma esperada, proporcionando maior segurança e clareza 
no desenvolvimento. No seu código, a interface AuthUserRequest define a estrutura 
do objeto que será recebido pelo métodoexecute da classe AuthUserService. 
Ela especifica que o objeto deve ter duas propriedades: email e password, 
ambas do tipo string.*/

class AuthUserService{
    async execute({ email, password}: AuthUserRequest){
        const user = await prismaClient.user.findFirst({//await é usado para esperar a execução da função findFirst
            where:{ //where é usado para definir a condição de busca
                email:email
            },
            include:{ //include é usado para incluir informações relacionadas ao usuário
                subscriptions: true
            }
        })

        if(!user){
            throw new Error("Email/password incorretos.");
        }
        //verficar se a senha está correta
        //O método compare do bcryptjs é usado para comparar uma senha em texto
        const passwordMatch = await compare(password, user?.password); //? é o operador de acesso seguro, que evita erros caso a propriedade password não exista

        if(!passwordMatch){
            throw new Error("Email/password incorretos.");
        }

        //gerar token JWT
        //O token JWT é gerado com base nas informações do usuário, que são passadas como payload
        const token = sign(
        {
            name: user.name,
            email: user.email,
        },
        process.env.JWT_SECRET,
        {
            subject: user.id,
            expiresIn: '30d'
        }
    )//sign é o método usado para gerar o token JWT  

    return {
        id: user?.id,//caso a propriedade não exista, devolve vazio
        name: user?.name,
       email: user?.email,
       endereco: user?.address,
       token: token,
       subscriptions:user.subscriptions ? { //condição para verificar se o usuário tem uma assinatura ativa
          id: user?.subscriptions?.id,
          status: user?.subscriptions?.status
       } : null
    }
  }
}

export { AuthUserService }