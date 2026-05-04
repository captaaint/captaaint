import { Instagram, Linkedin, Github, Camera } from "lucide-react";
import SocialLink from "@/components/SocialLink";
import avatar from "@/assets/avatar.jpg";

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const personalLinks = [
  { icon: Instagram, label: "Instagram", handle: "@caaptaint", href: "https://www.instagram.com/caaptaint/" },
  { icon: XIcon, label: "X / Twitter", handle: "@captaaint", href: "https://x.com/captaaint" },
  { icon: Linkedin, label: "LinkedIn", handle: "kapitanytms", href: "https://www.linkedin.com/in/kapitanytms/" },
  { icon: Github, label: "GitHub", handle: "@captaaint", href: "https://github.com/captaaint" },
];

const photoLinks = [
  { icon: Camera, label: "Instagram — Photography", handle: "@capshot.visuals", href: "https://www.instagram.com/capshot.visuals/" },
  { icon: Camera, label: "Photography Portfolio", handle: "capshotvisuals.com", href: "https://capshotvisuals.com" },
];

const Index = () => {
  return (
    <main className="grain relative min-h-screen overflow-hidden">
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-6 py-16">
        {/* Profile */}
        <header className="flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div
              className="absolute inset-0 -z-10 rounded-full blur-2xl"
              style={{ background: "var(--gradient-primary)", transform: "scale(1.15)" }}
              aria-hidden
            />
            <img
              src={avatar}
              alt="Profile portrait"
              width={128}
              height={128}
              className="h-32 w-32 rounded-full border-2 border-primary/30 object-cover shadow-[var(--shadow-elegant)]"
            />
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground">
            Tamás Kapitány
          </h1>
          <p className="mt-2 max-w-xs text-balance text-sm text-muted-foreground">
            Freelance web developer & photographer.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for collabs
          </div>
        </header>

        {/* Links */}
        <div className="mt-12 flex w-full flex-col gap-8">
          <section className="flex flex-col gap-3" aria-labelledby="personal-heading">
            <h2 id="personal-heading" className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Personal
            </h2>
            {personalLinks.map((link) => (
              <SocialLink key={link.label} {...link} />
            ))}
          </section>

          <section className="flex flex-col gap-3" aria-labelledby="photo-heading">
            <h2 id="photo-heading" className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Photography
            </h2>
            {photoLinks.map((link) => (
              <SocialLink key={link.label} {...link} />
            ))}
          </section>
        </div>

        <footer className="mt-16 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} · Crafted with care
        </footer>
      </div>
    </main>
  );
};

export default Index;
