"use client";

import { Cart } from "@/components/navbar/cart";
import { NavMenu } from "@/components/navbar/menu";
import { NAVIGATION_LINKS } from "@/components/navbar/navigation-links";
import { ThemeSwitcher } from "@/components/navbar/theme-switcher";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">S</span>
          </div>
          <span className="text-xl font-semibold">Store</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {NAVIGATION_LINKS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeSwitcher />

          <Cart />

          <NavMenu />
        </div>
      </nav>
    </header>
  );
}
