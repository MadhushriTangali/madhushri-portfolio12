import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, Linkedin, Github, Send, MapPin } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'madhushri.kle@gmail.com',
    href: 'mailto:madhushri.kle@gmail.com',
    color: 'text-red-500',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9606757654',
    href: 'tel:+919606757654',
    color: 'text-green-500',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'madhushri-tangali',
    href: 'https://www.linkedin.com/in/madhushri-tangali/',
    color: 'text-blue-500',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'MadhushriTangali',
    href: 'https://github.com/MadhushriTangali',
    color: 'text-purple-500',
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    })

    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get In <span className="text-gradient-primary">Touch</span>
            </h2>
            <div className="w-20 h-1 gradient-primary mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss a project, mentorship opportunity, or just want to connect? 
              I'd love to hear from you!
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Let's <span className="text-gradient-accent">Connect</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you're a student looking for guidance, a fellow developer wanting to collaborate, 
                  or a company seeking expertise in full-stack development, I'm always open to meaningful conversations.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <Card
                    key={index}
                    className="transition-smooth hover:shadow-medium group"
                  >
                    <CardContent className="p-4">
                      <a
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 group-hover:scale-[1.02] transition-smooth"
                      >
                        <div className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-smooth`}>
                          <contact.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium">{contact.label}</div>
                          <div className={`text-sm ${contact.color} group-hover:text-primary transition-smooth`}>
                            {contact.value}
                          </div>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Location */}
              <Card className="glass">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Based in India</div>
                      <div className="text-sm text-muted-foreground">
                        Available for remote opportunities worldwide
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}