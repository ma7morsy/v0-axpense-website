import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Truck, Gauge, Route, Fuel } from "lucide-react"
import type { Locale } from "@/lib/i18n"
import { translations } from "@/lib/translations"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fleet Management Solution - Axpense",
  description:
    "Comprehensive fleet management solution with real-time GPS tracking, driver behavior monitoring, route optimization, and fuel cost reduction.",
}

export default async function FleetPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const t = translations[locale]

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-b from-primary/5 to-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl">
              {t.solutions.fleet.title}
            </h1>
            <p className="mb-8 text-lg text-muted-foreground text-pretty">{t.solutions.fleet.description}</p>
            <Button asChild size="lg" className="gap-2">
              <Link href={`/${locale}/contact`}>
                {t.hero.cta}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="rounded-full bg-primary/10 p-3">
                  <Truck className="size-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Vehicle Tracking</h3>
                <p className="text-muted-foreground">
                  Real-time GPS tracking for all vehicles in your fleet with live location updates and historical route
                  data.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="rounded-full bg-primary/10 p-3">
                  <Gauge className="size-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Driver Behavior</h3>
                <p className="text-muted-foreground">
                  Monitor driving patterns, speed, harsh braking, and acceleration to improve safety and reduce costs.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="rounded-full bg-primary/10 p-3">
                  <Route className="size-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Route Optimization</h3>
                <p className="text-muted-foreground">
                  AI-powered route planning to reduce travel time, fuel consumption, and improve delivery efficiency.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="rounded-full bg-primary/10 p-3">
                  <Fuel className="size-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Fuel Management</h3>
                <p className="text-muted-foreground">
                  Track fuel consumption, costs, and identify opportunities to reduce expenses across your fleet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
