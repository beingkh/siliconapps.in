"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Lightbulb, Code, Rocket } from "lucide-react"
import { useState, useEffect } from "react"

interface Product {
  id: string
  name: string
  description: string
  link: string
  featured: boolean
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const savedProducts = localStorage.getItem("products")
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts))
    } else {
      const defaultProducts: Product[] = [
        {
          id: "1",
          name: "finpro",
          description:
            "Chits and finance app - Complete financial management solution for chit funds and personal finance tracking.",
          link: "#",
          featured: true,
        },
        {
          id: "2",
          name: "hchat",
          description:
            "Hookup chat application - Modern dating and social connection platform with advanced matching algorithms.",
          link: "#",
          featured: true,
        },
        {
          id: "3",
          name: "svids",
          description:
            "18+ video platform where users can upload videos and people around the world can watch and earn rewards.",
          link: "#",
          featured: false,
        },
      ]
      setProducts(defaultProducts)
      localStorage.setItem("products", JSON.stringify(defaultProducts))
    }
  }, [])

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 text-balance">Our SaaS Products</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto text-pretty leading-relaxed font-light mb-8">
              We develop innovative SaaS products (+18 websites) and collaborate with visionaries to bring ideas to
              life.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-16 border border-blue-100">
              <div className="flex items-center justify-center mb-6">
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Have a Product Idea?</h2>
              <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                Collaborate with us to <strong>plan, architect, vibe code, and deploy</strong> your next big SaaS
                product. We specialize in turning innovative ideas into scalable, market-ready applications.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Let's Build Together
              </Button>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Products Under Development</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of our current projects in development. Each product is built with cutting-edge technology
              and user-centric design.
            </p>
          </div>

          {products.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl font-bold text-gray-900 leading-tight">{product.name}</CardTitle>
                      {product.featured && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-gray-600 leading-relaxed">{product.description}</CardDescription>
                    <Button className="w-full" onClick={() => window.open(product.link, "_blank")}>
                      View Product
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No products available at the moment.</p>
              <p className="text-gray-500 text-sm mt-2">Check back soon for exciting new products!</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}
