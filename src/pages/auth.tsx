import Input from "@/components/Input";
import axios from "axios";
import { ChangeEvent, useCallback, useState } from "react";
import { signIn } from "next-auth/react";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "register" ? "login" : "register"
    );
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/profiles",
      });
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });
      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-fixed bg-center bg-cover">
      <div className="w-full h-full bg-black lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="self-center w-full px-16 py-16 mt-2 rounded-md bg-black/70 lg:w-2/5 lg:max-w-md">
            <h2 className="mb-8 text-4xl font-semibold text-white">
              {variant === "login" ? "Sign in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  id="name"
                  label="Username"
                  onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                    setName(evt.target.value)
                  }
                  type="text"
                  value={name}
                />
              )}
              <Input
                id="email"
                label="Email"
                onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                  setEmail(evt.target.value)
                }
                type="email"
                value={email}
              />

              <Input
                id="password"
                label="Password"
                onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                  setPassword(evt.target.value)
                }
                type="password"
                value={password}
              />
            </div>
            <button
              onClick={variant === "register" ? register : login}
              className="w-full py-3 mt-10 text-white transition bg-red-600 rounded-md hover:bg-red-700">
              {variant === "register" ? "Sign up" : "Login"}
            </button>
            <div className="flex items-center justify-center gap-4 mt-8">
              <div
                onClick={() =>
                  signIn("google", {
                    callbackUrl: "/profiles",
                  })
                }
                className="flex items-center justify-center w-10 h-10 transition bg-white rounded-full cursor-pointer hover:opacity-80">
                <FcGoogle size={30} />
              </div>
              <div
                onClick={() =>
                  signIn("github", {
                    callbackUrl: "/profiles",
                  })
                }
                className="flex items-center justify-center w-10 h-10 transition bg-white rounded-full cursor-pointer hover:opacity-80">
                <FaGithub size={30} />
              </div>
            </div>

            <p className="mt-12 text-neutral-500">
              {variant === "register"
                ? "Already have an account?"
                : "First time using Netflix?"}

              <span
                onClick={toggleVariant}
                className="ml-1 text-white cursor-pointer hover:underline">
                {variant === "register" ? "Login" : " Create an account"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
