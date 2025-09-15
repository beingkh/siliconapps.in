import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Zap, Settings, Users } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      id: "saas",
      icon: Code,
      title: "SaaS Development",
      description:
        "End-to-end SaaS solutions built with modern frameworks, scalable architecture, and enterprise-grade security.",
      features: [
        "Multi-tenant Architecture",
        "API Development",
        "Database Design",
        "User Management",
        "Enterprise-grade Security",
        "Scalable Infrastructure",
      ],
      technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "AWS", "Docker"],
    },
    {
      id: "vibe-coding",
      icon: Zap,
      title: "Vibe Coding",
      description:
        "Rapid development using intuitive coding methodologies that align with your business vision and goals.",
      features: [
        "Rapid Prototyping",
        "Agile Development",
        "User-Centric Design",
        "Iterative Delivery",
        "Real-time Collaboration",
        "Business Alignment",
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Figma", "Git", "CI/CD"],
    },
    {
      id: "devops",
      icon: Settings,
      title: "DevOps Solutions",
      description:
        "Streamlined deployment pipelines, infrastructure automation, and continuous integration for reliable delivery.",
      features: [
        "CI/CD Pipelines",
        "Infrastructure as Code",
        "Monitoring & Alerting",
        "Automated Testing",
        "Container Orchestration",
        "Cloud Migration",
      ],
      technologies: ["Docker", "Kubernetes", "AWS", "Terraform", "Jenkins", "Prometheus"],
    },
    {
      id: "consulting",
      icon: Users,
      title: "Consulting",
      description:
        "Strategic technology consulting to help you make informed decisions about your SaaS architecture and development approach.",
      features: [
        "Technology Assessment",
        "Architecture Planning",
        "Performance Optimization",
        "Security Audits",
        "Team Training",
        "Best Practices",
      ],
      technologies: ["Architecture Review", "Code Audit", "Performance Analysis", "Security Assessment"],
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 text-balance">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed font-light">
              Comprehensive SaaS development solutions tailored to your business needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={service.id}
                  id={service.id}
                  className="border-gray-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader className="pb-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-900">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
