import { LeadForm } from "@/components/lead-form"
import type { Locale } from "@/lib/i18n"
import { translations } from "@/lib/translations"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Axpense",
  description:
    "Get in touch with our team to learn how Axpense can transform your fleet, asset, and equipment management.",
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const t = translations[locale]

  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">{t.form.title}</h1>
            <p className="text-lg text-muted-foreground">{t.cta.subtitle}</p>
          </div>
          <LeadForm locale={locale} />
        </div>
      </section>
    </div>
  )
}
