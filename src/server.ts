import express from 'express';

const app = express()

app.get('/', (req , res) => {
  res.json({ Message: 'E la vamos nos'})
});

app.listen(3000);