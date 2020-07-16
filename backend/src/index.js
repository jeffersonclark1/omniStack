const express = require('express');
const routes = require('./routes');
const cors = require('cors');

/**
 * GET : Buscar/listar uma informacao do back-end
 * POST : Criar uma informacao no back-end
 * PUT : Alterar uma informacao no back-end
 * DELETE : Deletar uma informacao no back-end
 */


 /**
  * Tipos de parametros:
  * 
  * Query params : Parametros nomeados enviados na rota apos "?" (Filtro,paginacao)
  * Route Params : Paramentros utilizados para identificar recursos
  * Request Body : Corpo da requisicao, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: Mysql, SQLite, PostgreSQL, Oracle, SQL Server
   * NoSQL: MongoDB, CouchBD, etc
   */


const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333);