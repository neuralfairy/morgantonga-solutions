import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, MessageSquare, Users, DollarSign, Handshake } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const contactOptions = [
    {
      icon: DollarSign,
      title: "Sales Inquiry",
      description: "Learn about our plans and get a custom quote for your team.",
      action: "Contact Sales",
      href: "/contact#sales",
    },
    {
      icon: MessageSquare,
      title: "Support Request",
      description: "Get help with your account, integrations, or technical issues.",
      action: "Get Support",
      href: "/contact#support",
    },
    {
      icon: Handshake,
      title: "Partnerships",
      description: "Explore partnership opportunities and integrations.",
      action: "Partner With Us",
      href: "/contact#partnerships",
    },
    {
      icon: Users,
      title: "Request a Quote",
      description: "Get enterprise pricing for large-scale validation needs.",
      action: "Get Quote",
      href: "/contact#quote",
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
              <Badge className="mb-6 bg-teal-100 text-teal-800 hover:bg-teal-200">📞 Get in Touch</Badge>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Let's Talk About Your{" "}
                <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                  Data Needs
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our team is here to help you improve your contact data quality and boost your outbound success rates.
                Reach out today!
              </p>
            </div>

            {/* Contact Options */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactOptions.map((option, index) => (
                <Card
                  key={index}
                  className="border-teal-100 hover:shadow-lg transition-shadow duration-300 text-center"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <option.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg text-gray-900">{option.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">{option.description}</CardDescription>
                    <Button asChild className="bg-teal-600 hover:bg-teal-700 text-black w-full">
                      <Link href={option.href}>{option.action}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-teal-100">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Send Us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@company.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your Company" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiry">Inquiry Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sales">Sales Inquiry</SelectItem>
                        <SelectItem value="support">Support Request</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="quote">Request Quote</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us about your contact validation needs..." rows={4} />
                  </div>

                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-black">Send Message</Button>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Office Address</h3>
                        <p className="text-gray-600">
                          123 Technology Drive
                          <br />
                          Naperville, IL 60563
                          <br />
                          United States
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Phone</h3>
                        <p className="text-gray-600">1-800-VALIDATE</p>
                        <p className="text-gray-600">(1-800-825-4328)</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Email</h3>
                        <p className="text-gray-600">contact@morgantonga.com</p>
                        <p className="text-gray-600">support@morgantonga.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Business Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 8:00 AM - 6:00 PM CST
                          <br />
                          Saturday: 9:00 AM - 2:00 PM CST
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live Chat */}
                <Card className="border-teal-100 bg-gradient-to-br from-teal-50 to-white">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                        <MessageSquare className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Live Chat</h3>
                        <p className="text-sm text-gray-600">Available now</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Need immediate help? Chat with our support team for instant assistance.
                    </p>
                    <Button className="w-full bg-teal-600 hover:bg-teal-700 text-black">Start Live Chat</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-teal-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Quick answers to common questions about our Contact Validator service.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <Card className="border-teal-100">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">How accurate is your contact validation?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our Contact Validator achieves 99.5% accuracy through advanced algorithms, real-time checks, and
                    comprehensive database validation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-teal-100">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">Do you offer API integration?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes! Our RESTful API allows real-time validation and seamless integration with your existing systems
                    and workflows.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-teal-100">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">What CRM platforms do you integrate with?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We integrate with 50+ platforms including Salesforce, HubSpot, Pipedrive, Marketo, and many more.
                    Custom integrations are also available.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-teal-100">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">Is my data secure?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Absolutely. We're SOC 2 certified, GDPR compliant, and use enterprise-grade encryption to protect
                    your data at all times.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
