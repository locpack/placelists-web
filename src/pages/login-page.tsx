import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/hooks/redux";
import { OauthProvider } from "@/settings";
import { callback, login } from "@/store/api-actions/oauth-actions";
import { Label } from "@radix-ui/react-menubar";
import { useEffect } from "react";
import { useSearchParams } from "react-router";

function LoginPage() {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const code = searchParams.get("code");
    const provider = searchParams.get("provider");
    if (code && provider) {
      dispatch(callback({ code, provider: provider as OauthProvider }));
    }
  }, [dispatch]);

  return (
    <form className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label>Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required disabled />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label>Password</Label>
            <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" required disabled />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" className="w-full" onClick={() => dispatch(login(OauthProvider.Github))}>
            Login with Github
          </Button>
          <Button variant="outline" className="w-full" onClick={() => dispatch(login(OauthProvider.Yandex))}>
            Login with Yandex
          </Button>
        </div>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="#" className="underline underline-offset-4">
          Sign up
        </a>
      </div>
    </form>
  );
}

export default LoginPage;
