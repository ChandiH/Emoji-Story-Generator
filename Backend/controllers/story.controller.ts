import { Request, Response } from 'express';
import { EmojiStory, EmojiStoryInput } from '../models/story.model';
import { EmojiTranslater } from '../util/translator';

const addNewStory = async (req: Request, res: Response) => {
  const { emojiSequence, email, translation } = req.body;
  if (!emojiSequence || !Array.isArray(emojiSequence) || emojiSequence.length === 0) {
    return res.status(400).json({
      error: 'emojiSequence is required and must be a non-empty array'
    });
  }
  try {
    const newStory: EmojiStoryInput = {
      authorNickname: email,
      emojiSequence,
      translation: translation || EmojiTranslater(emojiSequence),
      likes: 0
    };
    const storyCreated = await EmojiStory.create(newStory);
    res.status(201).json({ data: storyCreated });
  } catch (err) {
    res.status(500).send('An error occurred while creating the story');
  }
}

const getAllStories = async (req: Request, res: Response) => {
  const stories = await EmojiStory.find().sort('-createdAt').exec();
  return res.status(200).json({ data: stories });
};

const getUserStory = async (req: Request, res: Response) => {
  const { email } = req.query;
  if (!email || typeof email !== 'string') {
    return res.status(400).json({
      error: 'email is required and must be a string'
    });
  }
  try{
    const stories = await EmojiStory.find({ authorNickname: email }).sort('-createdAt').exec();
    return res.status(200).json({ data: stories.length === 0 ? [] : stories });
  } catch (error) {
    return res.status(500).json({
      error: 'An error occurred while fetching the stories'
    });
  }
};

const translateEmoji = async (req: Request, res: Response) => {
  const { emojiSequence } = req.body;
  if (!emojiSequence || !Array.isArray(emojiSequence) || emojiSequence.length === 0) {
    return res.status(400).json({
      error: 'emojiSequence is required and must be a non-empty array'
    });
  }

  const translation = EmojiTranslater(emojiSequence);
  return res.status(200).json({ translation });
}

const likeStory = async (req: Request, res: Response) => {
  const { storyId } = req.query;
  if (!storyId || typeof storyId !== 'string') {
    return res.status(400).json({
      error: 'storyId is required and must be a string'
    });
  }
  try {
    const story = await EmojiStory.findById(storyId);
    if (!story) {
      return res.status(404).json({
        error: 'Story not found'
      });
    }
    story.likes += 1;
    await story.save();
    return res.status(200).json({ data: story });
  } catch (error) {
    return res.status(500).json({
      error: 'An error occurred while liking the story'
    });
  }
}

export { getUserStory, getAllStories, addNewStory, translateEmoji, likeStory };