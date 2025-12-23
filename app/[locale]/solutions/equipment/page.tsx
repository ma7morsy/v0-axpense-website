import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Wrench, Clock, BarChart2, AlertCircle } from "lucide-react"
import type { Locale } from "@/lib/i18n"
import { translations } from "@/lib/translations"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Equipment Management Solution - Axpense",
  description:
    "Optimize equipment utilization with usage tracking, automated maintenance scheduling, and real-time availability monitoring.",
}

export default async function EquipmentPage({
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
              {t.solutions.equipment.title}
            </h1>
            <p className="mb-8 text-lg text-muted-foreground text-pretty">{t.solutions.equipment.description}</p>
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
                  <Wrench className="size-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Usage Tracking</h3>
                <p className="text-muted-foreground">
                  Monitor equipment usage hours, cycles, and operating conditions to optimize maintenance schedules.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="rounded-full bg-primary/10 p-3">
                  <Clock className="size-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Maintenance Scheduling</h3>
                <p className="text-muted-foreground">
                  Automated maintenance reminders based on usage, time intervals, and manufacturer recommendations.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="rounded-full bg-primary/10 p-3">
                  <BarChart2 className="size-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Utilization Analytics</h3>
                <p className="text-muted-foreground">
                  Identify underutilized equipment and opportunities to improve resource allocation and ROI.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="rounded-full bg-primary/10 p-3">
                  <AlertCircle className="size-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Downtime Prevention</h3>
                <p className="text-muted-foreground">
                  Predictive maintenance alerts and real-time monitoring to minimize unexpected equipment failures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
