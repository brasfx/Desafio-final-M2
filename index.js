import express from 'express';
import { promises } from 'fs';
import gradesRouter from './routes/grades.js';

const app = express();
const readFile = promises.readFile;
const writeFile = promises.writeFile;

global.fileName = 'grades.json';

app.use(express.json());
app.use('/grades', gradesRouter);

/*Iniciandi o servidor local*/
app.listen(3000, async () => {
  try {
    await readFile(fileName, 'utf8');
    console.log(`Servidor rodando na porta 3000`);
  } catch (err) {
    console.log('Ocorreu um erro na aplicação!', err);
  }
});
