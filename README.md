# Baber - Gerenciamento de Barbearia

![Header (1)](https://github.com/user-attachments/assets/23d23219-ab04-4d17-8d1f-3d28cb85f869)

## 🏠 Sobre o projeto

**Baber** é uma aplicação completa para o gerenciamento de barbearias. Com ele, proprietários e funcionários podem gerenciar agendamentos, clientes, serviços e pagamentos de forma eficiente e intuitiva.

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido com as seguintes tecnologias:

- **Frontend:** React + TypeScript
- **Backend:** Node.js + Express + TypeScript
- **Banco de Dados:** PostgreSQL
- **ORM:** Prisma

## ✨ Funcionalidades Principais

- 📅 **Agendamento de serviços**
- 👤 **Cadastro e gerenciamento de clientes**
- ✂️ **Registro de serviços e preços**
- 💳 **Integração com meios de pagamento**
  
## 🛠️ Como Rodar o Projeto

### 📌 Pré-requisitos
Certifique-se de ter instalado na sua máquina:
- Node.js (v16 ou superior)
- PostgreSQL
- Yarn ou NPM

### 📥 Clonar o Repositório
```bash
git clone https://github.com/TaisBaierle/baber.git
```

### 🔧 Configuração do Ambiente
Crie um arquivo .env na raiz do projeto e configure as variáveis:
```env
DATABASE_URL=postgres://usuario:senha@localhost:5432/baber
PORT=3000
JWT_SECRET=sua_chave_secreta
```

### 📦 Instalar Dependências
```bash
yarn install ou npm install
```

### 🗄️ Rodar o Banco de Dados (Migrations Prisma)
```bash
npx prisma migrate dev
```

### 🚀 Iniciar o Servidor
```bash
yarn dev ou npm run dev
```

## 📜 Licença
Este projeto está licenciado sob a **MIT License**. Sinta-se à vontade para usá-lo e contribuir!


