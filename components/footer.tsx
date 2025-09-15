import Link from "next/link"

export function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "SaaS Development", href: "/services#saas" },
        { name: "Vibe Coding", href: "/services#vibe-coding" },
        { name: "DevOps Solutions", href: "/services#devops" },
        { name: "Consulting", href: "/services#consulting" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Products", href: "/products" },
        { name: "Contact", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Admin Portal", href: "/admin" },
      ],
    },
    {
      title: "Contact Info",
      links: [
        { name: "business@siliconapps.in", href: "mailto:business@siliconapps.in" },
        { name: "+91 7989951676", href: "tel:+917989951676" },
        { name: "India", href: "#" },
      ],
    },
  ]

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Si</span>
              </div>
              <span className="font-semibold text-xl text-gray-900">Silicon Apps</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Transforming ideas into enterprise SaaS products using vibe coding and cutting-edge development tools.
            </p>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-900 mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">© 2025, siliconapps.in all rights reserved.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
