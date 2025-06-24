import { Button } from '@/components/ui/button';
import React from 'react';

const HomePage = () => {
  const userEmail = localStorage.getItem("userEmail");

  return (
    <>
    <div className='flex flex-row items-center justify-between'>
      <div>{userEmail}</div>
      <Button
        onClick={() => {
          localStorage.removeItem("userEmail");
          window.location.href = "/login";
        }}

      >
        Logout
      </Button>
    </div>
    </>
  );
}

export default HomePage;