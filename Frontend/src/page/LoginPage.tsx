import React from 'react';
import { LoginForm } from '@/components/login-form';
import { Card, CardContent } from '@/components/ui/card';

const LoginPage = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <Card>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginPage;