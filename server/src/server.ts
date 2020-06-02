import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    response.json({user: "Leonardo"});
});

app.listen(3333);