import React from "react";
import {
  Form,
  Link,
  useActionData,
  useNavigation,
  redirect,
} from "react-router-dom";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useGlobalContext } from "../Context/context";
import { Button } from "../Components";
import { auth } from "../Firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const username = formData.get("username");
  const password = formData.get("password");
  const pathname = new URL(request.url).searchParams.get("redirectTo") || "/";
  const errors = {};
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  try {
    if (!email) {
      errors.email = "Provide an email address";
    }
    if (email && !email.includes("@")) {
      errors.email = "That doesn't look like an email address";
    }
    if (!username) {
      errors.username = "Enter a username";
    }

    if (email && username && !password) {
      errors.password = "Please setup your password";
    }

    if (password && password.length < 6) {
      errors.password = "Password should be at least 6 characters";
    }

    if (Object.keys(errors).length) {
      return errors;
    }

    const res = await createUser(email, password);
    const user = res.user;
    await updateProfile(auth.currentUser, { displayName: username });

    const db = getDatabase();
    set(ref(db, "users/" + user.uid), {
      username: username,
      email: email,
    });
    return redirect(pathname);
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      error.message = "Email address already in use!";
    }

    return error.message;
  }
};

const SignUp = () => {
  const { visibility, isVisibilityOn } = useGlobalContext();
  const errors = useActionData();
  const navigation = useNavigation();

  return (
    <main className="grid place-items-center">
      <section className=" w-full  max-w-xl font-medium">
        <div className="bg-main-bg rounded-t-bg-br pt-20 px-8 flex flex-col gap-10">
          <div className="text-center">
            <h1 className="text-blue text-3xl tracking-wide font-semibold">
              Welcome !
            </h1>
            <h2 className="text-black text-xl mt-2">Sign up to continue</h2>
          </div>
          <div>
            <Form className="flex flex-col" method="post">
              <span>
                <input
                  type="email"
                  name="email"
                  autoComplete="off"
                  placeholder="Email"
                  className="border border-bd-black rounded min-w-full py-4 px-3 outline-yellow text-sm tracking-wide"
                />

                {errors?.email && (
                  <span className="text-red-500 text-sm">{errors.email}</span>
                )}
              </span>

              <span className="mt-6">
                <input
                  type="text"
                  name="username"
                  autoComplete="off"
                  placeholder="Username"
                  className="border border-bd-black rounded min-w-full py-4 px-3 outline-yellow text-sm tracking-wide"
                />

                {errors?.username && (
                  <span className="text-red-500 text-sm">
                    {errors.username}
                  </span>
                )}
              </span>

              <span className="relative mt-6">
                <input
                  type={isVisibilityOn ? "text" : "password"}
                  name="password"
                  autoComplete="off"
                  placeholder="Password"
                  className="border border-bd-black rounded min-w-full py-4 px-3 outline-yellow text-sm tracking-wide"
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

              <div className="mt-7">
                <Button
                  width="100%"
                  disabled={navigation.state}
                  text={`${
                    navigation.state === "submitting"
                      ? "Signing up..."
                      : "Sign Up"
                  }`}
                  bgColor="#FFA500"
                  paddingY="10px"
                  color="#FFFFFF"
                />
              </div>
            </Form>

            <div className="mt-28 text-center ">
              <p className="text-sm tracking-wide text-black font-thin">
                Already have an account?{" "}
                <Link to="/login" className="text-blue font-semibold">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignUp;
