import { Label } from "@radix-ui/react-label";
import { type FormEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { useAppDispatch, useAppSelector } from "@/store/hooks.ts";
import { register } from "@/store/api-actions/auth.ts";
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
import { Checkbox } from "@/components/ui/checkbox.tsx";
import { PASSWORD_MIN_LENGTH } from "@/cfg/cfg.ts";

function RegisterPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const errors = useAppSelector((state) => state.errors);
  const loading = useAppSelector((state) => state.loading);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    if (errors && errors.length > 0) {
      setErrorMessage(errors[0].message);
    }
  }, [errors, dispatch]);

  async function handleRegister(e: FormEvent) {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!username || !email || !password || !confirmPassword) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    if (password.length < PASSWORD_MIN_LENGTH) {
      setErrorMessage(`Password must be at least ${PASSWORD_MIN_LENGTH} characters long`);
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    if (!agreeToTerms) {
      setErrorMessage("Please agree to the Terms of Service and Privacy Policy");
      return;
    }

    dispatch(register({ username, email, password }));
  }

  function onSwitchToLogin() {
    navigate("/login");
  }

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <Card className="border-0 shadow-none">
        <CardHeader className="flex flex-col items-center space-y-0 pt-8 pb-0">
          <CardTitle className="text-2xl font-bold">Create account</CardTitle>
          <CardDescription className="text-base text-muted-foreground">
            Sign up to get started
          </CardDescription>
        </CardHeader>
        <CardContent className="px-6 pt-6">
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-base font-medium">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="kfcgenius"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="text-base h-12 rounded-lg mt-2"
              />
            </div>

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
                  placeholder={"•".repeat(PASSWORD_MIN_LENGTH)}
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

            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-base font-medium">
                Confirm password
              </Label>
              <div className="relative">
                <Input
                  id="confirm-password"
                  type={isConfirmPasswordVisible ? "text" : "password"}
                  placeholder={"•".repeat(PASSWORD_MIN_LENGTH)}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="text-base h-12 rounded-lg pr-10 mt-2"
                />
                <button
                  type="button"
                  className="cursor-pointer absolute right-4 top-0 h-12 text-muted-foreground"
                  onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                >
                  {isConfirmPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Checkbox
                id="terms"
                checked={agreeToTerms}
                onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
                className="mt-1 cursor-pointer"
              />
              <Label htmlFor="terms" className="text-base text-muted-foreground leading-tight">
                I agree to the Terms of Service and Privacy Policy
              </Label>
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
              {loading ? "Signing Up..." : "Sign Up"}
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
            Already have an account?{" "}
            <button onClick={onSwitchToLogin} className="cursor-pointer text-base text-primary font-medium">
              Sign In
            </button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default RegisterPage;
