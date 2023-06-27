import React from "react";
import { useRouteError } from "react-router-dom";
import Button from "./Button";

const ErrorBoundary = () => {
  let error = useRouteError();

  return (
    <section className="flex flex-col gap-3 items-center justify-center h-screen text-center">
      <h1 className="text-lg font-medium text-red-800">Error</h1>
      <h2>{error.message}</h2>
      {/* <h1>{error.code}</h1> */}

      <Button
        bgColor="green"
        text="Try again"
        color="#FFFFFF"
        paddingY="8px"
        width="120px"
      />
    </section>
  );
};

export default ErrorBoundary;
