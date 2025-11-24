import Link from "next/link"

export function Navbar() {
  return (
    <nav className="border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Link href="/" className="font-semibold tracking-tight text-balance">
          <span className="sr-only">Home</span>
          <span aria-hidden className="text-primary">
            {"<"}
          </span>
          {"Vignesh Dhanasekaran"}
          <span aria-hidden className="text-primary">
            {"/>"}
          </span>
        </Link>
      </div>
    </nav>
  )
}
