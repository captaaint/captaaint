import { ArrowUpRight } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

interface SocialLinkProps {
  icon: ComponentType<SVGProps<SVGSVGElement> & { strokeWidth?: number }>;
  label: string;
  handle: string;
  href: string;
}

const SocialLink = ({ icon: Icon, label, handle, href }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-4 backdrop-blur-md transition-[transform,border-color,background-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/60 hover:bg-card"
    >
      <span className="absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "var(--gradient-primary)", filter: "blur(20px)", transform: "scale(0.85)" }} />
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-5 w-5" strokeWidth={2} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-display text-base font-semibold text-foreground">{label}</div>
        <div className="truncate text-sm text-muted-foreground">{handle}</div>
      </div>
      <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:rotate-12 group-hover:text-primary" />
    </a>
  );
};

export default SocialLink;
