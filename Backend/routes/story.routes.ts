import { Router } from 'express';
import { getUserStory, addNewStory, getAllStories, translateEmoji } from '../controllers/story.controller';

const StoryRoute = () => {
  const router = Router();

  router.get('/', getAllStories);
  router.get('/', getUserStory);
  router.post('/', addNewStory);
  router.post('/translate', translateEmoji);
  return router;
};

export { StoryRoute };
