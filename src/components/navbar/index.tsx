"use client";

import { Cart } from "@/components/navbar/cart";
import { NavMenu } from "@/components/navbar/menu";
import { NAVIGATION_LINKS } from "@/components/navbar/navigation-links";
import { ThemeSwitcher } from "@/components/navbar/theme-switcher";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-border/40 bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-lg">
            <span className="text-primary-foreground text-lg font-bold">S</span>
          </div>
          <span className="text-xl font-semibold">Store</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {NAVIGATION_LINKS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-foreground text-sm font-medium transition-colors"
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
