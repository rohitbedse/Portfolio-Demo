export const PROFILE = {
  name: "Rohit Bedse",
  role: "ML & GenAI Engineer",
  bio: "Aspiring Data Scientist with a solid foundation in Python, SQL, and machine learning. Skilled in analyzing complex datasets, performing EDA, and deriving actionable insights to support business decisions. Strong analytical thinking, problem-solving, and eagerness to contribute in collaborative, data-driven environments.",
  contact: {
    email: "rbedse81@gmail.com",
    phone: "+91 8698533040",
    location: "Pune, Maharashtra",
    linkedin: "https://www.linkedin.com/in/rohit-bedse-086b86262",
  },
  journey: [
    {
      stage: "Foundation",
      title: "Computer Engineering Student",
      institution: "Ssvps, Dhule",
      description: "Building a strong core in computer science fundamentals, algorithms, and software engineering.",
      period: "Present",
    },
    {
      stage: "ML Deep Dive",
      title: "Data Science Enthusiast",
      institution: "CampusX",
      description: "Intensive focus on statistical analysis, predictive modeling, and the end-to-end ML lifecycle.",
      period: "Present",
    },
    {
      stage: "Model Mastery",
      title: "Predictive Modeling",
      institution: "Independent Research",
      description: "Specializing in Random Forests and Gradient Boosting for high-accuracy time-series and regression tasks.",
      period: "Ongoing",
    },
    {
      stage: "GenAI Era",
      title: "LLM & NLP Exploration",
      institution: "Self-driven",
      description: "Exploring Transformer architectures, sentiment analysis pipelines, and the integration of GenAI into real-world products.",
      period: "Current",
    },
  ],
  competencies: [
    {
      group: "Programming & Analysis",
      skills: ["Python", "SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      evidence: "Used in all core projects for EDA and feature engineering.",
    },
    {
      group: "Machine Learning",
      skills: ["Regression", "Classification", "Random Forest", "Gradient Boosting", "Feature Engineering", "Cross-validation", "Hyperparameter Tuning"],
      evidence: "Achieved 0.80 R² on Swiggy delivery prediction using optimized RF pipelines.",
    },
    {
      group: "NLP & GenAI",
      skills: ["Text Cleaning", "TF-IDF", "BoW", "N-grams", "Sentiment Analysis"],
      evidence: "Developed a production-ready NLP pipeline for YouTube comment analysis.",
    },
    {
      group: "Engineering & Tools",
      skills: ["Streamlit", "MLflow", "Git", "GitHub", "Render", "Jupyter", "VS Code", "Kaggle"],
      evidence: "Experiment tracking and deployment of 3+ full-stack ML applications.",
    },
  ],
  projects: [
    {
      title: "Swiggy Delivery Time Prediction",
      description: "Achieved MAE: 3.29 min and R²: 0.80 predicting delivery times on 45K+ orders using Random Forest. Engineered 15+ features (Haversine distance, prep time, traffic patterns) with method-chaining pipelines. Fixed 8,515 hidden 'NaN' values; implemented Missing Indicators + KNN Imputation improving CV R² by 3.7%. Tracked experiments via MLflow.",
      tech: ["Python", "Scikit-learn", "MLflow", "Streamlit", "Random Forest"],
      metrics: {
        mae: "3.29 min",
        r2: "0.80",
        data: "45K+ orders",
      },
      links: {
        github: "https://github.com/rohitbedse/Swiggy-Delivery-Time-Prediction",
        live: "https://github.com/rohitbedse/Swiggy-Delivery-Time-Prediction",
      },
      image: "/assets/images/retrieval-system.png",
      flagship: true,
    },
    {
      title: "YouTube Sentiment Analysis",
      description: "Built Chrome extension + backend NLP pipeline analyzing YouTube comments via YouTube Data API v3. Developed preprocessing pipeline handling emojis/spam with realistic sentiment distribution. Evaluated models using Precision, Recall, and F1-score. Tracked experiments step-by-step in MLflow.",
      tech: ["Python", "NLP", "YouTube API", "Chrome Extension", "MLflow"],
      links: {
        github: "https://github.com/rohitbedse/yt-comment-sentiment-analysis",
        live: "https://github.com/rohitbedse/yt-comment-sentiment-analysis",
      },
      image: "/assets/images/stability.png",
      flagship: true,
    },
    {
      title: "Flights Dashboard",
      description: "Engineered Python + SQL ETL pipeline transforming raw flight data into normalized analytics schema. Built interactive dashboard visualizing route profitability and seasonal demand patterns. Automated data cleaning for fare analysis across multiple carriers.",
      tech: ["Python", "SQL", "Pandas", "ETL", "BI"],
      links: {
        github: "https://github.com/rohitbedse/Flights-Dashboard-using-Python-and-SQL",
        live: "https://github.com/rohitbedse/Flights-Dashboard-using-Python-and-SQL",
      },
      image: "/assets/images/Edu_Rohit.png",
      flagship: false,
    },
  ],
};
