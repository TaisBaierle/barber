import { PrismaClient } from '@prisma/client';
import prismaClient from '../../prisma';
interface HaircutRequest{
  user_id: string;
  name: string;
  price: number;
}

//Verificar quantos modelos esse usuário tem cadastrado
//Verificar se ele é premium, senão limitamos a quantidade de cadastros

class CreateHaircutService{
    async execute({ user_id, name, price }: HaircutRequest){
      if(!name || !price){
       throw new Error("Nome/preço não estão informados"); 
      }

      const myHaircuts = await prismaClient.haircut.count({
        where:{
          userId: user_id
        }
      })

      const user = await prismaClient.user.findFirst({
        where:{
          id: user_id
        },
        include:{
          subscriptions: true
        }
      })

      //validação ou limite

      if(myHaircuts >= 3 && user?.subscriptions?.status !== 'active'){
        throw new Error("Não autorizado");
      }

      const haircut = await prismaClient.haircut.create({
        data:{
            name: name,
            price: price,
            userId: user_id
        }  
      });

      return haircut;
    }
}

export { CreateHaircutService }

