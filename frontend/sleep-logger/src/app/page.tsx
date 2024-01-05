'use client'

import { useEffect } from "react";
import FetchApi from "@/components/FetchApi";

export default function Home() {



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello!
      <FetchApi />
    </main>
  )
}
