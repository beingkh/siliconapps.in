import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">
              About <span className="text-blue-600">Silicon Apps</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
              We are a team of passionate developers and innovators dedicated to transforming ideas into
              enterprise-grade SaaS applications.
            </p>
          </div>

          {/* Company Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded with a vision to revolutionize the SaaS development landscape, Silicon Apps combines
                  cutting-edge technology with innovative development methodologies to deliver exceptional digital
                  solutions.
                </p>
                <p>
                  Our team specializes in vibe coding - a modern approach to software development that emphasizes
                  intuitive design, seamless user experiences, and robust backend architectures.
                </p>
                <p>
                  Based in India, we serve clients globally, helping businesses transform their ideas into scalable,
                  enterprise-ready applications.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  To empower businesses with innovative SaaS solutions that drive growth, enhance productivity, and
                  create lasting value for their customers.
                </p>
                <p>
                  We believe in the power of technology to transform industries and are committed to delivering
                  solutions that not only meet current needs but anticipate future challenges.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  We constantly push the boundaries of what's possible, embracing new technologies and methodologies to
                  deliver cutting-edge solutions.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every line of code, every design decision, and every user interaction is crafted with meticulous
                  attention to detail and quality.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Partnership</h3>
                <p className="text-gray-600 leading-relaxed">
                  We work closely with our clients as true partners, understanding their vision and collaborating to
                  achieve exceptional results.
                </p>
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed mb-12">
              With years of experience in enterprise software development, our team brings together expertise in modern
              frameworks, cloud technologies, and agile methodologies.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
