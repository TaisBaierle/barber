declare namespace Express{
   export interface Request{
     user_id: string;
   } 
}
//este código serve para adicionar uma propriedade user_id ao Request do express
//para que possamos acessar o id do usuário logado em qualquer rota que use o middleware isAuthenticated
//sobreescrevendo a interface Request do express, adicionamos a propriedade user_id a ela