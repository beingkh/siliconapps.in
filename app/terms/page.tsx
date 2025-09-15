import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 text-balance">Terms of Service</h1>
          <div className="prose prose-gray max-w-none space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to Silicon Apps. These terms and conditions outline the rules and regulations for the use of our
              services.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using our services, you accept and agree to be bound by the terms and provision of this
                agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Use License</h2>
              <p className="text-muted-foreground leading-relaxed">
                Permission is granted to temporarily download one copy of Silicon Apps materials for personal,
                non-commercial transitory viewing only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Service Availability</h2>
              <p className="text-muted-foreground leading-relaxed">
                We strive to provide reliable services but cannot guarantee uninterrupted availability. We reserve the
                right to modify or discontinue services at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at business@siliconapps.in
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
