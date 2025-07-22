import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? 'glass shadow-large backdrop-blur-xl border-b border-primary/30 bg-background/95'
          : 'gradient-primary backdrop-blur-lg shadow-glow'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('#home')}
              className={`text-2xl font-bold transition-smooth hover:scale-110 relative group ${
                isScrolled 
                  ? 'text-gradient-primary' 
                  : 'text-white drop-shadow-lg'
              }`}
            >
              <span className="relative z-10">MT</span>
              <div className="absolute inset-0 bg-gradient-accent rounded-lg opacity-0 group-hover:opacity-20 transition-smooth blur-sm scale-150"></div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-smooth relative group overflow-hidden ${
                    isScrolled
                      ? 'text-muted-foreground hover:text-primary hover:bg-primary/10'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-smooth transform scale-x-0 group-hover:scale-x-100 origin-left"></div>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-smooth transform scale-x-0 group-hover:scale-x-100 origin-left delay-75"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`h-10 w-10 transition-smooth hover:scale-110 ${
                  isScrolled 
                    ? 'hover:bg-primary/10' 
                    : 'hover:bg-white/10 text-white'
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
            
            {/* Mobile theme toggle */}
            <div className="sm:hidden">
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass animate-fade-in border-t border-primary/20 backdrop-blur-xl">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-muted-foreground hover:text-primary block px-4 py-3 rounded-lg text-base font-semibold w-full text-left transition-smooth hover:bg-gradient-primary hover:text-white hover:shadow-medium group"
                >
                  <span className="group-hover:translate-x-2 transition-smooth inline-block">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}