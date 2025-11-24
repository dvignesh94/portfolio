import { SocialLinks } from "@/components/portfolio/social-links"

export function Hero() {
  return (
    <section aria-label="Intro" className="border-b border-border bg-card">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="mx-auto max-w-2xl space-y-5 text-center animate-fade-up">
          <p className="text-sm text-muted-foreground">Portfolio</p>
          <h1 className="text-pretty text-3xl font-semibold leading-tight md:text-5xl">
            Hi, I’m <span className="text-primary">Vignesh Dhanasekaran</span>. I craft clean, accessible experiences.
          </h1>
          <p className="text-pretty text-muted-foreground md:text-lg leading-relaxed">
            Senior Manager — Product, Analytics & Partnerships at Thinkster Math. Focused on CX, retention, and
            data-driven improvements with practical AI automation.
          </p>
          <div className="flex justify-center">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  )
}
