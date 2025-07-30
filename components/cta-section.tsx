import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-br from-teal-600 to-teal-500 border-0 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Improve Your Contact Data?</h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Join 500+ sales teams who trust Morgantonga Solutions for accurate, validated contact data.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" asChild className="bg-white hover:bg-gray-100 text-black px-8 py-4 text-lg">
                <Link href="/trial" className="flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
              >
                <Link href="/demo">Book a Demo</Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Setup in 5 minutes</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
