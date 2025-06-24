import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { addNewStory } from "@/service/storyService";
import { useState } from "react";

type Props = {
  open?: boolean;
  onClose?: () => void;
}

const StoryDialog = ({open, onClose}:Props) => {
  const [emojiSequence, setEmojiSequence] = useState<string>("");

  const onStorySubmit = async () => {
    try{
      const newStory = await addNewStory(
        emojiSequence.split("") as string[] || [],
        localStorage.getItem("userEmail") || "",
        undefined
      );
      console.log("New Story Created:", newStory);
      if (onClose) {
        onClose();
      }
    } catch (error) {
      console.error("Error creating story:", error);
    }
  }

  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create Emoji Story</DialogTitle>
          <DialogDescription>
            create your own emoji story and share it with the world!
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <Label>
              Emoji Sequence
            </Label>
            <Input
              id="link"
              onChange={(e) => {
                setEmojiSequence(e.target.value);
              }}
            />  
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <Button variant="default" onClick={onStorySubmit} type="submit">
            Submit
          </Button>
          <DialogClose asChild>
            <Button type="button" variant="secondary" onClick={onClose} onAbort={onClose}>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default StoryDialog;