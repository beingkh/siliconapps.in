"use client"

import { useState, useEffect } from "react"

interface Stat {
  number: string
  label: string
}

export function StatsSection() {
  const [stats, setStats] = useState<Stat[]>([
    { number: "0", label: "Products Developed" },
    { number: "0", label: "Happy Clients" },
  ])

  useEffect(() => {
    const savedStats = localStorage.getItem("websiteStats")
    if (savedStats) {
      setStats(JSON.parse(savedStats))
    }
  }, [])

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Built for the future.</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            We specialize in building scalable SaaS applications using cutting-edge methodologies and robust DevOps
            practices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-sm sm:text-base text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
