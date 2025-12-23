import Link from "next/link"
import Image from "next/image"
import type { Locale } from "@/lib/i18n"
import { translations } from "@/lib/translations"

interface FooterProps {
  locale: Locale
}

export function Footer({ locale }: FooterProps) {
  const t = translations[locale].footer
  const nav = translations[locale].nav

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href={`/${locale}`} className="flex items-center gap-2">
              <Image src="/axpense-logo.png" alt="Axpense" width={32} height={32} className="h-8 w-auto" />
              <span className="text-lg font-bold text-primary">Axpense</span>
            </Link>
            <p className="text-sm text-muted-foreground">{t.description}</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">{t.solutions}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href={`/${locale}/solutions/fleet`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {nav.fleet}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/solutions/asset`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {nav.asset}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/solutions/equipment`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {nav.equipment}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">{t.company}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">{t.legal}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href={`/${locale}/privacy`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.privacy}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Axpense. {t.rights}
        </div>
      </div>
    </footer>
  )
}
