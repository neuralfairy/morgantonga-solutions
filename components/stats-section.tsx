import { TrendingUp, Users, CheckCircle, Zap } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: TrendingUp,
      value: "45%",
      label: "Average Response Rate Increase",
      description: "Higher engagement with validated contacts",
    },
    {
      icon: Users,
      value: "500+",
      label: "Sales Teams Trust Us",
      description: "From startups to Fortune 500 companies",
    },
    {
      icon: CheckCircle,
      value: "99.5%",
      label: "Validation Accuracy",
      description: "Industry-leading precision rates",
    },
    {
      icon: Zap,
      value: "10M+",
      label: "Contacts Validated Monthly",
      description: "Processing at enterprise scale",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-xl font-semibold mb-1">{stat.label}</div>
              <div className="text-teal-100 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
