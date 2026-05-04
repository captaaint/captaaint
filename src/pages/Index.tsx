import { Instagram, Twitter, Youtube, Github, Linkedin, Music2, Globe } from "lucide-react";
import SocialLink from "@/components/SocialLink";
import avatar from "@/assets/avatar.jpg";

const links = [
  { icon: Instagram, label: "Instagram", handle: "@yourhandle", href: "https://instagram.com" },
  { icon: Twitter, label: "X / Twitter", handle: "@yourhandle", href: "https://twitter.com" },
  { icon: Youtube, label: "YouTube", handle: "Your Channel", href: "https://youtube.com" },
  { icon: Music2, label: "TikTok", handle: "@yourhandle", href: "https://tiktok.com" },
  { icon: Linkedin, label: "LinkedIn", handle: "Your Name", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", handle: "@yourhandle", href: "https://github.com" },
  { icon: Globe, label: "Website", handle: "yourdomain.com", href: "https://example.com" },
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
            Your Name
          </h1>
          <p className="mt-2 max-w-xs text-balance text-sm text-muted-foreground">
            Designer, creator & storyteller. Welcome to my corner of the internet.
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
        <section className="mt-12 flex w-full flex-col gap-3" aria-label="Social links">
          {links.map((link) => (
            <SocialLink key={link.label} {...link} />
          ))}
        </section>

        <footer className="mt-16 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} · Crafted with care
        </footer>
      </div>
    </main>
  );
};

export default Index;
