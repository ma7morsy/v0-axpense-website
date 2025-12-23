"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import type { Locale } from "@/lib/i18n"
import { translations } from "@/lib/translations"

interface LeadFormProps {
  locale: Locale
}

export function LeadForm({ locale }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")
  const t = translations[locale].form

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setMessage(t.success)
    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()

    setTimeout(() => setMessage(""), 5000)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input name="name" placeholder={t.name} required disabled={isSubmitting} />
        </div>
        <div>
          <Input name="email" type="email" placeholder={t.email} required disabled={isSubmitting} />
        </div>
        <div>
          <Input name="phone" type="tel" placeholder={t.phone} required disabled={isSubmitting} />
        </div>
        <div>
          <Input name="company" placeholder={t.company} required disabled={isSubmitting} />
        </div>
        <div>
          <Textarea name="message" placeholder={t.message} rows={4} disabled={isSubmitting} />
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "..." : t.submit}
        </Button>
        {message && <p className="text-sm text-center text-primary">{message}</p>}
      </form>
    </div>
  )
}
