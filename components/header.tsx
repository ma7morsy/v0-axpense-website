"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Menu, X } from "lucide-react"
import type { Locale } from "@/lib/i18n"
import { translations } from "@/lib/translations"

interface HeaderProps {
  locale: Locale
}

export function Header({ locale }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = translations[locale].nav

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <Image src="/axpense-logo.png" alt="Axpense" width={40} height={40} className="h-10 w-auto" />
          <span className="text-xl font-bold text-primary">Axpense</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href={`/${locale}`}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            {t.home}
          </Link>
          <Link
            href={`/${locale}/solutions/fleet`}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            {t.fleet}
          </Link>
          <Link
            href={`/${locale}/solutions/asset`}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            {t.asset}
          </Link>
          <Link
            href={`/${locale}/solutions/equipment`}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            {t.equipment}
          </Link>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageSwitcher currentLocale={locale} />
          <Button asChild>
            <Link href={`/${locale}/contact`}>{t.getStarted}</Link>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t bg-background md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <Link href={`/${locale}`} className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              {t.home}
            </Link>
            <Link
              href={`/${locale}/solutions/fleet`}
              className="text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.fleet}
            </Link>
            <Link
              href={`/${locale}/solutions/asset`}
              className="text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.asset}
            </Link>
            <Link
              href={`/${locale}/solutions/equipment`}
              className="text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.equipment}
            </Link>
            <div className="flex items-center gap-2 pt-2">
              <LanguageSwitcher currentLocale={locale} />
              <Button asChild className="w-full">
                <Link href={`/${locale}/contact`} onClick={() => setMobileMenuOpen(false)}>
                  {t.getStarted}
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
