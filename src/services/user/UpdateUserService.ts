import prismaClient from "../../prisma";

interface UserRequest{
  user_id: string;
  name: string;
  address: string;
}   

class UpdateUserService{
    async execute({ user_id, name, address }: UserRequest){

        try{
          const userAlreadyExist = await prismaClient.user.findFirst({
            where:{
                id: user_id
            }
          }) 

          if (!userAlreadyExist){
            throw new Error('Usuário não existe');  
          } 

          const userUpdated = await prismaClient.user.update({
            where:{
              id:user_id   //condição para atualizar
            },
            data:{
              name,
              address      
            }, //data é o que será atualizado, quais campos
            select:{
              name: true,
              email: true,
              address: true
            }//select é o que será retornado
          })

          return userUpdated;
        }catch(err){
            console.log(err);
            throw new Error("Erro ao atualizar usuário")
        }

    }
}
export { UpdateUserService }