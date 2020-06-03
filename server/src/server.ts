import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from "path";
import routes from './routes';

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);