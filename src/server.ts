import express, { Application } from 'express';
import cors from 'cors';
import apiRoutes from './api/index';

const app: Application = express();

app.use(cors());

app.use('/', apiRoutes);

const port: number = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;