import { BotMessageSquare, Lightbulb, MessageCircleWarning, ShieldQuestion } from "lucide-react";
import { GlobeLock } from "lucide-react";





export const features = [
  {
    icon: <BotMessageSquare />,
    text: "AI-Driven Interviews ",
    description:
      " Users participate in mock interviews where the AI asks dynamic questions based on the role and industry.",
  },
  {
    icon: <Lightbulb />,
    text: " Analyzes Responses ",
    description:
      "The AI evaluates answers for clarity, confidence, relevance, and tone (if speech-based).",
  },
  {
    icon: <MessageCircleWarning />,
    text: "Generates Feedback & Scores ",
    description:
      "After the interview, the AI provides detailed feedback, highlighting strengths and areas for improvement.",
  },
  {
    icon:  <ShieldQuestion/>,
    text: "Generate interview questions",
    description:
      "can generate interview questions dynamically based on AI expertise and industry standards. This makes the interviews more realistic and adaptive, helping users prepare effectively.",
  },
  
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "It Includes an Analytic Dashboard . Users can review past interviews and measure their improvement over time.",
  },
];

