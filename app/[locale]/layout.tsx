import type React from "react"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { locales, type Locale, getDirection } from "@/lib/i18n"

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale: localeParam } = await params
  const locale = localeParam as Locale

  if (!locales.includes(locale)) {
    notFound()
  }

  const dir = getDirection(locale)

  return (
    <div dir={dir} lang={locale}>
      <Header locale={locale} />
      <main className="min-h-screen">{children}</main>
      <Footer locale={locale} />
    </div>
  )
}
