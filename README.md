# sesi_pbe1_aula09_eventos_climaticos_2026

Eventos Climáticos
Projeto BackEnd Descrição
Este projeto consiste em um backend para o gerenciamento de usuários e eventos climáticos. O sistema permite cadastrar, listar, atualizar e excluir usuários e eventos climáticos, além de consultar um resumo dos eventos com a média das temperaturas registradas.

MER & DER conceitual e lógico
MER DER mer

UML diagrama de classes
UML uml

Tecnologias Utilizadas
Node.js
Java Script
Thunder Client
XAMPP
MariaDB / MySQL
VS Code
Instruções para testar
1 - Use os códigos no repositório acima, inicie o servidor no terminal (CMD ou NODE) com as dependências:

npm init -y
npm i express cors
npm install mysql
npm run dev (após criar o server.js)
2 - Inicie uma nova página no Thunder Client, usando o link do servidor, e teste os códigos.

Thunder prints
listar usuários

listar

servidor

servidor

mudar/atualizar usuários put

deletar usuários del

listar eventos get

mudar/atualizar eventos put

deletar eventos del

eventos resumo e média res

login de usuários login