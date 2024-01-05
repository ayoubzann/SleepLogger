'use client'

import { useEffect } from "react";
import SleepLogPage from "@/components/SleepLogPage";

export default function Home() {



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello!
      <SleepLogPage />
    </main>
  )
}
