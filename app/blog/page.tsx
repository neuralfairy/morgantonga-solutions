import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function BlogPage() {
  const featuredPost = {
    title: "The Complete Guide to Email Validation in 2024",
    excerpt:
      "Learn the latest best practices for email validation and how to improve your outbound campaign success rates.",
    author: "Sarah Mitchell",
    date: "January 15, 2024",
    readTime: "8 min read",
    category: "Best Practices",
    image: "/placeholder.svg?height=400&width=600",
    href: "/blog/complete-guide-email-validation-2024",
  }

  const posts = [
    {
      title: "5 Signs Your Contact Data Needs Validation",
      excerpt: "Discover the warning signs that indicate your contact database needs immediate attention.",
      author: "David Chen",
      date: "January 10, 2024",
      readTime: "5 min read",
      category: "Data Quality",
      image: "/placeholder.svg?height=200&width=300",
      href: "/blog/signs-contact-data-needs-validation",
    },
    {
      title: "ROI Calculator: The True Cost of Bad Contact Data",
      excerpt: "Calculate how much invalid contact data is costing your sales team and organization.",
      author: "Maria Rodriguez",
      date: "January 8, 2024",
      readTime: "6 min read",
      category: "ROI Analysis",
      image: "/placeholder.svg?height=200&width=300",
      href: "/blog/roi-calculator-bad-contact-data",
    },
    {
      title: "Integrating Contact Validation with Salesforce",
      excerpt: "Step-by-step guide to setting up automated contact validation in your Salesforce org.",
      author: "James Wilson",
      date: "January 5, 2024",
      readTime: "10 min read",
      category: "Tutorials",
      image: "/placeholder.svg?height=200&width=300",
      href: "/blog/integrating-validation-salesforce",
    },
    {
      title: "Email Deliverability Best Practices for 2024",
      excerpt: "Ensure your emails reach the inbox with these proven deliverability strategies.",
      author: "Sarah Mitchell",
      date: "January 3, 2024",
      readTime: "7 min read",
      category: "Email Marketing",
      image: "/placeholder.svg?height=200&width=300",
      href: "/blog/email-deliverability-best-practices-2024",
    },
    {
      title: "Case Study: TechCorp Increases Response Rates by 45%",
      excerpt: "See how TechCorp transformed their outbound campaigns with contact validation.",
      author: "Maria Rodriguez",
      date: "December 28, 2023",
      readTime: "4 min read",
      category: "Case Studies",
      image: "/placeholder.svg?height=200&width=300",
      href: "/blog/case-study-techcorp-response-rates",
    },
    {
      title: "Understanding Spam Traps and How to Avoid Them",
      excerpt: "Learn what spam traps are and how to protect your sender reputation.",
      author: "David Chen",
      date: "December 25, 2023",
      readTime: "6 min read",
      category: "Email Security",
      image: "/placeholder.svg?height=200&width=300",
      href: "/blog/understanding-spam-traps",
    },
  ]

  const categories = [
    { name: "All Posts", count: 24, active: true },
    { name: "Best Practices", count: 8, active: false },
    { name: "Case Studies", count: 5, active: false },
    { name: "Tutorials", count: 6, active: false },
    { name: "Data Quality", count: 5, active: false },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <Badge className="mb-6 bg-teal-100 text-teal-800 hover:bg-teal-200">📚 Resources & Insights</Badge>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Data Validation{" "}
                <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                  Resources
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Expert insights, best practices, and actionable strategies to improve your contact data quality and
                outbound success.
              </p>
            </div>

            {/* Featured Post */}
            <Card className="border-teal-100 shadow-2xl mb-16 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-teal-600 text-white">Featured</Badge>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-teal-100 text-teal-800">{featuredPost.category}</Badge>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredPost.date}</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Button asChild className="bg-teal-600 hover:bg-teal-700 text-black w-fit">
                    <Link href={featuredPost.href} className="flex items-center gap-2">
                      Read Article
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Sidebar */}
              <div className="lg:w-1/4">
                <div className="sticky top-24">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          category.active ? "bg-teal-100 text-teal-800 font-medium" : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span>{category.name}</span>
                          <span className="text-sm">{category.count}</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Newsletter Signup */}
                  <Card className="mt-8 border-teal-100 bg-gradient-to-br from-teal-50 to-white">
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-900">Stay Updated</CardTitle>
                      <CardDescription>Get the latest insights delivered to your inbox.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-teal-600 hover:bg-teal-700 text-black">
                        Subscribe to Newsletter
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Posts Grid */}
              <div className="lg:w-3/4">
                <div className="grid md:grid-cols-2 gap-8">
                  {posts.map((post, index) => (
                    <Card
                      key={index}
                      className="border-teal-100 hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                    >
                      <div className="relative h-48">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                        <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800">{post.category}</Badge>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl text-gray-900 line-clamp-2">{post.title}</CardTitle>
                        <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <User className="h-4 w-4 mr-2" />
                          <span className="mr-4">{post.author}</span>
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="mr-4">{post.date}</span>
                          <span>{post.readTime}</span>
                        </div>
                        <Button
                          asChild
                          variant="outline"
                          className="border-teal-200 text-teal-700 hover:bg-teal-50 w-full bg-transparent"
                        >
                          <Link href={post.href} className="flex items-center justify-center gap-2">
                            Read More
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-12">
                  <Button
                    variant="outline"
                    className="border-teal-200 text-teal-700 hover:bg-teal-50 px-8 py-3 bg-transparent"
                  >
                    Load More Articles
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-teal-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Ready to Improve Your Contact Data?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Put these insights into action with our Contact Validator. Start your free trial today.
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
                <Link href="/demo">Book a Demo</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
