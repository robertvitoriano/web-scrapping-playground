Objetivo

- Extrair postagens de determinados perfis de instagram
  
- Usar Clean Architeture

- perfis iniciais: https://parade.com/974245/jessicasager/best-inspirational-instagram-accounts/

Entidades: Posts, Users, Categories

Stack: mongodb, node, typescript, jest

Deploy: Heroku

  __tests__
  src
  +--config
  +--interfaces
  +--database
  +--routes
  +--modules
  | +--entities
  | +--repositories
  | +--useCases
    |+--instagram
    |+--facebook