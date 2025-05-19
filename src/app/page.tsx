"use client";

import React from "react";

export default function App() {
  const handleLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center text-center gap-2">
      <h1 className="text-4xl font-bold mb-4">SupaNext Starter Template</h1>
      <h1 className="text-2xl">Comes preloaded with:</h1>

      <div className="flex gap-4">
        <h1 className="link" onClick={() => handleLink("https://nextjs.org/")}>
          Next.js
        </h1>
        <h1
          className="link"
          onClick={() => handleLink("https://supabase.com/")}
        >
          Supabase
        </h1>
        <h1
          className="link"
          onClick={() => handleLink("https://tailwindcss.com/")}
        >
          TailwindCSS
        </h1>
        <h1 className="link" onClick={() => handleLink("https://daisyui.com/")}>
          daisyUI
        </h1>
        <h1 className="link" onClick={() => handleLink("https://lucide.dev/")}>
          Lucide Icons
        </h1>
      </div>

      <p className="mt-4">And a prebuilt auth system!</p>
    </div>
  );
}
