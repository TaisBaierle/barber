import { response } from "express";
import prismaClient from "../../prisma";
import { hash } from 'bcryptjs';
interface UserRequest{
   name: string;
   email: string;
   password: string; 
}
class CreateUserService {
   async execute({ name, email, password }: UserRequest) {//o async é para poder usar o await, executa a função de forma assíncrona
      if(!email){
         throw new  Error("Email incorreto!");
      }
      const userAlreadyExists = await prismaClient.user.findFirst({
         where:{
            email:email
         }
      })

      if(userAlreadyExists){
        throw new Error("User/Email já existe.")  
      }

      const passwordHash = await hash(password, 8)
      const user = await prismaClient.user.create({
         data:{
           name: name,
           email: email,
           password: passwordHash  //instanciando um objeto usuario para criar no banco  
         },
         select:{//itens que podem ser retornados por select
            id: true,
            name: true,
            email: true
         }
      });
     
      return user;
   }
}

export { CreateUserService }