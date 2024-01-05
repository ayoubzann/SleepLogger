'use client'

import { useEffect } from "react";
import FetchApi from "@/components/FetchApi";

export default function Home() {


    console.log("Hello!");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello!
      <FetchApi />
    </main>
  )
}
