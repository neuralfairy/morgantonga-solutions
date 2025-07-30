import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP of Sales",
      company: "TechFlow Solutions",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Morgantonga's Contact Validator increased our email deliverability by 40% and reduced our bounce rate to under 2%. Game-changer for our outbound campaigns.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Marketing Director",
      company: "GrowthLabs",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "The real-time validation API integrated seamlessly with our CRM. We're now confident every contact in our database is accurate and reachable.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "Sales Operations Manager",
      company: "ScaleUp Inc",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "The bulk validation feature saved us weeks of manual work. Processed 50K contacts in minutes with incredible accuracy. Highly recommended!",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Trusted by Sales Leaders</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how teams are improving their outbound success with validated contact data.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-teal-100 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
