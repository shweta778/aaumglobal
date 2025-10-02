import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Plane, 
  Ship, 
  Truck, 
  Package, 
  Clock, 
  Shield, 
  Award, 
  Users,
  ArrowRight,
  CheckCircle,
  Globe,
  Zap
} from "lucide-react";
import heroImage from "@/assets/hero-logistics.jpg";

const Home = () => {
  const services = [
    {
      icon: Plane,
      title: "Air Freight Services",
      description: "Fast and reliable air cargo solutions for time-sensitive shipments worldwide.",
    },
    {
      icon: Ship,
      title: "Sea Freight Services",
      description: "Cost-effective ocean freight for bulk cargo and large-volume shipments.",
    },
    {
      icon: Truck,
      title: "Road Transportation",
      description: "Door-to-door ground transportation services across domestic and international routes.",
    },
    {
      icon: Package,
      title: "Custom Clearance",
      description: "Expert customs clearance services to ensure smooth border crossings.",
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "99.5% on-time delivery rate with real-time tracking",
    },
    {
      icon: Shield,
      title: "Secure & Safe",
      description: "Advanced security measures and insurance coverage",
    },
    {
      icon: Zap,
      title: "Cost Optimization",
      description: "Innovative strategies to reduce logistics expenses",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Worldwide presence with local expertise",
    },
  ];

  const stats = [
    { number: "50+", label: "Countries Served" },
    { number: "5K+", label: "Shipments Delivered" },
    { number: "24/7", label: "Customer Support" },
    { number: "99.5%", label: "On-Time Delivery" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            AAUM GLOBAL
            <br />
            <span className="text-accent">LOGISTICS</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Comprehensive freight forwarding services across air, ocean, road, rail, and specialized project cargo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a href="/contact" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="lg" className="text-lg px-8 py-3">
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </a>
             <a href="/services" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
              Our Services
            </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From air freight to sea cargo, we provide comprehensive logistics solutions tailored to your specific needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border hover:border-primary/20">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose AAUM Global?</h2>
            <p className="text-xl text-muted-foreground">
              We deliver excellence through innovation, reliability, and customer-first approach
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-primary-foreground/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Optimize Your Supply Chain?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied clients who trust AAUM Global Logistics for their freight forwarding needs. 
            Get a customized quote today and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="lg" className="text-lg px-8 py-3">
                Get Your Quote Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;