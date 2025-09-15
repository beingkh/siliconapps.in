export function TechnologySection() {
  const technologies = [
    {
      category: "Vercel",
      description: "Deployment Platform",
    },
    {
      category: "Cloud Infrastructure",
      description: "AWS, Azure, GCP",
    },
    {
      category: "Database Solutions",
      description: "SQL & NoSQL",
    },
    {
      category: "Development Tools",
      description: "Modern Stack",
    },
    {
      category: "DevOps Pipeline",
      description: "CI/CD & Automation",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-12">
          <p className="text-sm font-medium text-blue-600 mb-4">Technology Stack</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
            Proven Development Platforms
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            We work with industry-leading platforms and cloud providers to deliver robust, scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">{tech.category}</h3>
              <p className="text-sm text-muted-foreground">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
