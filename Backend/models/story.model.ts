import mongoose, { Schema, Model, Document } from 'mongoose';

type EmojiStoryDocument = Document & {
 id: string;
 emojiSequence: string[];
 translation: string;
 authorNickname: string;
 likes: number;
 createdAt: Date;
}

type EmojiStoryInput = {
  emojiSequence: EmojiStoryDocument['emojiSequence'];
  translation: EmojiStoryDocument['translation'];
  authorNickname: EmojiStoryDocument['authorNickname'];
  likes?: EmojiStoryDocument['likes'];
};

const emojiStorySchema = new Schema(
  {
    emojiSequence: {
      type: [String],
      required: true,
    },
    translation: {
      type: String,
      required: true,
    },
    authorNickname: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const EmojiStory: Model<EmojiStoryDocument> = mongoose.model<EmojiStoryDocument>('EmojiStory', emojiStorySchema);

export { EmojiStory, EmojiStoryInput, EmojiStoryDocument };