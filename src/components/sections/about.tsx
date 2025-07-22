import { Card, CardContent } from '@/components/ui/card'
import { GraduationCap, Calendar } from 'lucide-react'

const education = [
  {
    institution: 'NxtWave Disruptive Technologies',
    period: 'May 2024 – May 2025',
    degree: 'Full-stack Certification',
    highlight: true,
  },
  {
    institution: 'KLE College of Engineering',
    period: '2018 – 2022',
    degree: 'BE in ECE (9.22 CGPA)',
    highlight: false,
  },
  {
    institution: 'R.L.P.U College',
    period: '2016 – 2018',
    degree: 'Intermediate, 92.33%',
    highlight: false,
  },
  {
    institution: 'Govt High School',
    period: '2015 – 2016',
    degree: 'SSC, 93.6%',
    highlight: false,
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              About <span className="text-gradient-primary">Me</span>
            </h2>
            <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Bio */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 animate-fade-in-up">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Software Development Instructor at <span className="text-primary font-semibold">NxtWave</span> and 
                a certified <span className="text-accent font-semibold">MERN Stack Developer</span>. I specialize 
                in building dynamic, full-stack web applications using MongoDB, Express.js, React, and Node.js.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I transitioned into mentoring after completing the MERN Full Stack program at NxtWave. 
                I now guide budding developers and enjoy teaching, creating real-world projects, and 
                staying updated with the latest web technologies.
              </p>
            </div>

            <div className="animate-slide-in-right">
              <Card className="glass shadow-medium hover:shadow-large transition-smooth">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Always Learning</h3>
                    <p className="text-muted-foreground">
                      Passionate about continuous learning and staying at the forefront of web development.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold text-center mb-12">
              Education <span className="text-gradient-accent">Journey</span>
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className={`transition-smooth hover:shadow-medium group ${
                    edu.highlight ? 'border-primary/30 shadow-soft' : ''
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${
                        edu.highlight ? 'bg-primary animate-pulse-glow' : 'bg-muted'
                      }`}></div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                          <h4 className={`font-semibold ${
                            edu.highlight ? 'text-primary' : 'text-foreground'
                          }`}>
                            {edu.institution}
                          </h4>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            {edu.period}
                          </div>
                        </div>
                        <p className="text-muted-foreground">{edu.degree}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}