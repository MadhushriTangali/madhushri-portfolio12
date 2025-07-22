import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Monitor, Server, Database, Award, Code, Settings, Github, Zap, Users, Lightbulb, Globe, GitBranch, Rocket, BarChart } from 'lucide-react'

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
  {
    title: 'Tools',
    icon: Settings,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    skills: ['VS Code', 'Postman', 'GitHub', 'Lovable'],
  },
]

const coreStrengths = [
  {
    icon: Code,
    title: 'Full-Stack Web Development',
    description: 'MERN stack expertise',
    color: 'text-blue-600',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: Users,
    title: 'Technical Mentorship & Training',
    description: 'Guiding developers',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-500/10',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving & Debugging',
    description: 'Complex issue resolution',
    color: 'text-amber-600',
    bgColor: 'bg-amber-500/10',
  },
  {
    icon: Globe,
    title: 'Responsive & Accessible Design',
    description: 'User-first approach',
    color: 'text-purple-600',
    bgColor: 'bg-purple-500/10',
  },
  {
    icon: GitBranch,
    title: 'Git, GitHub, Deployment',
    description: 'Netlify, Vercel expertise',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-500/10',
  },
  {
    icon: Rocket,
    title: 'Fast Learner',
    description: 'Quick technology adoption',
    color: 'text-pink-600',
    bgColor: 'bg-pink-500/10',
  },
  {
    icon: BarChart,
    title: 'Team Collaboration',
    description: 'Agile environments',
    color: 'text-teal-600',
    bgColor: 'bg-teal-500/10',
  },
]

const bootcamps: string[] = []

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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="transition-smooth hover:shadow-large group animate-fade-in-up hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 ${category.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth shadow-glow`}>
                      <category.icon className={`h-8 w-8 ${category.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold gradient-text">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default hover:scale-110"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Core Strengths Section */}
          <div className="mb-16 animate-fade-in-up">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Core <span className="text-gradient-accent">Strengths</span>
              </h3>
              <div className="w-16 h-1 gradient-accent mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {coreStrengths.map((strength, index) => (
                <Card
                  key={index}
                  className="transition-smooth hover:shadow-elegant group animate-fade-in-up hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-14 h-14 ${strength.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth shadow-soft`}>
                      <strength.icon className={`h-7 w-7 ${strength.color}`} />
                    </div>
                    <h4 className="text-sm font-semibold mb-2 gradient-text">{strength.title}</h4>
                    <p className="text-xs text-muted-foreground">{strength.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
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
                    <span className="text-gradient-accent">Bootcamps</span>
                  </h3>
                  <p className="text-muted-foreground">
                    Participated in <span className="font-semibold text-accent">17 NxtWave bootcamps</span> covering 
                    IoT and Generative AI technologies
                  </p>
                </div>

                {/* Bootcamp Description */}
                <div className="text-center">
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Completed comprehensive training programs covering advanced web development, 
                    full-stack technologies, and modern development practices.
                  </p>
                </div>

                {/* Achievement Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">17</div>
                    <div className="text-sm text-muted-foreground">Bootcamps Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success mb-1">100+</div>
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