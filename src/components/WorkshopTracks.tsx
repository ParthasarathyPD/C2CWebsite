import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
const WorkshopTracks = () => {
  const tracks = [{
    title: "Engaging Gen Z Learners",
    subtitle: "Pedagogies for the Digital Age",
    description: "Master active learning, gamification, and digital strategies to connect with modern students.",
    highlights: ["Flipped classroom techniques", "Game-based learning", "Microlearning strategies", "Digital storytelling"],
    formats: ["1 Day", "2 Days", "5 Days"],
    category: "Pedagogy"
  }, {
    title: "Getting Started with Research",
    subtitle: "For Non-PhDs and Early Researchers",
    description: "Enter the research world with practical tools and strategies for academic growth.",
    highlights: ["Problem identification", "Grant writing", "Academic publishing", "Research tools mastery"],
    formats: ["1 Day", "2 Days"],
    category: "Research"
  }, {
    title: "AI Tools Deep Dive",
    subtitle: "Hands-on with Generative AI",
    description: "Explore 35+ AI tools for teaching, coding, grading, and research enhancement.",
    highlights: ["Generative AI tools", "AutoML platforms", "AI teaching assistants", "Automated grading"],
    formats: ["1 Day", "2 Days", "5 Days"],
    category: "Technology"
  }, {
    title: "Inclusive Education in CS",
    subtitle: "Accessibility and Universal Design",
    description: "Create accessible, inclusive CS classrooms that support all learners effectively.",
    highlights: ["WCAG compliance", "Accessible IDEs", "Neurodiversity awareness", "Inclusive assessments"],
    formats: ["1 Day", "2 Days"],
    category: "Inclusion"
  }, {
    title: "Learning Analytics",
    subtitle: "Learning Outcomes Tracking",
    description: "Use data-driven insights to track and improve student learning outcomes.",
    highlights: ["LMS analytics", "Predictive modeling", "Real-time feedback", "Privacy compliance"],
    formats: ["1 Day", "2 Days"],
    category: "Analytics"
  }, {
    title: "Teaching Ethics in Tech",
    subtitle: "Fairness and Sustainability",
    description: "Integrate ethical thinking and sustainable practices into CS curriculum.",
    highlights: ["Algorithmic fairness", "Data privacy ethics", "Environmental impact", "Responsible AI"],
    formats: ["1 Day"],
    category: "Ethics"
  }, {
    title: "Creative Coding",
    subtitle: "Computational Thinking for All",
    description: "Introduce artistic and creative problem-solving approaches to computer science.",
    highlights: ["Processing & p5.js", "CS Unplugged", "Visual programming", "Transdisciplinary projects"],
    formats: ["1 Day"],
    category: "Creativity"
  }, {
    title: "Mentoring & Career Planning",
    subtitle: "Student Guidance Strategies",
    description: "Equip yourself with strategies to guide students in academic and industry pathways.",
    highlights: ["Mentorship models", "Research internships", "Portfolio building", "Career support"],
    formats: ["1 Day"],
    category: "Mentoring"
  }];
  const getCategoryColor = (category: string) => {
    const colors = {
      "Pedagogy": "bg-blue-100 text-blue-800",
      "Research": "bg-green-100 text-green-800",
      "Technology": "bg-purple-100 text-purple-800",
      "Inclusion": "bg-orange-100 text-orange-800",
      "Analytics": "bg-pink-100 text-pink-800",
      "Ethics": "bg-yellow-100 text-yellow-800",
      "Creativity": "bg-indigo-100 text-indigo-800",
      "Mentoring": "bg-red-100 text-red-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };
  return <section id="workshop-tracks" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Workshop Tracks
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from 8 specialized tracks designed to elevate your teaching practice and research capabilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tracks.map((track, index) => <Card key={index} className="h-full gradient-card shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge className={getCategoryColor(track.category)}>
                    {track.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight">
                  {track.title}
                </CardTitle>
                <CardDescription className="font-medium text-primary">
                  {track.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {track.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Key Highlights:</h4>
                  <ul className="text-xs space-y-1 text-muted-foreground">
                    {track.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1 h-1 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <h4 className="font-semibold text-sm mb-2">Available Formats:</h4>
                    <div className="flex flex-wrap gap-2 w-full">
                      {track.formats.map((format, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs rounded-md px-2 py-0.5 whitespace-nowrap">
                          {format}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default WorkshopTracks;