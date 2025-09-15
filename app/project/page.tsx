import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProjectRequestForm } from "@/components/project-request-form"

export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <ProjectRequestForm />
      </div>
      <Footer />
    </main>
  )
}
