import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Icons
import { Home, FileText, Github, Linkedin } from "lucide-react";
import { DATA } from "@/data/resume";

// Data
// const DATA = {
//   navbar: [
//     { href: "/", icon: Home, label: "Home" },
//     { href: "/about", icon: FileText, label: "About" },
//   ],
//   contact: {
//     social: {
//       GitHub: {
//         url: "https://github.com/yourhandle",
//         icon: Github,
//         navbar: true,
//       },
//       LinkedIn: {
//         url: "https://linkedin.com/in/yourprofile",
//         icon: Linkedin,
//         navbar: true,
//       },
//     },
//   },
// };

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-5 z-30 mx-auto flex h-16 w-full max-w-4xl px-4">
      <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-[10px] shadow-md">
        {DATA.navbar.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12"
                  )}
                >
                  <item.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}

        <Separator orientation="vertical" className="h-full" />

        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12"
                    )}
                  >
                    <social.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

        <Separator orientation="vertical" className="h-full py-2" />

        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
}
