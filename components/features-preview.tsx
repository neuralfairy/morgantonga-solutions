import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Database, Target, Shield, Zap, Users } from "lucide-react"

export function FeaturesPreview() {
  const features = [
    {
      icon: Mail,
      title: "Real-time Email Validation",
      description:
        "Validate email addresses instantly with 99.5% accuracy using advanced algorithms and real-time checks.",
      badge: "Core Feature",
    },
    {
      icon: Database,
      title: "Bulk Data Processing",
      description: "Process thousands of contacts simultaneously with our high-speed validation engine.",
      badge: "Enterprise",
    },
    {
      icon: Target,
      title: "CRM Integration",
      description: "Seamlessly integrate with Salesforce, HubSpot, Pipedrive, and 50+ other CRM platforms.",
      badge: "Popular",
    },
    {
      icon: Shield,
      title: "Spam Trap Detection",
      description: "Identify and remove spam traps, role-based emails, and disposable addresses.",
      badge: "Advanced",
    },
    {
      icon: Zap,
      title: "API & Automation",
      description: "Automate validation workflows with our RESTful API and webhook integrations.",
      badge: "Developer",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share validated lists, track team performance, and manage user permissions.",
      badge: "Team",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
              Data Accuracy
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to ensure your contact data is clean, accurate, and ready for successful outbound
            campaigns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-teal-100 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-teal-100 text-teal-800">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
