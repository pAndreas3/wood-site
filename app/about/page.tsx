"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the form data to a server
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">About Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Crafting excellence in wood for over 25 years
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=600" alt="Our workshop" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded in 1995, A.D. Demosthenous has been a cornerstone of quality wooden construction in Cyprus. What
                started as a small family workshop has grown into a respected name in custom woodwork, serving clients
                across the island.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our philosophy is simple: combine traditional craftsmanship with modern techniques to create wooden
                structures that stand the test of time. Every project we undertake is treated with the same care and
                attention to detail, whether it's a small furniture piece or a complete wooden house.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We take pride in using sustainably sourced materials and working closely with our clients to ensure
                their vision becomes reality. Our team of skilled craftsmen brings decades of combined experience to
                every project.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Ready to start your project? Contact us for a free consultation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1 text-card-foreground">Email</h3>
                      <a
                        href="mailto:info@addemosthenous.com"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        info@addemosthenous.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1 text-card-foreground">Phone</h3>
                      <a
                        href="tel:+35799123456"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        +357 99 123 456
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1 text-card-foreground">Address</h3>
                      <p className="text-muted-foreground">
                        Kosti Palama 35
                        <br />
                        Mesa Geitonia, 4001
                        <br />
                        Cyprus
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1 text-card-foreground">Opening Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 8:00 AM - 6:00 PM
                        <br />
                        Saturday: 9:00 AM - 2:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google Map */}
              <div className="rounded-lg overflow-hidden h-64 border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.547234!2d33.0577!3d34.6935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e7337397b172e3%3A0x2ac0e5ec95e9066b!2sKosti%20Palama%2035%2C%20Mesa%20Geitonia%204001%2C%20Cyprus!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location map"
                />
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-card-foreground">Send us a message</h3>
                {submitted ? (
                  <div className="bg-accent/10 text-accent-foreground p-4 rounded-lg text-center">
                    <p className="font-medium">Thank you for your message!</p>
                    <p className="text-sm mt-1">We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-card-foreground">
                        Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-card-foreground">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-card-foreground">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project..."
                        rows={6}
                        className="bg-background"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
