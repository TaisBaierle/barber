class CreateUserService {
   async execute() {//o async é para poder usar o await, executa a função de forma assíncrona
       return { Ok: true }
    }
}

export { CreateUserService }