import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Mail, Shield, Zap, ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <Badge className="mb-6 bg-teal-100 text-teal-800 hover:bg-teal-200">🚀 Advanced Contact Validation</Badge>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Powerful Features for{" "}
                <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                  Perfect Data
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover how our Contact Validator transforms your outbound campaigns with industry-leading accuracy and
                seamless integrations.
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
                  <Link href="/demo" className="flex items-center gap-2">
                    <Play className="h-5 w-5" />
                    Interactive Demo
                  </Link>
                </Button>
              </div>
            </div>

            {/* Interactive Demo */}
            <div className="max-w-4xl mx-auto mb-20">
              <Card className="border-teal-100 shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-t-lg">
                  <CardTitle className="text-2xl">Live Contact Validator Demo</CardTitle>
                  <CardDescription className="text-teal-100">See real-time validation in action</CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <Tabs defaultValue="realtime" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="realtime">Real-time Check</TabsTrigger>
                      <TabsTrigger value="bulk">Bulk Validation</TabsTrigger>
                      <TabsTrigger value="integration">CRM Integration</TabsTrigger>
                    </TabsList>

                    <TabsContent value="realtime" className="mt-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                          <span className="font-medium">sarah.johnson@techcorp.com</span>
                          <Badge className="bg-green-100 text-green-800">✓ Valid & Deliverable</Badge>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
                          <span className="font-medium">invalid@nonexistent.xyz</span>
                          <Badge className="bg-red-100 text-red-800">✗ Invalid Domain</Badge>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                          <span className="font-medium">temp@10minutemail.com</span>
                          <Badge className="bg-yellow-100 text-yellow-800">⚠ Disposable Email</Badge>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="bulk" className="mt-6">
                      <div className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-semibold">Processing 10,000 contacts...</span>
                          <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                          <div className="bg-teal-600 h-2 rounded-full" style={{ width: "75%" }}></div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-green-600">7,500</div>
                            <div className="text-sm text-gray-600">Valid</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-red-600">1,800</div>
                            <div className="text-sm text-gray-600">Invalid</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-yellow-600">700</div>
                            <div className="text-sm text-gray-600">Risky</div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="integration" className="mt-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card className="border-teal-100">
                          <CardHeader>
                            <CardTitle className="text-lg">Salesforce Integration</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                <span className="text-sm">Auto-validate new leads</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                <span className="text-sm">Update contact scores</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                <span className="text-sm">Flag risky contacts</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-teal-100">
                          <CardHeader>
                            <CardTitle className="text-lg">HubSpot Integration</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                <span className="text-sm">Workflow automation</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                <span className="text-sm">List segmentation</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                <span className="text-sm">Campaign optimization</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Feature Categories */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Core Validation */}
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Validation</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>Syntax & format validation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>Domain & MX record checks</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>Mailbox existence verification</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>Catch-all detection</span>
                  </li>
                </ul>
              </div>

              {/* Advanced Protection */}
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Protection</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>Spam trap identification</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>Role-based email detection</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>Disposable email filtering</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>Toxic domain blocking</span>
                  </li>
                </ul>
              </div>

              {/* Enterprise Features */}
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>Bulk processing (millions)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>API rate limiting</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>Custom validation rules</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                    <span>Dedicated support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-teal-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Experience Perfect Data Validation?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of sales teams who trust Morgantonga Solutions for accurate contact validation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-teal-600 hover:bg-teal-700 text-black px-8 py-4">
                <Link href="/trial" className="flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="h-5 w-5" />
                </Link>
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
