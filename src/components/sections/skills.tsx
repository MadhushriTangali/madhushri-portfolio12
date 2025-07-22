import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Monitor, Server, Database, Award } from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Monitor,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap', 'Responsive Design'],
  },
  {
    title: 'Backend Development',
    icon: Server,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    skills: ['Python', 'Node.js'],
  },
  {
    title: 'Database',
    icon: Database,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    skills: ['SQLite'],
  },
]

const bootcamps = [
  'IoT Fundamentals',
  'Generative AI Essentials',
  'Advanced Python',
  'React Mastery',
  'Node.js Deep Dive',
  'Database Design',
  'API Development',
  'Cloud Computing',
  'DevOps Basics',
  'Machine Learning',
  'Data Structures',
  'Algorithm Design',
  'System Design',
  'Microservices',
  'GraphQL',
  'TypeScript',
  'Testing Strategies'
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Skills & <span className="text-gradient-primary">Expertise</span>
            </h2>
            <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="transition-smooth hover:shadow-large group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 ${category.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth`}>
                      <category.icon className={`h-8 w-8 ${category.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bootcamps Section */}
          <div className="animate-fade-in-up">
            <Card className="glass shadow-medium">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    Bootcamps & <span className="text-gradient-accent">Certifications</span>
                  </h3>
                  <p className="text-muted-foreground">
                    Participated in <span className="font-semibold text-accent">17 NxtWave bootcamps</span> covering 
                    IoT and Generative AI technologies
                  </p>
                </div>

                {/* Bootcamp Tags */}
                <div className="flex flex-wrap gap-3 justify-center">
                  {bootcamps.map((bootcamp, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="hover:bg-accent hover:text-accent-foreground hover:border-accent transition-smooth cursor-default text-sm py-1 px-3"
                    >
                      {bootcamp}
                    </Badge>
                  ))}
                </div>

                {/* Achievement Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">17</div>
                    <div className="text-sm text-muted-foreground">Bootcamps Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-1">2+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success mb-1">50+</div>
                    <div className="text-sm text-muted-foreground">Students Mentored</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}