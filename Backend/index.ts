import express from 'express';
import http from 'http';
import cors from 'cors';
import { StoryRoute } from './routes/story.routes';
import { connectToDatabase } from './databaseConnection';

const HOST = process.env.HOST || 'http://localhost';
const PORT = parseInt(process.env.PORT || '8080');

const app = express();

// Create an HTTP server
const server = http.createServer(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/story', StoryRoute());

server.listen(PORT, async () => {
  await connectToDatabase();
  console.log(`Connected to the database successfully!`);
  console.log(`Application started on URL ${HOST}:${PORT} 🎉`);
});
