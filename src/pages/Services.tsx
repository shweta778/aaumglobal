import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Plane, 
  Ship, 
  Truck, 
  Package, 
  Settings,
  Clock,
  Shield,
  Award,
  CheckCircle,
  ArrowRight,
  Globe,
  Calculator,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const mainServices = [
    {
      icon: Plane,
      title: "Air Freight Services",
      description: "Fast, reliable air cargo solutions for time-sensitive shipments worldwide with door-to-door delivery options.",
      features: [
        "Express delivery options",
        "Temperature-controlled cargo",
        "Dangerous goods handling",
        "Charter flight arrangements",
        "Real-time tracking",
        "Customs clearance support"
      ],
      image: "✈️"
    },
    {
      icon: Ship,
      title: "Sea Freight Services", 
      description: "Cost-effective ocean freight solutions for bulk cargo and large-volume shipments with FCL and LCL options.",
      features: [
        "Full Container Load (FCL)",
        "Less than Container Load (LCL)",
        "Break bulk cargo",
        "Port-to-port service",
        "Marine insurance",
        "Container tracking"
      ],
      image: "🚢"
    },
    {
      icon: Truck,
      title: "Road Transportation",
      description: "Comprehensive ground transportation services across domestic and international routes with flexible scheduling.",
      features: [
        "Door-to-door delivery",
        "Cross-border transportation",
        "Specialized vehicle options",
        "Last-mile delivery",
        "Route optimization",
        "GPS tracking"
      ],
      image: "🚛"
    },
    {
      icon: Package,
      title: "Custom Clearance",
      description: "Expert customs clearance services ensuring smooth border crossings and compliance with international regulations.",
      features: [
        "Import/Export documentation",
        "Duty and tax calculation", 
        "Regulatory compliance",
        "Classification services",
        "Bonded warehouse facilities",
        "Expert consultation"
      ],
      image: "📦"
    }
  ];

  const additionalServices = [
    {
      icon: Settings,
      title: "Customized Logistics Solutions",
      description: "Tailored logistics options designed to meet your unique shipping requirements and business objectives."
    },
    {
      icon: Calculator,
      title: "Cost Optimization",
      description: "Innovative strategies to streamline your supply chain and reduce unnecessary logistics expenses."
    },
    {
      icon: Clock,
      title: "Reduced Transit Timing",
      description: "Optimized routing and scheduling to minimize transit times and improve delivery efficiency."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive insurance coverage and risk assessment to protect your valuable cargo."
    }
  ];

  const benefits = [
    "Global network of trusted partners",
    "24/7 customer support and tracking",
    "Competitive pricing and transparent costs",
    "Expert handling of complex shipments",
    "Compliance with international standards",
    "Technology-driven logistics solutions"
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Logistics Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Comprehensive freight forwarding solutions across all transportation modes, 
              designed to optimize your supply chain and reduce costs.
            </p>
            <Link to="/contact">
              <Button variant="accent" size="lg" className="text-lg px-8 py-3">
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Core Transportation Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From urgent air shipments to bulk ocean cargo, we provide end-to-end logistics solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainServices.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-card transition-all duration-300 border-border hover:border-primary/20">
                <CardHeader className="bg-muted/30">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardDescription className="text-base mb-6">
                    {service.description}
                  </CardDescription>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Value-Added Services</h2>
            <p className="text-xl text-muted-foreground">
              Additional solutions to enhance your logistics experience and operational efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300 border-border hover:border-primary/20">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Choose AAUM Global Logistics?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                With years of experience in the logistics industry, we understand the complexities 
                of global supply chains and provide solutions that deliver results.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Contact our logistics experts today for a customized solution that meets your specific requirements.
              </p>
              <div className="space-y-4">
                <Link to="/contact">
                  <Button variant="hero" className="w-full">
                    Request Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" className="w-full">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;