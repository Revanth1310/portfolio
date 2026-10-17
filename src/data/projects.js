// All projects, ported from templates/main.html + templates/projects.html.
// Featured ones show on the home preview; the rest live below it.
export const projects = [
  {
    title: "SchemeAssist",
    image: "/images/scheme.jpg",
    description:
      "Scheme Assist is an AI-powered platform that helps citizens easily discover, understand, and apply for government welfare schemes. It provides personalized scheme recommendations, eligibility checking, required document guidance, and step-by-step application support, making government benefits more accessible to everyone.",
    links: [{ label: "View on GitHub", href: "https://github.com/Revanth1310/scheme-assist" }],
    featured: true,
  },
  {
    title: "Career Assistant",
    image: "/images/career.jpg",
    description:
      "The Career Assistant is an Agentic AI-powered tool designed to help users navigate their career paths, providing personalized advice, job recommendations, and skill development suggestions.",
    links: [{ label: "View on GitHub", href: "https://github.com/Revanth1310/CarrerAssistant" }],
    featured: true,
  },
  {
    title: "AgriBot",
    image: "/images/agribot.jpg",
    description:
      "AgriBot is an AI-powered agricultural assistant designed to help farmers with crop management, pest control, and yield optimization. Takes soil health monitoring and provides actionable insights for improved farming practices.",
    links: [{ label: "View on GitHub", href: "https://github.com/Revanth1310/agri-bot" }],
    featured: true,
  },
  {
    title: "Online Election System",
    image: "/images/voting.jpeg",
    description:
      "An online election system is a digital platform that enables the secure and efficient conduct of elections over the internet. It allows voters to cast their ballots remotely, with features like voter authentication, secure vote transmission, and real-time vote tallying, increasing participation while keeping results accurate and transparent.",
    links: [{ label: "View on GitHub", href: "https://github.com/Revanth1310/Election.git" }],
    featured: true,
  },
  {
    title: "NLP Chatbot",
    image: "/images/nlp.jpeg",
    description:
      "A chatbot that uses Natural Language Processing (NLP) techniques to understand and respond to user inputs intelligently.",
    links: [{ label: "View on GitHub", href: "https://github.com/Revanth1310/NLP_proj.git" }],
    featured: true,
  },
  {
    title: "HydroHub",
    image: "/images/hydrohub.jpg",
    description:
      "HydroHub is a web platform designed to provide water-related information, manage resources efficiently, and promote sustainable water usage through user interaction and real-time data.",
    links: [{ label: "View on GitHub", href: "https://github.com/Revanth1310/HydroHub.git" }],
    featured: true,
  },
  {
    title: "VQ Answering",
    image: "/images/vqa.png",
    description:
      "Visual Question Answering (VQA) is an AI system that answers questions about images using computer vision and NLP.",
    links: [{ label: "View on GitHub", href: "https://github.com/Revanth1310/vqa.git" }],
  },
  {
    title: "Chatbot",
    image: "/images/chatbot.png",
    description:
      "A chatbot is an AI-driven software application designed to simulate conversation with users, either through text or voice. It automates responses, answers queries, and performs tasks by understanding user input across websites, messaging apps, and customer support systems.",
    links: [
      { label: "Telegram Bot", href: "https://github.com/Revanth1310/AI_telegram-bot.git" },
      { label: "Bot Using NLP", href: "https://github.com/Revanth1310/chatbot.git" },
    ],
  },
  {
    title: "Object Detection",
    image: "/images/detection.jpg",
    description:
      "Object detection is a computer vision technique that identifies and locates objects within images or videos using bounding boxes.",
    links: [{ label: "View on GitHub", href: "https://github.com/Revanth1310/object-detection.git" }],
  },
  {
    title: "Local_AI",
    image: "/images/local.jpg",
    description:
      "A privacy-focused local AI chatbot and control center built to run an LLM locally through Ollama, with a persistent long-term memory system, semantic memory search, conversation storage, and an offline-only safety controller.The project is designed around the idea: Run the AI locally, keep user memory locally, and prevent the local model from running while Internet connectivity is available.The application currently uses Qwen3 4B through Ollama and is designed to work on CPU-based systems.",
    links: [{ label: "View on GitHub", href: "https://github.com/Revanth1310/Local_AI .git" }],
  },
  {
    title: "Bing_Automations",
    image: "/images/local.jpg",
    description:
      "Automation scripts for Bing Search, including a script to automate the process of sending messages to Bing Browser and receiving responses. The script uses the Selenium library to control a web browser and interact with the Bing Browser. It can be used to automate repetitive tasks, such as sending messages to Bing and receiving responses.I have done for to automate my daily repetative task.",
    links: [{ label: "View on GitHub", href: "https://github.com/Revanth1310/bing_automation" }],
  }
];

export const featuredProjects = projects.filter((p) => p.featured);
