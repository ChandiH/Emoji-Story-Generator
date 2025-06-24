import React, { useEffect } from "react";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  useEffect(() => {
    // Check if user email is already stored in localStorage
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      console.log("User email found in localStorage:", userEmail);
      // Redirect to home page if email is already stored
      window.location.href = "/";
    }
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    try {
      localStorage.setItem("userEmail", event.currentTarget.email?.value);
      console.log("User email saved:", event.currentTarget);
    } catch (error) {
      console.error("Error saving user email:", error);
      return;
    } finally {
      // Clear the form
      window.location.href = "/";
    }
    // redirect to home page
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-xl font-bold">Welcome to Emoji Story Generator.</h1>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="abc@example.com"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
