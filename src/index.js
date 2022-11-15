const express = require('express');
const bodyParser = require('body-parser');
const { getAlltalkers } = require('./utils/handleTalkers');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliaador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (_req, res) => {
  const talkers = await getAlltalkers();
  const emptyArray = [];
  if (talkers.lenght === 0) {
     res.status(HTTP_OK_STATUS).json(emptyArray);
  } else {
    res.status(HTTP_OK_STATUS).json(talkers);
  }
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const talkers = await getAlltalkers();
  const talker = talkers.find((t) => t.id === Number(id));
  if (talker) {
    return res.status(HTTP_OK_STATUS).json([talker][0]);
  }
    res.status(404).send({ 
      message: 'Pessoa palestrante não encontrada', 
    });
});

app.listen(PORT, () => {
  console.log('Online');
});
