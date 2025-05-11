import { Label } from "@radix-ui/react-label";
import { type FormEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { useAppDispatch, useAppSelector } from "@/store/hooks.ts";
import { login } from "@/store/api-actions/auth.ts";
import { Eye, EyeOff } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { Alert, AlertDescription } from "@/components/ui/alert.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import YandexIcon from "@/icons/yandex-icon.tsx";
import GithubIcon from "@/icons/github-icon.tsx";
import { useNavigate } from "react-router";

function LoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const errors = useAppSelector((state) => state.errors);
  const loading = useAppSelector((state) => state.loading);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    if (errors && errors.length > 0) {
      setErrorMessage(errors[0].message);
    }
  }, [errors, dispatch]);

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!email || !password) {
      setErrorMessage("Please enter both email and password");
      return;
    }

    dispatch(login({ username: email, password }));
  }

  function handleForgotPassword() {
    if (!email) {
      setErrorMessage("Please enter your email address first");
      return;
    }
    setSuccessMessage("Password reset link sent to your email");
  }

  function onSwitchToRegister() {
    navigate("/register");
  }

  return (
    <div className="flex flex-col h-full overflow-y-auto -mx-8 px-8">
      <Card className="border-0 shadow-none p-0">
        <CardHeader className="flex flex-col space-y-0 p-0">
          <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
          <CardDescription className="text-base text-muted-foreground">Sign in to continue</CardDescription>
        </CardHeader>
        <CardContent className="px-0 pt-6">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-base font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-base h-12 rounded-lg mt-2"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-base font-medium">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-base h-12 rounded-lg pr-10 mt-2"
                />
                <button
                  type="button"
                  className="cursor-pointer absolute right-4 top-0 h-12 text-muted-foreground"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                  {isPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-base text-primary font-medium cursor-pointer"
              >
                Forgot Password?
              </button>
            </div>

            {errorMessage && (
              <Alert
                variant="destructive"
                className="bg-red-50 text-red-600 border-red-200 h-12 py-0 flex items-center"
              >
                <AlertDescription className="text-base">{errorMessage}</AlertDescription>
              </Alert>
            )}

            {successMessage && (
              <Alert
                variant="default"
                className="bg-green-50 text-green-600 border-green-200 h-12 py-0 flex items-center"
              >
                <AlertDescription className="text-base">{successMessage}</AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="cursor-pointer w-full h-12 rounded-lg text-base font-medium"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </Button>

            <div className="flex items-center gap-4 w-full">
              <Separator orientation="horizontal" className="shrink" />
              <p className="text-base text-muted-foreground text-nowrap">Or continue with</p>
              <Separator orientation="horizontal" className="shrink" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                type="button"
                disabled={loading}
                className="h-12 text-base rounded-lg cursor-pointer"
              >
                <GithubIcon />
                GitHub
              </Button>
              <Button
                variant="outline"
                type="button"
                disabled={loading}
                className="h-12 text-base rounded-lg cursor-pointer"
              >
                <YandexIcon />
                Yandex
              </Button>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex justify-center pt-2 pb-8">
          <p className="text-base text-muted-foreground">
            Don't have an account?{" "}
            <button
              onClick={onSwitchToRegister}
              className="cursor-pointer text-base text-primary font-medium"
            >
              Sign Up
            </button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default LoginPage;
