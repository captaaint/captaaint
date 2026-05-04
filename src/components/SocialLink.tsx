import { ArrowUpRight } from "lucide-react";
import type { ComponentType } from "react";

interface SocialLinkProps {
  icon: ComponentType<{ className?: string }>;
  label: string;
  handle: string;
  href: string;
  featured?: boolean;
}

const SocialLink = ({ icon: Icon, label, handle, href, featured }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center gap-4 border-b border-border/70 py-4 transition-colors duration-300 hover:border-foreground/60 ${
        featured ? "" : ""
      }`}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/80 text-foreground/70 transition-colors duration-300 group-hover:border-foreground group-hover:text-foreground">
        <Icon className="h-4 w-4" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-display text-lg leading-tight text-foreground">
          {label}
        </div>
        <div className="truncate text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {handle}
        </div>
      </div>
      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
    </a>
  );
};

export default SocialLink;
