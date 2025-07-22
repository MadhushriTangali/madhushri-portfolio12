import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github, Star } from 'lucide-react'

const fullStackProjects = [
  {
    title: 'Talent Spark – Resume Builder',
    description: 'Real-time resume builder using React with preview and form validation features.',
    technologies: ['React.js', 'JavaScript', 'CSS', 'Form Validation'],
    githubUrl: 'https://github.com/MadhushriTangali/talent-spark-resume-builder',
    liveUrl: 'https://futurebuilder12.netlify.app/',
  },
  {
    title: 'Block Build – Portfolio Builder',
    description: 'Drag-and-drop portfolio creator with AI content assist.',
    technologies: ['React.js', 'Node.js', 'AI Integration', 'Drag & Drop'],
    githubUrl: 'https://github.com/MadhushriTangali/block-build-folio-fun',
    liveUrl: 'https://portfoliobuilder123.netlify.app/',
  },
  {
    title: 'Learn Script Scribe – Day Planner',
    description: 'Smart day planning application with task management and scheduling features.',
    technologies: ['React.js', 'Node.js', 'Authentication', 'Task Management'],
    githubUrl: 'https://github.com/MadhushriTangali/learn-script-scribe',
    liveUrl: 'https://officedayplanner.netlify.app/auth',
  },
  {
    title: 'Interview Insights Flow – Unstoppable',
    description: 'Comprehensive interview preparation platform with insights and analytics.',
    technologies: ['React.js', 'Node.js', 'Analytics', 'Interview Prep'],
    githubUrl: 'https://github.com/MadhushriTangali/interview-insights-flow',
    liveUrl: 'https://interview-master-app.netlify.app/',
  },
]

const otherProjects = [
  {
    title: 'Jobby App',
    description: 'A React-based job listing app featuring search, filters, login, and protected routes.',
    technologies: ['React.js', 'Authentication', 'Routing', 'API Integration'],
    githubUrl: 'https://github.com/MadhushriTangali/enhancementOfJobbyApp',
    liveUrl: 'https://madhu23jobbyapp.ccbp.tech/',
  },
  {
    title: 'NxtTrendz',
    description: 'A complete online store with product listings, cart functionality, and a secure payment flow.',
    technologies: ['React.js', 'Node.js', 'Payment Gateway', 'Database'],
    githubUrl: 'https://github.com/MadhushriTangali/enhancementOfNxtTrendzPayment',
    liveUrl: 'https://madhushritrendz.ccbp.tech/',
  },
  {
    title: 'IPL Dashboard',
    description: 'Interactive IPL cricket dashboard with team statistics and match insights.',
    technologies: ['React.js', 'Data Visualization', 'API Integration', 'Charts'],
    githubUrl: 'https://github.com/MadhushriTangali/enhancementOfIPLDashboard',
    liveUrl: 'https://madhu23iplboard.ccbp.tech/',
  },
  {
    title: 'Simple Todos',
    description: 'Clean and efficient todo list application with CRUD operations.',
    technologies: ['React.js', 'Local Storage', 'CRUD Operations', 'State Management'],
    githubUrl: 'https://github.com/MadhushriTangali/simpleTodosEnhancement',
    liveUrl: '#',
  },
]

const ProjectCard = ({ project, index, isOtherProject = false }: { project: any, index: number, isOtherProject?: boolean }) => (
  <Card
    className="group transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up hover:border-primary/50"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <CardContent className="p-6 relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Project Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <h3 className="text-xl font-bold group-hover:text-primary transition-all duration-300 group-hover:scale-105">
            {project.title}
          </h3>
          <div className="w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4 group-hover:text-foreground/80 transition-colors duration-300">
          {project.description}
        </p>
      </div>

      {/* Technologies */}
      <div className="mb-6 relative z-10">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string, techIndex: number) => (
            <Badge
              key={techIndex}
              variant="secondary"
              className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 transform"
              style={{ animationDelay: `${techIndex * 0.05}s` }}
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 relative z-10">
        {project.githubUrl && (
          <Button
            variant="outline"
            size="sm"
            asChild
            className="flex-1 group/btn hover:scale-105 transition-all duration-300"
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
              GitHub
            </a>
          </Button>
        )}
        
        {project.liveUrl && project.liveUrl !== '#' && (
          <Button
            variant={!isOtherProject ? 'hero' : 'default'}
            size="sm"
            asChild
            className="flex-1 hover:scale-105 transition-all duration-300"
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
    </CardContent>
  </Card>
)

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Full Stack Projects Section */}
          <div className="mb-20">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Full Stack <span className="text-gradient-primary">Projects</span>
              </h2>
              <div className="w-20 h-1 gradient-primary mx-auto rounded-full mb-4 animate-pulse"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Showcase of my recent work in full-stack development with modern technologies
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {fullStackProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>

          {/* Other Projects Section */}
          <div className="mb-16">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Other <span className="text-gradient-accent">Projects</span>
              </h2>
              <div className="w-20 h-1 gradient-accent mx-auto rounded-full mb-4 animate-pulse"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Additional projects showcasing various development skills and technologies
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {otherProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} isOtherProject={true} />
              ))}
            </div>
          </div>

          {/* Additional CTA */}
          <div className="text-center animate-fade-in-up">
            <p className="text-muted-foreground mb-6">
              Want to see more projects or collaborate on something amazing?
            </p>
            <Button
              variant="accent"
              size="lg"
              className="hover:scale-105 transition-all duration-300 animate-pulse"
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