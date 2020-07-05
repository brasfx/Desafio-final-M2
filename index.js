import express from 'express';
import { promises } from 'fs';
import gradesRouter from './routes/grades.js';

const app = express();
const port = 3000;
const readFile = promises.readFile;
const writeFile = promises.writeFile;

global.fileName = 'grades.json';

app.use(express.json());
app.use('/grades', gradesRouter);

/*Iniciandi o servidor local*/
app.listen(port, async () => {
  try {
    await readFile(fileName, 'utf8');
    console.log(`Servidor rodando na porta ${port}`);
  } catch (err) {
    console.log('Ocorreu um erro na aplicação!', err);
  }
});
