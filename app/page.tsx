import { Navbar } from "@/components/portfolio/navbar"
import Section from "@/components/portfolio/section"
import { SocialLinks } from "@/components/portfolio/social-links"
import { SiteFooter } from "@/components/portfolio/footer"
import { Hero } from "@/components/portfolio/hero"

export default function Page() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />

        <div className="px-6 pb-16">
          <div className="mx-auto max-w-5xl space-y-10">
            <Section title="Featured Work">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-border bg-card p-5 animate-fade-up">
                  <h3 className="font-medium">Thinkster CX Analytics & Automation</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Led initiatives across product, analytics, and partnerships to improve NPS, retention, and
                    operational efficiency using data-driven workflows and AI automation.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-5 animate-fade-up">
                  <h3 className="font-medium">INRO Labs — Maker Lab Ops</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Built and scaled operations for competitive robotics, large-scale training programs, and IoT/env
                    tech initiatives with community impact.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-5 animate-fade-up md:col-span-2">
                  <h3 className="font-medium">Tech Scouting & Events</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Supported product development, technical training, and large-scale event management to bring
                    hands-on tech learning to broader audiences.
                  </p>
                </div>
              </div>
            </Section>

            <Section title="Highlights">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2 animate-fade-up">
                  <h4 className="font-medium">Strengths</h4>
                  <ul className="list-disc pl-5 text-sm leading-relaxed">
                    <li>Customer Experience & Retention</li>
                    <li>AI Automation & Process Optimization</li>
                    <li>Data-Driven Decision Making</li>
                    <li>Cross-functional Leadership</li>
                  </ul>
                </div>
                <div className="space-y-2 animate-fade-up">
                  <h4 className="font-medium">Languages & Certifications</h4>
                  <p className="text-sm">Tamil (Native), English (Full Professional)</p>
                  <ul className="mt-1 list-disc pl-5 text-sm leading-relaxed">
                    <li>Applied Business Analytics</li>
                    <li>Project Management</li>
                    <li>Foundation of Digital Marketing</li>
                  </ul>
                </div>
              </div>
            </Section>

            <Section title="Contact">
              <div className="animate-fade-up">
                <SocialLinks size="sm" />
              </div>
            </Section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
