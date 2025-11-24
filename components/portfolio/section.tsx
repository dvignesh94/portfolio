"use client"

import type { PropsWithChildren } from "react"

export default function Section({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <section className="opacity-0 translate-y-2 animate-fade-up">
      <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  )
}
