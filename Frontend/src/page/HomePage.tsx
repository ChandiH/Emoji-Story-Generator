import { Button } from '@/components/ui/button';
import React, { useEffect } from 'react';
import StoryTable from '@/components/story-table';
import { addLikeToStory, getAllStories } from '@/service/storyService';
import StoryDialog from '@/components/story-dialog';
import { Separator } from '@/components/ui/separator';

const HomePage = () => {
  const userEmail = localStorage.getItem("userEmail");
  const [stories, setStories] = React.useState([]);
  const [openModel, setOpenModel] = React.useState(false);

  const onStoryLike = async (storyId: string) => {
    try {
      await addLikeToStory(storyId);
      fetchStories(); // Refresh the stories after liking
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
  }

  const fetchStories = async () => {
    try {
      const stories = await getAllStories();
      if (stories) {
        setStories(stories.data || []);
      } else {
        console.error("Failed to fetch stories");
      }
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
  }

  useEffect(() => {
      fetchStories();
  }, []);

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (!userEmail) {
      window.location.href = "/login";
    }
  }, [userEmail]);

  const handleAddStory = () => {
    setOpenModel(true);
  }

  return (
    <>
    <StoryDialog open={openModel} onClose={()=> setOpenModel(false)} />
    <div className='flex flex-row items-center justify-between'>
      <div className='text-2xl font-bold'>{userEmail}</div>
      <div className='flex flex-row items-center gap-2'>
        <Button
          className='bg-blue-500 text-white hover:bg-blue-600'
          onClick={handleAddStory}
        >
          Add Story
        </Button>
        <Button
          onClick={() => {
            localStorage.removeItem("userEmail");
            window.location.href = "/login";
          }}

        >
          Logout
        </Button>
      </div>
    </div>
    <Separator className='my-4' />
    <div className='text-2xl font-bold mb-4'>Emoji Stories</div>
    <StoryTable 
      stories={stories}
      onLike={onStoryLike} />
    </>
  );
}

export default HomePage;