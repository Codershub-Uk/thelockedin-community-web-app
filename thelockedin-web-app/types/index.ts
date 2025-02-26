import type React from "react"
export interface Company {
  name: string
  logo: string
}

export interface Feature {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

export interface Step {
  title: string
  description: string
  step: string
}

