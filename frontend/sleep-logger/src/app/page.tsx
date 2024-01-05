'use client'

import { useEffect } from "react";
import SleepLogPage from "@/components/SleepLogPage";

export default function Home() {



  return (
    <main className="flex min-h-screen flex-col flex-start items-center align-middle justify-between p-24">
      Hello!
      <SleepLogPage />
    </main>
  )
}
