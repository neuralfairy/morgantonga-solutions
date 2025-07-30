import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, X, Star } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small teams getting started",
      features: [
        "5,000 validations/month",
        "Real-time API access",
        "Basic email validation",
        "CSV upload/download",
        "Email support",
        "99.5% accuracy guarantee",
      ],
      notIncluded: ["Bulk processing", "CRM integrations", "Custom validation rules", "Priority support"],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing sales teams",
      features: [
        "25,000 validations/month",
        "Real-time API access",
        "Advanced validation suite",
        "Bulk processing",
        "CRM integrations (5+)",
        "CSV/Excel support",
        "Priority email support",
        "Custom validation rules",
        "Team collaboration tools",
      ],
      notIncluded: ["Dedicated account manager", "Custom SLA", "White-label options"],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with custom needs",
      features: [
        "Unlimited validations",
        "Real-time API access",
        "Full validation suite",
        "Bulk processing (millions)",
        "All CRM integrations",
        "Custom file formats",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom validation rules",
        "Advanced team management",
        "Custom SLA",
        "White-label options",
        "On-premise deployment",
      ],
      notIncluded: [],
      cta: "Contact Sales",
      popular: false,
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
              <Badge className="mb-6 bg-teal-100 text-teal-800 hover:bg-teal-200">💰 Transparent Pricing</Badge>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Simple, Transparent{" "}
                <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                  Pricing
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Choose the perfect plan for your team. All plans include our industry-leading 99.5% accuracy guarantee
                and 14-day free trial.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative ${plan.popular ? "border-teal-500 shadow-2xl scale-105" : "border-teal-100"}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-teal-600 text-white px-4 py-1">
                        <Star className="h-4 w-4 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                    <CardDescription className="text-gray-600 mt-2">{plan.description}</CardDescription>
                    <div className="mt-6">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                      {plan.notIncluded.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3 opacity-50">
                          <X className="h-5 w-5 text-gray-400 flex-shrink-0" />
                          <span className="text-gray-500">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      asChild
                      className={`w-full py-3 ${plan.popular ? "bg-teal-600 hover:bg-teal-700 text-black" : "bg-gray-900 hover:bg-gray-800 text-white"}`}
                    >
                      <Link href={plan.name === "Enterprise" ? "/contact" : "/trial"}>{plan.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <div className="text-center mt-16">
              <p className="text-gray-600 mb-6">All plans include 14-day free trial • No setup fees • Cancel anytime</p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-teal-600" />
                  <span>99.5% accuracy guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-teal-600" />
                  <span>GDPR compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-teal-600" />
                  <span>SOC 2 certified</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about our pricing and plans.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What happens if I exceed my monthly validation limit?
                </h3>
                <p className="text-gray-600">
                  We'll notify you when you reach 80% of your limit. You can upgrade your plan or purchase additional
                  validations at $0.005 per validation.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I change my plan at any time?</h3>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll
                  prorate the billing accordingly.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer annual discounts?</h3>
                <p className="text-gray-600">
                  Yes! Save 20% when you pay annually. Contact our sales team for custom enterprise pricing and
                  multi-year agreements.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">
                  We accept all major credit cards, ACH transfers, and wire transfers for enterprise customers. All
                  payments are processed securely.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-teal-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Start your free trial today and see why 500+ sales teams trust Morgantonga Solutions.
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
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
