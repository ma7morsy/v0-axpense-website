import { LeadForm } from "@/components/lead-form"
import { Button } from "@/components/ui/button"
import { Check, Truck, MapPin, BarChart3 } from "lucide-react"
import type { Locale } from "@/lib/i18n"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fleet Management Software - Track & Optimize Your Fleet | Axpense",
  description:
    "Reduce fleet costs by 30% with Axpense. Real-time GPS tracking, driver monitoring, route optimization, and fuel management. Start your free demo today.",
}

export default async function GoogleAdsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                Fleet Management Solution
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl">
                Reduce Fleet Costs by 30% with Smart Management
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">
                Take control of your fleet with real-time GPS tracking, driver behavior monitoring, and intelligent
                route optimization.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="size-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Real-time GPS tracking for all vehicles</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="size-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Reduce fuel costs with route optimization</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="size-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Improve driver safety and reduce insurance costs</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="size-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Automated maintenance scheduling and alerts</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <div className="flex -space-x-2">
                    <div className="size-8 rounded-full bg-primary/20 border-2 border-background" />
                    <div className="size-8 rounded-full bg-primary/30 border-2 border-background" />
                    <div className="size-8 rounded-full bg-primary/40 border-2 border-background" />
                  </div>
                  <span className="text-muted-foreground">Trusted by 500+ businesses</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-card border p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-center">Start Your Free Demo</h2>
              <LeadForm locale={locale} />
              <p className="mt-4 text-xs text-center text-muted-foreground">
                No credit card required. Setup in minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Truck className="size-8 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Complete Fleet Visibility</h3>
              <p className="text-sm text-muted-foreground">
                Track every vehicle in real-time with live location updates and historical data
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <MapPin className="size-8 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Smart Route Planning</h3>
              <p className="text-sm text-muted-foreground">
                AI-powered route optimization reduces travel time and fuel consumption
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <BarChart3 className="size-8 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Actionable Insights</h3>
              <p className="text-sm text-muted-foreground">
                Detailed analytics help you make data-driven decisions to cut costs
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Transform Your Fleet?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Join hundreds of businesses saving thousands on fleet management every month
            </p>
            <Button size="lg" asChild>
              <a href="#top">Request Your Free Demo</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
