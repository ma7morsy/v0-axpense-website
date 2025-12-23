"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import type { Locale } from "@/lib/i18n"

interface LanguageSwitcherProps {
  currentLocale: Locale
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const [locale] = useState<Locale>(currentLocale)

  const switchLanguage = (newLocale: Locale) => {
    const currentPath = window.location.pathname
    const newPath = currentPath.replace(`/${locale}`, `/${newLocale}`)
    window.location.href = newPath
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon-sm">
          <Globe className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => switchLanguage("en")}>English</DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage("ar")}>العربية</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
