import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from './ui/button';
import type { Story } from '@/types/story-types';

type Props = {
  stories: Story[];
  onLike: (storyId: string) => void;
}

const StoryTable = ({ stories, onLike }:Props) => {
  return (
      <Table>
        <TableCaption>Stories</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">User</TableHead>
            <TableHead className=''>Emoji Sequence</TableHead>
            <TableHead>Story</TableHead>
            <TableHead>Likes</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stories.map((story) => (
          <TableRow key={story.id}>
            <TableCell className="px-6 py-4 whitespace-nowrap">{story.authorNickname}</TableCell>
            <TableCell className="px-6 py-4 whitespace-nowrap">{story.emojiSequence}</TableCell>
            <TableCell className="px-6 py-4 whitespace-nowrap">{story.translation}</TableCell>
            <TableCell className="px-6 py-4 whitespace-nowrap text-right">{story.likes}</TableCell>
            <TableCell className="px-6 py-4 whitespace-nowrap">
              <Button
                onClick={() => onLike(story.id)}
                className="text-blue-600 hover:text-blue-900"
              >
                Like
              </Button>
            </TableCell>
          </TableRow>
        ))}
          <TableRow>
            <TableCell className="font-medium">abc@example.com</TableCell>
            <TableCell>😊🫡</TableCell>
            <TableCell>Feel Good</TableCell>
            <TableCell className="text-right">2</TableCell>
          </TableRow>
        </TableBody>
      </Table>
  );
}

export default StoryTable;