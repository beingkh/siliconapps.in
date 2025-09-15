import { MessageSquare, Code, Rocket, Headphones } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      step: 1,
      title: "Discovery & Planning",
      duration: "1-2 days",
      description:
        "We start by understanding your vision, requirements, and business goals through detailed consultation.",
      icon: MessageSquare,
    },
    {
      step: 2,
      title: "Vibe Coding Development",
      duration: "1-4 weeks",
      description:
        "Our team uses agentic tools to rapidly develop your application with real-time collaboration and feedback.",
      icon: Code,
    },
    {
      step: 3,
      title: "Testing & Deployment",
      duration: "2-3 days",
      description: "Comprehensive testing followed by deployment to your chosen cloud platform (AWS, Azure, or GCP).",
      icon: Rocket,
    },
    {
      step: 4,
      title: "Launch & Support",
      duration: "Ongoing",
      description: "Go live with confidence knowing we provide ongoing support and monitoring for your application.",
      icon: Headphones,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
            From Idea to Enterprise in weeks
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Our streamlined vibe coding process ensures rapid delivery without compromising on quality or scalability.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
                  Step {step.step}
                </div>
                <p className="text-xs text-muted-foreground mb-2">{step.duration}</p>
                <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
