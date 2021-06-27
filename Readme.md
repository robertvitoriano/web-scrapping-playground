Objetivo

- Extrair postagens de determinados perfis de instagram
  
- Usar Clean Architeture

- perfis iniciais: https://parade.com/974245/jessicasager/best-inspirational-instagram-accounts/

Entidades: Posts, Users, Categories

Stack: mongodb, node, typescript, jest

Deploy: Heroku

 📦src
 ┣ 📂Interfaces
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜IPost.ts
 ┣ 📂modules
 ┃ ┣ 📂entities
 ┃ ┃ ┣ 📜Account.ts
 ┃ ┃ ┣ 📜Category.ts
 ┃ ┃ ┗ 📜Post.ts
 ┃ ┣ 📂repositories
 ┃ ┗ 📂useCases
 ┃ ┃ ┣ 📂facebook
 ┃ ┃ ┗ 📂instagram
 ┗ 📜index.ts