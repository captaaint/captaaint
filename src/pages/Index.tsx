import { Instagram, Linkedin, Github, Camera } from "lucide-react";
import SocialLink from "@/components/SocialLink";

const avatar = "https://res.cloudinary.com/dex9lnark/image/upload/c_fill,g_face,w_900/me_dtnmbr";

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
  { icon: Camera, label: "Website", handle: "capshotvisuals.com", href: "https://capshotvisuals.com" },
  { icon: Instagram, label: "Instagram", handle: "@capshot.visuals", href: "https://www.instagram.com/capshot.visuals/" },
];

const Index = () => {
  return (
    <main className="relative min-h-screen">
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col px-6 py-20 slide-in-up">
        {/* Profile */}
        <header className="flex flex-col items-center text-center">
          <div className="relative mb-10">
            <img
              src={avatar}
              alt="Tamás Kapitány — portrait"
              width={144}
              height={144}
              className="h-36 w-36 object-cover shadow-image"
            />
          </div>

          <h1 className="font-display text-5xl leading-[1.05] text-card-foreground whitespace-nowrap">
            Tamás <span className="text-warm-gold">Kapitány</span>
          </h1>

          <span className="nav-link mt-5 mb-8">Freelance · Web & Photography</span>

          <div className="inline-flex items-center gap-2 nav-link">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-warm-gold opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-warm-gold" />
            </span>
            Available for collabs
          </div>
        </header>

        {/* Links */}
        <div className="mt-20 flex w-full flex-col gap-14">
          <section aria-labelledby="personal-heading">
            <div className="mb-2 border-b border-card-foreground/30 pb-3">
              <h2 id="personal-heading" className="nav-link" style={{ color: "hsl(var(--card-foreground))" }}>
                Personal
              </h2>
            </div>
            <div className="flex flex-col">
              {personalLinks.map((link) => (
                <SocialLink key={link.label} {...link} />
              ))}
            </div>
          </section>

          <section aria-labelledby="photo-heading">
            <div className="mb-2 border-b border-card-foreground/30 pb-3">
              <h2 id="photo-heading" className="nav-link" style={{ color: "hsl(var(--card-foreground))" }}>
                Photography
              </h2>
            </div>
            <div className="flex flex-col">
              {photoLinks.map((link) => (
                <SocialLink key={link.label} {...link} />
              ))}
            </div>
          </section>
        </div>

        <footer className="mt-24 flex flex-col items-center gap-3 text-center">
          <p className="font-quote text-sm text-muted-foreground">
            © {new Date().getFullYear()} · Tamás Kapitány
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Index;
