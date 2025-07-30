import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Award, TrendingUp, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  const team = [
    {
      name: "Sarah Mitchell",
      role: "CEO & Founder",
      bio: "Former VP of Sales at TechCorp with 15+ years in B2B sales and data analytics.",
      image: "/placeholder.svg?height=200&width=200",
      linkedin: "#",
    },
    {
      name: "David Chen",
      role: "CTO",
      bio: "Ex-Google engineer specializing in large-scale data processing and machine learning.",
      image: "/placeholder.svg?height=200&width=200",
      linkedin: "#",
    },
    {
      name: "Maria Rodriguez",
      role: "VP of Product",
      bio: "Product leader with expertise in SaaS platforms and customer success.",
      image: "/placeholder.svg?height=200&width=200",
      linkedin: "#",
    },
    {
      name: "James Wilson",
      role: "Head of Sales",
      bio: "Sales veteran with deep experience in enterprise software and customer relationships.",
      image: "/placeholder.svg?height=200&width=200",
      linkedin: "#",
    },
  ]

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for 99.5% accuracy in everything we do, from data validation to customer service.",
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "Our customers' success is our success. We're committed to helping sales teams achieve their goals.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We continuously improve our technology to stay ahead of evolving data challenges.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <Badge className="mb-6 bg-teal-100 text-teal-800 hover:bg-teal-200">🏢 About Morgantonga Solutions</Badge>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Empowering Sales Teams with{" "}
                <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                  Perfect Data
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Founded in 2020 in Naperville, Illinois, Morgantonga Solutions is dedicated to solving the data quality
                challenges that plague modern sales teams. We believe that accurate contact data is the foundation of
                successful outbound campaigns.
              </p>
            </div>

            {/* Company Stats */}
            <div className="grid md:grid-cols-4 gap-8 mb-20">
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">500+</div>
                <div className="text-gray-600">Sales Teams</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">10M+</div>
                <div className="text-gray-600">Contacts Validated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">99.5%</div>
                <div className="text-gray-600">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">45%</div>
                <div className="text-gray-600">Avg. Response Increase</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  To eliminate the frustration of bad contact data and empower sales teams to focus on what they do
                  best: building relationships and closing deals.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We understand that every bounced email, every unreachable contact, and every wasted outreach effort
                  represents lost opportunity. That's why we've built the most accurate and comprehensive contact
                  validation platform in the industry.
                </p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-6 w-6 text-teal-600" />
                  <span className="font-semibold text-gray-900">Naperville, Illinois</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Proudly headquartered in the heart of the Midwest, we serve customers worldwide from our
                  state-of-the-art facility in Naperville's technology corridor.
                </p>
                <Button
                  variant="outline"
                  asChild
                  className="border-teal-200 text-teal-700 hover:bg-teal-50 bg-transparent"
                >
                  <Link href="/contact">Visit Our Office</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gradient-to-br from-teal-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do at Morgantonga Solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="border-teal-100 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Meet the experienced leaders driving innovation in contact data validation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="border-teal-100 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{member.name}</CardTitle>
                    <CardDescription className="text-teal-600 font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                    <div className="flex justify-center space-x-3">
                      <Button size="sm" variant="ghost" asChild className="text-teal-600 hover:text-teal-700 p-2">
                        <Link href={member.linkedin}>
                          <Linkedin className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button size="sm" variant="ghost" asChild className="text-teal-600 hover:text-teal-700 p-2">
                        <Link href="/contact">
                          <Mail className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Careers */}
        <section className="py-20 bg-gradient-to-br from-teal-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Join Our Team</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                We're always looking for talented individuals who share our passion for data accuracy and customer
                success.
              </p>
              <Button size="lg" asChild className="bg-teal-600 hover:bg-teal-700 text-black px-8 py-4">
                <Link href="/careers">View Open Positions</Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaborative Culture</h3>
                <p className="text-gray-600">Work with passionate teammates who value innovation and excellence.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth Opportunities</h3>
                <p className="text-gray-600">Advance your career with continuous learning and development programs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Benefits</h3>
                <p className="text-gray-600">
                  Comprehensive health coverage, equity participation, and flexible work arrangements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Experience Perfect Data Validation?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of sales teams who trust Morgantonga Solutions for accurate contact validation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-teal-600 hover:bg-teal-700 text-black px-8 py-4">
                <Link href="/trial">Start Free Trial</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-teal-200 text-teal-700 hover:bg-teal-50 px-8 py-4 bg-transparent"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
