import { ArrowUpRight } from "lucide-react";
import type { ComponentType } from "react";

interface SocialLinkProps {
  icon: ComponentType<{ className?: string }>;
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
      className="group flex items-center gap-5 border-b border-border py-5 transition-colors duration-300 hover:border-warm-gold"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-border text-card-foreground transition-colors duration-300 group-hover:border-warm-gold group-hover:text-warm-gold">
        <Icon className="h-4 w-4" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-display text-lg leading-tight text-card-foreground">
          {label}
        </div>
        <div className="nav-link mt-1 normal-case truncate" style={{ textTransform: "none", letterSpacing: "0.12em" }}>
          {handle}
        </div>
      </div>
      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-warm-gold" />
    </a>
  );
};

export default SocialLink;
