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
  { icon: Camera, label: "Photography Portfolio", handle: "capshotvisuals.com", href: "https://capshotvisuals.com" },
  { icon: Instagram, label: "Instagram — Photography", handle: "@capshot.visuals", href: "https://www.instagram.com/capshot.visuals/" },
];

const Index = () => {
  return (
    <main className="grain relative min-h-screen overflow-hidden">
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col px-6 py-16">
        {/* Profile */}
        <header className="flex flex-col items-center text-center">
          <div className="relative mb-8">
            <img
              src={avatar}
              alt="Tamás Kapitány — portrait"
              width={128}
              height={128}
              className="h-32 w-32 rounded-full object-cover shadow-[var(--shadow-elegant)] ring-1 ring-border"
            />
          </div>

          <p className="mb-3 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
            Freelance · Web & Photography
          </p>

          <h1 className="font-display text-5xl leading-[1.05] text-foreground">
            Tamás <em className="font-display italic text-accent">Kapitány</em>
          </h1>

          <div className="my-6 h-px w-12 bg-foreground/30" aria-hidden />

          <p className="max-w-xs text-balance text-sm leading-relaxed text-muted-foreground">
            Freelance web developer & photographer crafting timeless digital experiences and natural-light portraits.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Available for collabs
          </div>
        </header>

        {/* Links */}
        <div className="mt-14 flex w-full flex-col gap-12">
          <section aria-labelledby="personal-heading">
            <div className="mb-2 flex items-baseline justify-between border-b border-foreground/30 pb-2">
              <h2 id="personal-heading" className="font-display text-xs uppercase tracking-[0.32em] text-foreground">
                Personal
              </h2>
              <span className="font-display text-xs italic text-muted-foreground">01</span>
            </div>
            <div className="flex flex-col">
              {personalLinks.map((link) => (
                <SocialLink key={link.label} {...link} />
              ))}
            </div>
          </section>

          <section aria-labelledby="photo-heading">
            <div className="mb-2 flex items-baseline justify-between border-b border-foreground/30 pb-2">
              <h2 id="photo-heading" className="font-display text-xs uppercase tracking-[0.32em] text-foreground">
                Photography
              </h2>
              <span className="font-display text-xs italic text-muted-foreground">02</span>
            </div>
            <div className="flex flex-col">
              {photoLinks.map((link) => (
                <SocialLink key={link.label} {...link} />
              ))}
            </div>
          </section>
        </div>

        <footer className="mt-20 flex flex-col items-center gap-2 text-center">
          <div className="h-px w-8 bg-foreground/20" aria-hidden />
          <p className="font-display text-xs italic text-muted-foreground">
            © {new Date().getFullYear()} · Tamás Kapitány
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Index;
