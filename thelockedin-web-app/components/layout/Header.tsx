import Link from "next/link";
import { Code2 } from "lucide-react";

import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Companies", href: "#companies" },
  { name: "How It Works", href: "#how-it-works" },
];

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-zinc-950/50 backdrop-blur-xl">
      <div className="container flex h-16 items-center">
        <div className="mr-8">
          <Link className="flex items-center space-x-2" href="/">
            <Code2 className="h-6 w-6 text-purple-400" />
            <span className="font-semibold tracking-tight">LockedIn</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center space-x-8 text-sm font-medium">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-zinc-400 transition-colors hover:text-purple-400"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/login">
            <Button
              variant="ghost"
              className="text-zinc-400 hover:text-purple-400"
            >
              Log in
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-purple-500 text-white hover:bg-purple-600">
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
