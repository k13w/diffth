import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();
const port = process.env.PORT || '7000';

app.use(express.json());
app.use(cors());
app.use('/', routes);

app.listen(port, () => console.log(`Server is listening on ${port}`));