// ── Types ──────────────────────────────────────────────────────────────────────

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

export interface Experience {
  role: string;
  company: string;
  product: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface ProjectMetrics {
  [key: string]: string;
}

export interface Project {
  title: string;
  period: string;
  description: string;
  tech: string[];
  metrics?: ProjectMetrics;
  links: {
    github?: string;
  };
  featured: boolean;
}

export interface CompetencyGroup {
  group: string;
  skills: string[];
  evidence: string;
}

export interface JourneyStep {
  stage: string;
  title: string;
  milestone: string;
  description: string;
  period: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  period: string;
  cgpa: string;
}

// ── Data ───────────────────────────────────────────────────────────────────────

export const PROFILE = {
  name: "Rohit Bedse",
  role: "ML & GenAI Engineer",
  tagline: "83% accuracy on 36K+ YouTube comments — building ML pipelines, RAG systems, and multi-agent AI.",
  bio: "Computer Science graduate focused on AI, ML, and Generative AI. Practical experience across ML pipelines, NLP, data engineering, model evaluation, RAG, and AI application development. I build systems that work — from tuned classifiers with tracked experiments to multi-agent research workflows.",
};

export const CONTACT: ContactInfo = {
  email: "rbedse81@gmail.com",
  phone: "+91 8698533040",
  location: "Pune, Maharashtra, India",
  linkedin: "https://www.linkedin.com/in/rohit-bedse-086b86262",
  github: "https://github.com/rohitbedse",
  portfolio: "https://rohitbedse.github.io/",
};

export const EDUCATION: Education = {
  degree: "B.Tech",
  field: "Computer Science & Engineering",
  institution: "S.S.V.P.S. B.S. Deore College of Engineering, Dhule",
  period: "Nov 2022 – Jun 2026",
  cgpa: "7.49 / 10",
};

export const EXPERIENCE: Experience = {
  role: "Data Science Intern",
  company: "VigyanShaala International",
  product: "CURIE AI Platform",
  location: "Pune, India",
  period: "Aug 2026 – Present",
  bullets: [
    "Researched and evaluated 8–10 education & career data sources, mapping 10–20 parameters per source against product and AI-system requirements",
    "Benchmarked primary sources against 2–3 alternatives each to identify coverage gaps",
    "Assessed data quality across completeness, consistency, freshness, and verifiability dimensions",
    "Designed PostgreSQL schemas across 4 major data sections using requirement-driven and mind-map modeling",
    "Evaluated web-scraping strategies; supported extraction, cleaning, validation, and standardization pipelines",
    "Investigated graph-based entity/relationship mapping for education-career data",
    "Researched RAG architectures, retrieval strategies, embedding models, vector storage, and LLM configurations; ran RAGAS-based evaluation of retrieval relevance, response quality, and grounding",
    "Partnered with senior team members on technical trade-offs and solution validation",
  ],
};

export const PROJECTS: Project[] = [
  {
    title: "YouTube Comment Sentiment Analysis",
    period: "Dec 2025 – Mar 2026",
    description:
      "Multi-class NLP pipeline on 36,000+ YouTube comments. TF-IDF trigram features with a tuned LightGBM classifier achieving 83% accuracy and 0.83 weighted F1 across multiple sentiment classes. Handled class imbalance with SMOTE + RandomUnderSampler, tracked 7+ experiments in MLflow, and deployed inference on AWS EC2 with S3-versioned artifacts connected to a companion Chrome extension for real-time analysis.",
    tech: ["Python", "Pandas", "Scikit-learn", "TF-IDF", "LightGBM", "MLflow", "AWS EC2", "AWS S3"],
    metrics: {
      Accuracy: "83%",
      "F1 Score": "0.83",
      "Comments Analyzed": "36K+",
      "MLflow Experiments": "7+",
    },
    links: {
      github: "https://github.com/rohitbedse/yt-comment-sentiment-analysis",
    },
    featured: true,
  },
  {
    title: "Multi-Agent Research System",
    period: "Mar 2026 – Apr 2026",
    description:
      "Four-agent workflow (Search, Reader, Writer, Critic) built in LangGraph with stateful orchestration and an iterative critique-and-refinement loop. Combined web search with HTML extraction to produce citation-backed research reports via a Streamlit interface.",
    tech: ["Python", "LangGraph", "LangChain", "Tavily", "BeautifulSoup", "Streamlit"],
    links: {
      // GitHub repo URL needed — not found in existing codebase
    },
    featured: false,
  },
  {
    title: "Chat with PDF — Intelligent Document Q&A",
    period: "May 2025 – Jun 2025",
    description:
      "RAG pipeline with chunking, embeddings, FAISS semantic search, and Gemini-grounded responses. Ingestion, indexing, retrieval, and QA workflows via LangChain. FastAPI endpoints for upload, index, and query operations with a Streamlit front end. Validated on PDFs up to 365 pages.",
    tech: ["Python", "LangChain", "FAISS", "FastAPI", "Gemini", "Streamlit"],
    links: {
      // GitHub repo URL needed — not found in existing codebase
    },
    featured: false,
  },
];

export const COMPETENCIES: CompetencyGroup[] = [
  {
    group: "Languages",
    skills: ["Python", "SQL"],
    evidence: "Core stack across all projects and the VigyanShaala internship.",
  },
  {
    group: "Machine Learning",
    skills: [
      "Scikit-learn", "LightGBM", "XGBoost", "Regression", "Classification",
      "Feature Engineering", "Data Preprocessing", "Cross-Validation",
      "Hyperparameter Tuning", "Model Evaluation", "Imbalanced Learning",
    ],
    evidence:
      "LightGBM tuned for 83% accuracy / 0.83 F1 on 36K+ comments. SMOTE + RandomUnderSampler for class imbalance. 7+ tracked experiments in MLflow.",
  },
  {
    group: "Data Science",
    skills: ["Pandas", "NumPy", "EDA", "Statistical Analysis", "Data Cleaning", "Data Validation"],
    evidence:
      "Preprocessed 36K+ YouTube comments (emoji handling, spam detection, TF-IDF trigrams). Assessed data quality at VigyanShaala across completeness, consistency, and freshness.",
  },
  {
    group: "NLP & GenAI",
    skills: [
      "NLP", "TF-IDF", "BERT", "Sentence Transformers", "LLMs", "RAG",
      "LangChain", "LangGraph", "Prompt Engineering", "RAG Evaluation",
    ],
    evidence:
      "Built RAG pipeline with FAISS + Gemini validated on 365-page PDFs. Researched RAG architectures and ran RAGAS-based evaluation at VigyanShaala. Four-agent LangGraph research system with iterative critique loop.",
  },
  {
    group: "AI Engineering",
    skills: [
      "Multi-Agent Systems", "Retrieval Pipelines", "Embeddings",
      "Semantic Search", "Vector Databases", "AI Application Development",
    ],
    evidence:
      "Four-agent LangGraph workflow (Search → Reader → Writer → Critic). FAISS vector search in Chat with PDF. Graph-based entity mapping research at VigyanShaala.",
  },
  {
    group: "Backend & Frameworks",
    skills: ["FastAPI", "Flask", "Streamlit"],
    evidence:
      "FastAPI endpoints (upload, index, query) for Chat with PDF. Streamlit front ends for multi-agent research and document Q&A.",
  },
  {
    group: "Databases & Vector Stores",
    skills: ["PostgreSQL", "FAISS", "ChromaDB", "Pinecone"],
    evidence:
      "Designed PostgreSQL schemas across 4 data sections at VigyanShaala. FAISS semantic search in Chat with PDF.",
  },
  {
    group: "MLOps & Cloud",
    skills: ["MLflow", "DVC", "Docker", "Git", "GitHub", "AWS (EC2, S3, IAM)"],
    evidence:
      "7+ MLflow experiments for sentiment analysis. AWS EC2 deployment with S3-versioned model artifacts. DVC for data version control.",
  },
];

export const JOURNEY: JourneyStep[] = [
  {
    stage: "Foundation",
    title: "Computer Science Education",
    milestone: "B.Tech CSE — S.S.V.P.S. B.S. Deore College of Engineering",
    description:
      "Built a core in CS fundamentals, algorithms, and software engineering. Started exploring data science and Python-based analysis.",
    period: "Nov 2022 – Jun 2026",
  },
  {
    stage: "ML Deep Dive",
    title: "YouTube Sentiment Classifier",
    milestone: "83% accuracy on 36K+ comments with LightGBM",
    description:
      "First end-to-end ML project: NLP pipeline with TF-IDF feature engineering, class imbalance handling, and systematic experiment tracking.",
    period: "Dec 2025 – Mar 2026",
  },
  {
    stage: "Model Mastery",
    title: "MLflow & AWS Deployment",
    milestone: "Production inference on EC2 with S3-versioned artifacts",
    description:
      "Graduated from notebooks to production: experiment tracking with MLflow, cloud deployment on AWS, and a Chrome extension consuming the deployed model.",
    period: "Mar 2026",
  },
  {
    stage: "GenAI Era",
    title: "LangGraph, RAG & Multi-Agent Systems",
    milestone: "VigyanShaala Internship + LangGraph Research System",
    description:
      "Building multi-agent AI workflows, RAG pipelines, and evaluating retrieval systems at scale. Researching vector storage, embedding models, and LLM configurations at VigyanShaala.",
    period: "Mar 2026 – Present",
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    year: "2026",
  },
  {
    title: "Machine Learning & Deep Learning",
    issuer: "IBM",
    year: "2026",
  },
  {
    title: "Introduction to Generative AI",
    issuer: "AWS Educate",
    year: "2026",
  },
  {
    title: "GenAI Buildathon",
    issuer: "NxtWave",
    year: "2025",
  },
];
