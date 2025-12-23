import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Calendar, MapPin, Shield } from "lucide-react"
import type { Locale } from "@/lib/i18n"
import { translations } from "@/lib/translations"

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const t = translations[locale]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
              {t.hero.title}
            </h1>
            <p className="mb-8 text-lg text-muted-foreground text-pretty md:text-xl">{t.hero.subtitle}</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link href={`/${locale}/contact`}>
                  {t.hero.cta}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={`/${locale}/solutions/fleet`}>{t.hero.secondaryCta}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">{t.features.title}</h2>
            <p className="text-lg text-muted-foreground">{t.features.subtitle}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card border">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <MapPin className="size-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{t.features.realtime.title}</h3>
              <p className="text-sm text-muted-foreground">{t.features.realtime.description}</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card border">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <Calendar className="size-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{t.features.maintenance.title}</h3>
              <p className="text-sm text-muted-foreground">{t.features.maintenance.description}</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card border">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <BarChart3 className="size-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{t.features.analytics.title}</h3>
              <p className="text-sm text-muted-foreground">{t.features.analytics.description}</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card border">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <Shield className="size-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{t.features.compliance.title}</h3>
              <p className="text-sm text-muted-foreground">{t.features.compliance.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-muted/30 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">{t.solutions.title}</h2>
            <p className="text-lg text-muted-foreground">{t.solutions.subtitle}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Link href={`/${locale}/solutions/fleet`} className="group">
              <div className="h-full p-8 rounded-lg bg-card border transition-all hover:shadow-lg">
                <h3 className="mb-3 text-2xl font-bold">{t.solutions.fleet.title}</h3>
                <p className="mb-4 text-muted-foreground">{t.solutions.fleet.description}</p>
                <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  {t.solutions.fleet.link}
                  <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>

            <Link href={`/${locale}/solutions/asset`} className="group">
              <div className="h-full p-8 rounded-lg bg-card border transition-all hover:shadow-lg">
                <h3 className="mb-3 text-2xl font-bold">{t.solutions.asset.title}</h3>
                <p className="mb-4 text-muted-foreground">{t.solutions.asset.description}</p>
                <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  {t.solutions.asset.link}
                  <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>

            <Link href={`/${locale}/solutions/equipment`} className="group">
              <div className="h-full p-8 rounded-lg bg-card border transition-all hover:shadow-lg">
                <h3 className="mb-3 text-2xl font-bold">{t.solutions.equipment.title}</h3>
                <p className="mb-4 text-muted-foreground">{t.solutions.equipment.description}</p>
                <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  {t.solutions.equipment.link}
                  <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center rounded-2xl bg-primary/5 p-12 border border-primary/10">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">{t.cta.title}</h2>
            <p className="mb-8 text-lg text-muted-foreground">{t.cta.subtitle}</p>
            <Button asChild size="lg" className="gap-2">
              <Link href={`/${locale}/contact`}>
                {t.cta.button}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
