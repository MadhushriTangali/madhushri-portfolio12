import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github, Star } from 'lucide-react'

const projects = [
  {
    title: 'Talent Spark – Resume Builder',
    description: 'Real-time resume builder using React with preview and form validation features.',
    technologies: ['React.js', 'JavaScript', 'CSS', 'Form Validation'],
    githubUrl: 'https://github.com/MadhushriTangali/talent-spark-resume-builder',
    liveUrl: 'https://futurebuilder12.netlify.app/',
    featured: true,
  },
  {
    title: 'Block Build – Portfolio Builder',
    description: 'Drag-and-drop portfolio creator with AI content assist.',
    technologies: ['React.js', 'Node.js', 'AI Integration', 'Drag & Drop'],
    githubUrl: 'https://github.com/MadhushriTangali',
    liveUrl: 'https://madhushritangali.github.io',
    featured: true,
  },
  {
    title: 'Jobby App',
    description: 'A React-based job listing app featuring search, filters, login, and protected routes.',
    technologies: ['React.js', 'Authentication', 'Routing', 'API Integration'],
    githubUrl: null,
    liveUrl: 'https://madhushritangali.github.io',
    featured: false,
  },
  {
    title: 'NxtTrendz',
    description: 'A complete online store with product listings, cart functionality, and a secure payment flow.',
    technologies: ['React.js', 'Node.js', 'Payment Gateway', 'Database'],
    githubUrl: 'https://github.com/MadhushriTangali',
    liveUrl: 'https://madhushritrendz.ccbp.tech/login',
    featured: false,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured <span className="text-gradient-primary">Projects</span>
            </h2>
            <div className="w-20 h-1 gradient-primary mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcase of my recent work in full-stack development and mentoring projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`group transition-smooth hover:shadow-large animate-fade-in-up ${
                  project.featured ? 'border-primary/30 shadow-medium' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-smooth">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <Star className="h-4 w-4 text-accent fill-current" />
                        )}
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs hover:bg-primary hover:text-primary-foreground transition-smooth"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1 btn-hover-lift"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    
                    {project.liveUrl && (
                      <Button
                        variant={project.featured ? 'hero' : 'default'}
                        size="sm"
                        asChild
                        className="flex-1"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>

                  {/* Featured Project Indicator */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-smooth">
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional CTA */}
          <div className="text-center mt-12 animate-fade-in-up">
            <p className="text-muted-foreground mb-6">
              Want to see more projects or collaborate on something amazing?
            </p>
            <Button
              variant="accent"
              size="lg"
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Let's Work Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}