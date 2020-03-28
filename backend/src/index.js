const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
//quando ospedar dentro dos paaranteses do cors coloca a ospedagem dosite
//falando qm vai poder cessa-lo
//cors('http://meuapp.com')
app.use(cors());
app.use(express.json());
app.use(routes)

/**
 * .get = metodo para buscar/listar informações do back-end
 * .post = metodo para criar informações no back-end
 * .put = metodo para alterar informação no back-end
 * .delete = metodo para deletar uma informação no back-end
 */

 /**parametros
  * .query: parametros nomeados enviados na rota após ? (Filtros, Paginação)
  * .params: parametros para identificar recursos/rotas
  * .body = corpo da requisição, utilizado para criar ou alterar recursos
  */


app.listen(3333);