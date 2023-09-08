# Drivenpass - Gerenciador de senhas

Este é um gestor de credenciais seguro que permite que você armazene com segurança informações sensíveis, como credenciais de login e senhas Wi-Fi. Com este aplicativo, você pode criar uma conta segura com um e-mail e senha, protegendo suas informações com criptografia de ponta a ponta.

## Sobre

### Principais Funcionalidades:

- **Criação de Contas:** Registre-se com seu e-mail e senha, com criptografia usando bcrypt.

- **Acesso Seguro:** Faça login de forma segura com seu e-mail e senha, recebendo um token JWT para autenticação.

- **Gestão de Credenciais:** Armazene com segurança suas credenciais de login, como URLs, nomes de usuário e senhas, com criptografia robusta.

- **Organização Eficiente:** Organize suas credenciais com títulos exclusivos para facilitar a identificação.

- **Armazenamento Wi-Fi:** Guarde suas informações de rede Wi-Fi com segurança.

- **Recursos de Busca:** Pesquise facilmente suas credenciais e redes Wi-Fi armazenadas.

- **Exclusão Segura:** Exclua credenciais e redes Wi-Fi com segurança, protegendo seus dados.

Navegar na internet pode ser uma atividade muito divertida, mas ao mesmo tempo, muito perigosa. Inúmeros estudos e levantamentos (nacionais e internacionais) mostram que o número de golpes virtuais não para de crescer. O que levanta a questão: como nos proteger?

Existem várias formas diferentes de se proteger. Tudo começa com o uso de senhas diferentes e seguras. Para uma senha ser segura, ela deve conter vários caracteres e números misturados, sem contar que o quanto mais longa ela for, melhor.

Só que como vamos memorizar senhas gigantes e sem significado semântico? É para resolver essa dor que os gerenciadores de senhas surgiram! Com eles, criamos apenas uma senha “mestra” e todas as outras senhas ficam gravadas em segredo! Logo, quando precisamos dela, basta lembrar da senha “mestra”!

## Tecnologias Utilizadas

Neste projeto, foram utilizadas as seguintes tecnologias, bibliotecas e ferramentas:

- [Node.js](https://nodejs.org/): Plataforma de desenvolvimento utilizada como ambiente de execução do servidor.

- [Express.js](https://expressjs.com/): Framework web utilizado para criar a API do servidor e gerenciar as rotas da aplicação.

- [PostgreSQL](https://www.postgresql.org/): Banco de dados relacional escolhido para armazenar os dados do projeto.

- [Prisma](https://www.prisma.io/): Ferramenta ORM (Object-Relational Mapping) utilizada para modelar o esquema do banco de dados de forma eficiente e simplificada.

- [bcrypt](https://www.npmjs.com/package/bcrypt): Biblioteca utilizada para criptografar senhas dos usuários, garantindo a segurança dos dados sensíveis.

- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): Biblioteca responsável por gerar tokens JWT (JSON Web Tokens) para autenticação de usuários na aplicação.

- [cryptr](https://www.npmjs.com/package/cryptr): Biblioteca utilizada para criptografar informações sensíveis, como senhas de credenciais e senhas de redes Wi-fi.

### Motivação das Escolhas

- **Node.js e Express.js:** Optamos por utilizar o `Node.js` com o Express.js devido à sua eficiência e à vasta comunidade de desenvolvedores, o que facilita a construção de uma API robusta.

- **PostgreSQL:** Escolhemos o `PostgreSQL` como nosso banco de dados relacional devido à sua confiabilidade, escalabilidade e recursos avançados de gerenciamento de dados.

- **Prisma:** Utilizamos o `Prisma` para modelar o esquema do banco de dados de forma declarativa e gerar automaticamente o SQL das tabelas. Isso torna o desenvolvimento mais rápido e simplificado, evitando a necessidade de escrever SQL manualmente.

- **bcrypt:** A biblioteca `bcrypt` foi escolhida para garantir a segurança das senhas dos usuários, pois ela oferece funções de hash seguras para proteger dados sensíveis.

- **jsonwebtoken:** Utilizamos o `jsonwebtoken` para gerar tokens JWT que são usados na autenticação de usuários, fornecendo uma camada adicional de segurança à nossa aplicação.

- **cryptr:** A biblioteca `cryptr` é utilizada para criptografar informações sensíveis, como senhas de credenciais e senhas de redes Wi-fi, antes de serem armazenadas no banco de dados, garantindo a privacidade e segurança dos dados do usuário.

Essas tecnologias foram escolhidas com base em sua adequação aos requisitos do projeto, garantindo uma aplicação robusta e segura.

## Como Rodar o Projeto

Siga estas etapas para configurar e executar o projeto em seu ambiente local:

### Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/): Certifique-se de ter o Node.js instalado. Você pode baixá-lo em [https://nodejs.org/](https://nodejs.org/).

- [PostgreSQL](https://www.postgresql.org/): Você precisará de um servidor PostgreSQL instalado e em execução. Você pode baixar o PostgreSQL em [https://www.postgresql.org/download/](https://www.postgresql.org/download/) ou usar um serviço de banco de dados PostgreSQL em nuvem.

### Passos para Execução

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/MoniqueMSouza/projeto-drivenpass.git
   cd seu-projeto

2. **Instale as Dependências:**
    ```bash
    npm install
3. **Iniciar o Servidor:**
    ```bash
    npm start
4. **Acesse a Aplicação:**

O projeto estará disponível em http://localhost:3000.
Use o ThunderClient (ou outra ferramenta para API) para testar as rotas da aplicação.

