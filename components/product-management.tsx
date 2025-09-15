"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Trash2, Edit, Plus, Save, X } from "lucide-react"

interface Product {
  id: string
  name: string
  description: string
  link: string
  featured: boolean
}

export function ProductManagement() {
  const [products, setProducts] = useState<Product[]>([
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
  ])
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [isAddingNew, setIsAddingNew] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    link: "",
    featured: false,
  })

  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = () => {
    const savedProducts = localStorage.getItem("products")
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts))
    } else {
      const initialProducts = [
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
      localStorage.setItem("products", JSON.stringify(initialProducts))
      setProducts(initialProducts)
    }
  }

  const saveProducts = (updatedProducts: Product[]) => {
    localStorage.setItem("products", JSON.stringify(updatedProducts))
    setProducts(updatedProducts)
  }

  const handleAddProduct = () => {
    if (!formData.name.trim() || !formData.description.trim()) return

    const newProduct: Product = {
      id: Date.now().toString(),
      name: formData.name.trim(),
      description: formData.description.trim(),
      link: formData.link.trim() || "#",
      featured: formData.featured,
    }

    const updatedProducts = [...products, newProduct]
    saveProducts(updatedProducts)
    resetForm()
    setIsAddingNew(false)
  }

  const handleUpdateProduct = () => {
    if (!editingProduct || !formData.name.trim() || !formData.description.trim()) return

    const updatedProducts = products.map((product) =>
      product.id === editingProduct.id
        ? {
            ...product,
            name: formData.name.trim(),
            description: formData.description.trim(),
            link: formData.link.trim() || "#",
            featured: formData.featured,
          }
        : product,
    )

    saveProducts(updatedProducts)
    resetForm()
    setEditingProduct(null)
  }

  const handleDeleteProduct = (id: string) => {
    const updatedProducts = products.filter((product) => product.id !== id)
    saveProducts(updatedProducts)
  }

  const startEditing = (product: Product) => {
    setEditingProduct(product)
    setFormData({
      name: product.name,
      description: product.description,
      link: product.link,
      featured: product.featured,
    })
    setIsAddingNew(false)
  }

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      link: "",
      featured: false,
    })
  }

  const cancelEditing = () => {
    setEditingProduct(null)
    setIsAddingNew(false)
    resetForm()
  }

  return (
    <div className="space-y-6">
      {/* Add New Product Button */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Product Management</h3>
          <p className="text-sm text-gray-600">Add, edit, and manage your products</p>
        </div>
        <Button
          onClick={() => {
            setIsAddingNew(true)
            setEditingProduct(null)
            resetForm()
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </div>

      {/* Add/Edit Form */}
      {(isAddingNew || editingProduct) && (
        <Card className="border-blue-200">
          <CardHeader>
            <CardTitle className="text-lg">{isAddingNew ? "Add New Product" : "Edit Product"}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="name">Product Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter product name"
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Enter product description"
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor="link">Product Link</Label>
              <Input
                id="link"
                value={formData.link}
                onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                placeholder="Enter product link (optional)"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="featured"
                checked={formData.featured}
                onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
              />
              <Label htmlFor="featured">Featured Product</Label>
            </div>
            <div className="flex space-x-2">
              <Button
                onClick={isAddingNew ? handleAddProduct : handleUpdateProduct}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <Save className="w-4 h-4 mr-2" />
                {isAddingNew ? "Add Product" : "Update Product"}
              </Button>
              <Button variant="outline" onClick={cancelEditing}>
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Products List */}
      <div className="grid gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <Card key={product.id} className="border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold text-gray-900">{product.name}</h4>
                      {product.featured && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                    <p className="text-gray-500 text-xs">Link: {product.link}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={() => startEditing(product)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteProduct(product.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-gray-600">No products added yet.</p>
              <p className="text-gray-500 text-sm mt-1">Click "Add Product" to get started.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
