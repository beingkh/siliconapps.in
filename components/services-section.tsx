import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  const services = [
    {
      title: "SaaS Development",
      description:
        "End-to-end SaaS solutions built with modern frameworks, scalable architecture, and enterprise-grade security.",
      features: ["Multi-tenant Architecture", "API Development", "Database Design", "User Management"],
    },
    {
      title: "Vibe Coding",
      description:
        "Rapid development using intuitive coding methodologies that align with your business vision and goals.",
      features: ["Rapid Prototyping", "Agile Development", "User-Centric Design", "Iterative Delivery"],
    },
    {
      title: "DevOps Solutions",
      description:
        "Streamlined deployment pipelines, infrastructure automation, and continuous integration for reliable delivery.",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Alerting", "Automated Testing"],
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="text-sm text-muted-foreground bg-muted/50 px-3 py-2 rounded-md">
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/project">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
