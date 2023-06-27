import React, { useEffect, useState } from "react";
import {
  Form,
  Link,
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useGlobalContext } from "../Context/context";
import { Button } from "../Components";
import { auth } from "../Firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export const action = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const pathname = new URL(request.url).searchParams.get("redirectTo") || "/";
  const errors = {};

  try {
    if (!email) {
      errors.email = "Email or username required";
    }
    if (!password) {
      errors.password = "Password required";
    }
    if (password && password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (Object.keys(errors).length) {
      return errors;
    }

    await signInWithEmailAndPassword(auth, email, password);
    return redirect(pathname);
  } catch (error) {
    if (error.code === "auth/invalid-password") {
      error.message = "Incorrect password!";
    }

    if (error.code === "auth/invalid-email") {
      error.message = "No account found for this email address";
    }

    return error.message;
  }
};

const Login = () => {
  const { visibility, isVisibilityOn } = useGlobalContext();
  const errors = useActionData();
  const navigation = useNavigation();
  const [isErrorMessageVisible, setIsErrorMessageVisible] = useState(false);
  const message = useLoaderData();

  useEffect(() => {
    if (errors?.email || errors?.password) {
      setTimeout(() => {
        setIsErrorMessageVisible(true);
      }, 3000);
    }
  }, []);

  return (
    <main className="grid place-items-center">
      <section className="w-full max-w-xl font-medium">
        <div className="bg-main-bg rounded-t-bg-br pt-20 px-8 flex flex-col gap-10">
          <div className="text-center">
            <h1 className="text-blue text-3xl tracking-wide font-semibold">
              Welcome !
            </h1>
            <h2 className="text-black text-xl mt-2">Sign in to continue</h2>
          </div>

          <div>
            <Form className="flex flex-col" method="post">
              {message && (
                <span className="text-red-500 text-sm">{message}</span>
              )}

              <span>
                <input
                  type="text"
                  placeholder="Email or Username"
                  name="email"
                  autoComplete="on"
                  className={`border border-bd-black rounded min-w-full py-4 px-3 ${
                    errors?.email ? "border-red-500" : "border-bd-black"
                  } text-sm tracking-wide outline-yellow`}
                />
                {errors?.email && (
                  <span className="text-red-500 text-sm">{errors.email}</span>
                )}
              </span>

              <span className="relative mt-6">
                <input
                  type={isVisibilityOn ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  autoComplete="off"
                  className={`border min-w-full py-4 px-3 outline-yellow text-sm tracking-wide ${
                    errors?.email ? "border-red-500" : "border-bd-black"
                  }`}
                />

                <div className="absolute right-5 top-4 text-xl text-bd-black">
                  <div onClick={visibility}>
                    {isVisibilityOn ? <MdVisibility /> : <MdVisibilityOff />}
                  </div>
                </div>

                {errors?.password && (
                  <span className="text-red-500 text-sm">
                    {errors.password}
                  </span>
                )}
              </span>

              <div className="text-right mt-3">
                <p className="text-blue text-sm tracking-wide">
                  Forget Password?
                </p>
              </div>

              <div className="mt-4">
                <Button
                  width="100%"
                  disabled={navigation.state}
                  text={`${
                    navigation.state === "submitting"
                      ? "logging in..."
                      : "log in"
                  }`}
                  bgColor="#FFA500"
                  paddingY="10px"
                  color="#FFFFFF"
                />
              </div>
            </Form>

            <div className="text-center mt-48">
              <p className="text-sm tracking-wide text-black font-thin">
                Don't have an account yet?
                <Link to="/signup" className="text-blue font-semibold">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
