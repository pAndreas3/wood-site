import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Hammer, Home, TreePine, Armchair } from "lucide-react"

const featuredProjects = [
  {
    title: "Modern Pergola",
    category: "Pergolas",
    image: "/modern-wooden-pergola-with-clean-lines.jpg",
  },
  {
    title: "Traditional Wooden House",
    category: "Wooden Houses",
    image: "/traditional-wooden-house-construction.jpg",
  },
  {
    title: "Luxury Deck",
    category: "Decking",
    image: "/luxury-wooden-deck-with-outdoor-furniture.jpg",
  },
  {
    title: "Custom Furniture Set",
    category: "Furniture",
    image: "/custom-wooden-furniture-dining-set.jpg",
  },
]

const services = [
  {
    icon: TreePine,
    title: "Pergolas",
    description: "Custom-designed pergolas that blend beauty with functionality",
  },
  {
    icon: Home,
    title: "Wooden Houses",
    description: "Complete wooden house construction with traditional craftsmanship",
  },
  {
    icon: Hammer,
    title: "Roof Structures",
    description: "Durable and aesthetically pleasing wooden roof constructions",
  },
  {
    icon: Armchair,
    title: "Custom Furniture",
    description: "Bespoke furniture pieces crafted to your specifications",
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/beautiful-wooden-pergola-construction-with-natural.jpg" alt="Wood construction" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
            Crafting timeless woodwork since 1995
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
            A.D. Demosthenous – Experts in custom wood constructions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/projects">
                View Our Work
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              From concept to completion, we deliver exceptional wooden constructions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Explore our portfolio of exceptional wooden constructions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {featuredProjects.map((project) => (
              <Card
                key={project.title}
                className="overflow-hidden group cursor-pointer border-border hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-primary font-medium mb-1">{project.category}</p>
                  <h3 className="text-xl font-bold text-card-foreground">{project.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground text-balance">
                Craftsmanship meets innovation
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With over 25 years of experience, A.D. Demosthenous has been at the forefront of wooden construction in
                Cyprus. Our commitment to quality craftsmanship and attention to detail ensures that every project we
                undertake becomes a lasting testament to the beauty and durability of wood.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We combine traditional woodworking techniques with modern design principles to create structures that
                are both timeless and contemporary. From the initial consultation to the final installation, we work
                closely with our clients to bring their vision to life.
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image src="/carpenter-working-on-wooden-construction-in-worksh.jpg" alt="Craftsmanship" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to start your project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty opacity-90">
            Get in touch with us today for a free consultation
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90"
          >
            <Link href="/about#contact">
              Contact Us
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
