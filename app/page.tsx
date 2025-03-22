import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"
import { MainNav } from "@/components/main-nav"
import { NewsletterForm } from "@/components/newsletter-form"
import { TechCard } from "@/components/tech-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">TechInfo</span>
          </div>
          <MainNav />
        </div>
      </header>
      <main className="flex-1">
        <section id="hero" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Stay Informed on Tech & Development
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Your trusted source for the latest in technology trends, development best practices, and industry
                    insights.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#topics">
                    <Button>Explore Topics</Button>
                  </Link>
                  <Link href="#newsletter">
                    <Button variant="outline">Subscribe</Button>
                  </Link>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=800"
                width={550}
                height={800}
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section id="about" className="w-full bg-muted/40 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About TechInfo</h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We provide comprehensive, accurate, and up-to-date information on technology and development. Our
                mission is to make complex technical concepts accessible to everyone, from beginners to experts.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Curated Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our team of experts carefully selects and reviews all content to ensure accuracy and relevance.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Regular Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Stay current with weekly updates on the latest technologies, frameworks, and development practices.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Community Driven</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Join our community of developers and tech enthusiasts to share knowledge and insights.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="topics" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Explore Topics</h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Dive into our comprehensive collection of tech and development topics.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <TechCard
                title="Web Development"
                description="Frontend, backend, and full-stack development resources."
                image="/placeholder.svg?height=100&width=100"
              />
              <TechCard
                title="Mobile Development"
                description="iOS, Android, and cross-platform app development guides."
                image="/placeholder.svg?height=100&width=100"
              />
              <TechCard
                title="Cloud Computing"
                description="AWS, Azure, Google Cloud, and serverless architecture."
                image="/placeholder.svg?height=100&width=100"
              />
              <TechCard
                title="DevOps"
                description="CI/CD, containerization, and infrastructure as code."
                image="/placeholder.svg?height=100&width=100"
              />
              <TechCard
                title="Artificial Intelligence"
                description="Machine learning, deep learning, and AI applications."
                image="/placeholder.svg?height=100&width=100"
              />
              <TechCard
                title="Cybersecurity"
                description="Security best practices, tools, and threat prevention."
                image="/placeholder.svg?height=100&width=100"
              />
            </div>
          </div>
        </section>
        <section id="articles" className="w-full bg-muted/40 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest Articles</h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay up-to-date with our most recent publications on technology and development.
              </p>
            </div>
            <Tabs defaultValue="all" className="mx-auto max-w-5xl py-12">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="web">Web</TabsTrigger>
                <TabsTrigger value="mobile">Mobile</TabsTrigger>
                <TabsTrigger value="ai">AI & ML</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="line-clamp-1">The Future of JavaScript Frameworks</CardTitle>
                    <CardDescription>March 15, 2025</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      Exploring the evolution of JavaScript frameworks and predicting future trends in web development.
                    </p>
                    <Button variant="link" className="mt-4 px-0">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="line-clamp-1">Building Scalable Mobile Applications</CardTitle>
                    <CardDescription>March 10, 2025</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      Best practices for developing mobile applications that can scale with your user base.
                    </p>
                    <Button variant="link" className="mt-4 px-0">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="line-clamp-1">AI in Software Development</CardTitle>
                    <CardDescription>March 5, 2025</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      How artificial intelligence is transforming the software development lifecycle.
                    </p>
                    <Button variant="link" className="mt-4 px-0">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="line-clamp-1">Cloud-Native Architecture Patterns</CardTitle>
                    <CardDescription>February 28, 2025</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      Design patterns for building resilient and scalable applications in the cloud.
                    </p>
                    <Button variant="link" className="mt-4 px-0">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="line-clamp-1">Securing Modern Web Applications</CardTitle>
                    <CardDescription>February 20, 2025</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      Essential security practices for protecting web applications from common vulnerabilities.
                    </p>
                    <Button variant="link" className="mt-4 px-0">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="line-clamp-1">The Rise of Edge Computing</CardTitle>
                    <CardDescription>February 15, 2025</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      Understanding edge computing and its impact on application architecture and performance.
                    </p>
                    <Button variant="link" className="mt-4 px-0">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="web" className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="line-clamp-1">The Future of JavaScript Frameworks</CardTitle>
                    <CardDescription>March 15, 2025</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      Exploring the evolution of JavaScript frameworks and predicting future trends in web development.
                    </p>
                    <Button variant="link" className="mt-4 px-0">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="line-clamp-1">Securing Modern Web Applications</CardTitle>
                    <CardDescription>February 20, 2025</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      Essential security practices for protecting web applications from common vulnerabilities.
                    </p>
                    <Button variant="link" className="mt-4 px-0">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="mobile" className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="line-clamp-1">Building Scalable Mobile Applications</CardTitle>
                    <CardDescription>March 10, 2025</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      Best practices for developing mobile applications that can scale with your user base.
                    </p>
                    <Button variant="link" className="mt-4 px-0">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="ai" className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="line-clamp-1">AI in Software Development</CardTitle>
                    <CardDescription>March 5, 2025</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      How artificial intelligence is transforming the software development lifecycle.
                    </p>
                    <Button variant="link" className="mt-4 px-0">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section id="newsletter" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Stay Updated</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Subscribe to our newsletter to receive the latest tech and development news, tutorials, and
                    resources.
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-4 rounded-xl border bg-card p-6 shadow-sm">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © 2025 TechInfo. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
      <ScrollToTopButton />
    </div>
  )
}

