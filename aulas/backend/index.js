// Importando Express
const express = require('express');
// Setando meu app
const app = express();
// Rota Padrão
app.get('/', (request, response) => {
    //return response.send('Hello World')
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Gian Michel'
    });
});
// Ouvindo na porta 3333
app.listen(3333)