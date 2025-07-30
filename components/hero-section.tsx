import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Play } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-teal-100 text-teal-800 hover:bg-teal-200">🎯 Trusted by 500+ Sales Teams</Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Validate Every Contact.{" "}
            <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
              Enhance Every Campaign.
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Our Contact Validator improves your data accuracy for higher response rates. Eliminate bounced emails,
            reduce spam complaints, and boost your outbound success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild className="bg-teal-600 hover:bg-teal-700 text-black px-8 py-4 text-lg">
              <Link href="/trial">Start Free Trial</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-teal-200 text-teal-700 hover:bg-teal-50 px-8 py-4 text-lg bg-transparent"
            >
              <Link href="/demo" className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                Book a Demo
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-teal-600" />
              <span>99.5% Accuracy Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-teal-600" />
              <span>Real-time Validation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-teal-600" />
              <span>CRM Integration</span>
            </div>
          </div>
        </div>

        {/* Hero Image/Demo */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl border border-teal-100 p-8">
              <div className="bg-gradient-to-br from-teal-50 to-white rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Contact Validator Dashboard</h3>
                  <Badge className="bg-green-100 text-green-800">Live Demo</Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                    <span className="text-gray-700">john.doe@company.com</span>
                    <Badge className="bg-green-100 text-green-800">✓ Valid</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                    <span className="text-gray-700">invalid@nonexistent.xyz</span>
                    <Badge className="bg-red-100 text-red-800">✗ Invalid</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                    <span className="text-gray-700">risky@tempmail.com</span>
                    <Badge className="bg-yellow-100 text-yellow-800">⚠ Risky</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
