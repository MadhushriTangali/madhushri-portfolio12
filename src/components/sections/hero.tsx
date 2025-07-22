import { Button } from '@/components/ui/button'
import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react'
import profileImage from '@/assets/madhushri-profile.jpg'

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6">
              <img
                src={profileImage}
                alt="Madhushri Tangali"
                className="w-full h-full object-cover rounded-full shadow-large border-4 border-primary/20 animate-float"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-pulse-glow"></div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="text-gradient-primary">Madhushri Tangali</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-4">
              Software Development Instructor & Full-Stack Developer
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Building robust web apps and mentoring tomorrow's developers.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-in-right">
            <Button
              size="xl"
              variant="hero"
              onClick={() => scrollToSection('#projects')}
              className="w-full sm:w-auto"
            >
              View Portfolio
            </Button>
            <Button
              size="xl"
              variant="outline"
              onClick={() => scrollToSection('#contact')}
              className="w-full sm:w-auto"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in">
            <a
              href="mailto:madhushri.kle@gmail.com"
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/MadhushriTangali"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/madhushri-tangali"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection('#about')}
            className="animate-bounce hover:text-primary transition-smooth"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}