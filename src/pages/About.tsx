import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  Award, 
  Globe, 
  Target,
  CheckCircle,
  TrendingUp,
  Shield,
  Clock,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Reliability",
      description: "We deliver on our promises with consistent, dependable service you can trust."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Continuous improvement and innovation drive our commitment to superior results."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We build lasting relationships with clients based on mutual success and growth."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Worldwide network combined with local expertise for comprehensive coverage."
    }
  ];

  const milestones = [
    { year: "2025", event: "Company founded with a vision for global logistics excellence" },
    // { year: "2013", event: "Expanded operations to cover 20+ countries worldwide" },
    // { year: "2016", event: "Launched specialized project cargo division" },
    // { year: "2019", event: "Achieved ISO 9001:2015 certification for quality management" },
    // { year: "2017", event: "Introduced AI-powered cost optimization solutions" },
    // { year: "2019", event: "Serving 50+ countries with 99.5% on-time delivery rate" },
    // { year: "2021", event: "We provide special service and rates for LCL cargo with specialzed Team." },
    // { year: "2021", event: "We are Specialized in Sea-freight" }
  ];

  const stats = [
    { number: "5+", label: "Years of Experience" },
    { number: "10+", label: "Countries Served" },
    { number: "100+", label: "Global Partners" },
    { number: "5,00+", label: "Satisfied Clients" }
  ];

  const team = [
    {
      name: "Ms. Bhagyashree",
      position: "Chief Executive Officer",
      description: "10+ years in global logistics with expertise in strategic planning and business development."
    },
    {
      name: "Mr. Shridhar",
      position: "Chief Operations Officer",
      description: "Expert in supply chain optimization with a focus on technology-driven solutions."
    },
    {
      name: "Mr. Ajit",
      position: "Head of Customer Relations",
      description: "Dedicated to ensuring exceptional customer experience and satisfaction."
    },
    {
      name: "Mr. Rahul",
      position: "Director of Technology",
      description: "Leading digital transformation initiatives and innovative logistics technologies."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About AAUM Global Logistics
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Your trusted partner in global logistics, delivering excellence through innovation, 
              reliability, and customer-first approach.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                AAUM Global Logistics is one of the fastest growing and most dynamic inter-national transportation and logistics service providers. 
                We offer professional services Ocean Freight, Air Freight, Custom Brokerage and Road Transportation. 
                AAUM GLOBAL has founded its growth and success on service excellence.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our highly experienced team of professionals have the flexibility of a smaller team combined with all the know- how required 
                to expertly handle the most complex logistics requirements. Managements with every level in the organization in intimately 
                involved with every aspect of the business to ensure that our customers truly do enjoy peace of mind.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Today, we continue to lead the industry with cutting-edge technology, sustainable 
                practices, and a team of dedicated professionals who are passionate about delivering 
                results that exceed expectations.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our aim is giving the best price with the best service and support our customers when they develop new traffics.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Partner With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="bg-muted/30 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">Company Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-border hover:border-primary/20 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Target className="h-6 w-6 text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  To provide comprehensive, cost-effective logistics solutions that enable businesses 
                  to optimize their supply chains, reduce operational costs, and achieve their goals 
                  through reliable, innovative, and sustainable transportation services.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary/20 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Globe className="h-6 w-6 text-primary" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  To be the world's most trusted logistics partner, recognized for our innovation, 
                  reliability, and commitment to sustainability, while connecting businesses globally 
                  through seamless, technology-driven supply chain solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 border-border hover:border-primary/20">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our growth and development
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-8">
                  <div className="flex-shrink-0 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {milestone.year}
                  </div>
                  <div className="flex-grow p-6 bg-background rounded-lg border border-border">
                    <p className="text-lg text-foreground">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground">
              Meet the experts driving our success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 border-border hover:border-primary/20">
                <CardHeader>
                  <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {member.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience the AAUM Difference?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/90">
            Join thousands of businesses who trust us with their logistics needs. 
            Let's discuss how we can optimize your supply chain and reduce costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="accent" size="lg" className="text-lg px-8 py-3">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;