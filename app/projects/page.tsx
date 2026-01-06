"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const categories = ["All", "Pergolas", "Wooden Houses", "Roof Structures", "Decking", "Furniture"]

const projects = [
  {
    id: 1,
    title: "Modern Pergola",
    category: "Pergolas",
    description:
      "A contemporary pergola design featuring clean lines and sustainable materials, perfect for outdoor entertaining.",
    image: "/wooden-pergola.png",
  },
  {
    id: 2,
    title: "Traditional Wooden House",
    category: "Wooden Houses",
    description:
      "Complete wooden house construction combining traditional craftsmanship with modern comfort and energy efficiency.",
    image: "/traditional-wooden-house-exterior-with-natural-woo.jpg",
  },
  {
    id: 3,
    title: "Luxury Deck",
    category: "Decking",
    description:
      "Premium hardwood decking installation with integrated lighting and custom railings for a luxury outdoor space.",
    image: "/luxury-wooden-deck-with-outdoor-furniture-and-ligh.jpg",
  },
  {
    id: 4,
    title: "Custom Dining Set",
    category: "Furniture",
    description: "Handcrafted dining table and chairs made from solid oak, designed to last generations.",
    image: "/custom-wooden-dining-table-and-chairs-set.jpg",
  },
  {
    id: 5,
    title: "Garden Pergola",
    category: "Pergolas",
    description: "Classic garden pergola with climbing plant supports and integrated seating area.",
    image: "/garden-pergola-with-climbing-plants-and-seating.jpg",
  },
  {
    id: 6,
    title: "Timber Roof Structure",
    category: "Roof Structures",
    description: "Exposed timber roof construction showcasing the natural beauty of wood in architectural design.",
    image: "/exposed-timber-roof-structure-interior-view.jpg",
  },
  {
    id: 7,
    title: "Pool Deck",
    category: "Decking",
    description: "Weather-resistant decking around swimming pool with non-slip surface treatment.",
    image: "/wooden-pool-deck-with-lounge-chairs.jpg",
  },
  {
    id: 8,
    title: "Custom Bookshelf",
    category: "Furniture",
    description: "Floor-to-ceiling custom bookshelf with integrated ladder and hidden storage compartments.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 9,
    title: "Kitchen melamine",
    category: "Furniture",
    description: "Beautiful kitchen melamine with wooden handles and wooden legs.",
    image: "/kitchen-melamine.png",
  },
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our portfolio of exceptional wooden constructions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-primary text-primary-foreground" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden group cursor-pointer border-border hover:shadow-xl transition-shadow"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-medium mb-1">{project.category}</p>
                <h3 className="text-xl font-bold text-card-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
            </DialogHeader>
            {selectedProject && (
              <div className="space-y-4">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm text-primary font-medium mb-2">{selectedProject.category}</p>
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.description}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
