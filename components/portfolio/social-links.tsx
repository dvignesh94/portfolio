import { Button } from "@/components/ui/button"
import { Linkedin, Instagram, Mail, Youtube } from "lucide-react"
import type { ElementType } from "react"

type LinkItem = { label: string; href: string; ariaLabel?: string; Icon: ElementType }

const LINKS: LinkItem[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vigneshdhanasekaran/",
    ariaLabel: "LinkedIn profile",
    Icon: Linkedin,
  },
  { label: "Instagram", href: "https://www.instagram.com/dvignesh_vicky/", ariaLabel: "Instagram profile", Icon: Instagram },
  { label: "Email", href: "mailto:dvignesh4991@gmail.com", ariaLabel: "Send email", Icon: Mail },
  { label: "YouTube", href: "https://www.youtube.com/@dvignesh_vicky", ariaLabel: "YouTube channel", Icon: Youtube },
]

export function SocialLinks({ size = "default" }: { size?: "default" | "sm" }) {
  return (
    <div className="flex flex-wrap items-center gap-3 animate-fade-up">
      {LINKS.map((l) => (
        <Button key={l.href} variant="outline" size={size} asChild>
          <a
            href={l.href}
            aria-label={l.ariaLabel ?? l.label}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2"
          >
            <l.Icon className="size-4" aria-hidden="true" />
            <span>{l.label}</span>
          </a>
        </Button>
      ))}
    </div>
  )
}
