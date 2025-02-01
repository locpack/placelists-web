import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-menubar";

function LoginPage() {
  return (
    <form className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label>Email</Label>
          <Input id="email" type="email" placeholder="email@example.com" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label>Password</Label>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
          <Button variant="outline" className="w-full">
            Login with Github
          </Button>
        </div>
      </div>
    </form>
  );
}

export default LoginPage;
