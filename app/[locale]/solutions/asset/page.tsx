import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Package, TrendingDown, Tag, FileText } from "lucide-react"
import type { Locale } from "@/lib/i18n"
import { translations } from "@/lib/translations"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Asset Management Solution - Axpense",
  description:
    "Complete asset lifecycle management with tracking, depreciation calculations, maintenance scheduling, and compliance documentation.",
}

export default async function AssetPage({
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
              {t.solutions.asset.title}
            </h1>
            <p className="mb-8 text-lg text-muted-foreground text-pretty">{t.solutions.asset.description}</p>
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
                  <Package className="size-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Asset Tracking</h3>
                <p className="text-muted-foreground">
                  Complete visibility of all fixed and mobile assets with real-time location and status updates.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="rounded-full bg-primary/10 p-3">
                  <TrendingDown className="size-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Depreciation Management</h3>
                <p className="text-muted-foreground">
                  Automated depreciation calculations with multiple methods and comprehensive financial reporting.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="rounded-full bg-primary/10 p-3">
                  <Tag className="size-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Lifecycle Tracking</h3>
                <p className="text-muted-foreground">
                  Track assets from acquisition to disposal with complete history and maintenance records.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="rounded-full bg-primary/10 p-3">
                  <FileText className="size-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Documentation</h3>
                <p className="text-muted-foreground">
                  Centralized document management for warranties, manuals, certificates, and compliance records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
