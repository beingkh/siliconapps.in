import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 text-balance">Privacy Policy</h1>
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your privacy is important to us. This privacy policy explains how Silicon Apps collects, uses, and
              protects your information when you use our services.
            </p>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              We collect information you provide directly to us, such as when you create an account, contact us, or use
              our services.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
