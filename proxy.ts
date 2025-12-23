import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { locales, defaultLocale } from "@/lib/i18n"

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (pathnameHasLocale) return

  // Redirect to default locale if no locale in pathname
  const locale = defaultLocale
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.svg).*)"],
}
