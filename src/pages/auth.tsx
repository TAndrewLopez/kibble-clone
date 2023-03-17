import Input from "@/components/Input";
import { ChangeEvent, useCallback, useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-fixed bg-center bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black/70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
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
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              {variant === "register" ? "Sign up" : "Log in"}
            </button>
            <p className="text-neutral-500 mt-12">
              First time using Netflix?
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer">
                Create an account
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
