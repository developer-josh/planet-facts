import React from "react";

function Page({ ...props }) {
  return (
    <main className="flex flex-col items-center justify-start w-full min-h-screen bg-primary bg-backgroundStars bg-cover bg-center bg-no-repeat overflow-hidden text-white p-6">
      {props.children}
    </main>
  );
}

export default Page;
