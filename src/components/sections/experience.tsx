import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Building2, Calendar, Users, Code } from 'lucide-react'

const experiences = [
  {
    title: 'Software Development Faculty Trainee',
    company: 'NxtWave',
    period: 'May 2025 – Present',
    type: 'Current Role',
    description: 'Currently mentoring students in Python, SQLite, and full-stack fundamentals.',
    highlights: [
      'Mentoring 50+ students in Python programming',
      'Developing curriculum for SQLite and database concepts',
      'Conducting code reviews and technical interviews',
      'Creating hands-on projects for real-world learning'
    ],
    icon: Users,
    current: true,
  },
  {
    title: 'Project Engineer',
    company: 'Wipro',
    period: 'May 2022 – Aug 2024',
    type: 'Full-time',
    description: 'Worked on enterprise software projects in full-stack environments.',
    highlights: [
      'Developed scalable web applications using modern frameworks',
      'Collaborated with cross-functional teams on enterprise solutions',
      'Implemented best practices for code quality and performance',
      'Participated in agile development methodologies'
    ],
    icon: Building2,
    current: false,
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Professional <span className="text-gradient-primary">Experience</span>
            </h2>
            <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className={`transition-smooth hover:shadow-large group animate-fade-in-up ${
                  exp.current ? 'border-primary/30 shadow-medium' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Icon and Timeline */}
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                        exp.current ? 'gradient-primary animate-pulse-glow' : 'bg-muted'
                      }`}>
                        <exp.icon className={`h-8 w-8 ${
                          exp.current ? 'text-white' : 'text-muted-foreground'
                        }`} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-lg text-primary font-semibold">
                            {exp.company}
                          </p>
                        </div>
                        
                        <div className="flex flex-col sm:items-end gap-2">
                          <div className="flex items-center text-muted-foreground text-sm">
                            <Calendar className="h-4 w-4 mr-1" />
                            {exp.period}
                          </div>
                          <Badge variant={exp.current ? 'default' : 'secondary'}>
                            {exp.type}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-3">
                        <h4 className="font-semibold flex items-center">
                          <Code className="h-4 w-4 mr-2 text-accent" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}