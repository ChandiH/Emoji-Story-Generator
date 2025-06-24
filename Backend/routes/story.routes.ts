import { Router } from 'express';
import { getUserStory, addNewStory, getAllStories, translateEmoji, likeStory } from '../controllers/story.controller';

const StoryRoute = () => {
  const router = Router();

  router.get('/', getAllStories);
  router.get('/', getUserStory);
  router.post('/', addNewStory);
  router.post('/translate', translateEmoji);
  router.post('/like', likeStory);
  return router;
};

export { StoryRoute };
