export function SiteFooter() {
  return (
    <footer className="bg-card">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8 border-t border-border">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Vignesh Dhanasekaran. All rights reserved.</p>
        <p className="text-sm text-muted-foreground">
          Built with <span className="text-primary">Next.js</span>
        </p>
      </div>
    </footer>
  )
}
