import swiggy from "../assets/images/retrieval-system.png";
import youtube from "../assets/images/stability.png";
import flights from "../assets/images/Edu_Rohit.png";

const data = [
    {
        name: "Swiggy Delivery Time Prediction",
        type: "WebApp",
        url: "https://github.com/rohitbedse/Swiggy-Delivery-Time-Prediction",
        github: "https://github.com/rohitbedse/Swiggy-Delivery-Time-Prediction",
        image: swiggy,
        slug: "swiggy-delivery-time-prediction",
        description: "Achieved MAE: 3.29 min and R²: 0.80 predicting delivery times on 45K+ orders using Random Forest. Engineered 15+ features (Haversine distance, prep time, traffic patterns) with method-chaining pipelines. Fixed 8,515 hidden 'NaN' values; implemented Missing Indicators + KNN Imputation improving CV R² by 3.7%. Tracked experiments via MLflow, comparing 3 imputation strategies with full reproducibility.",
        tech: ['Python', 'SQL', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Streamlit', 'MLflow', 'Git', 'GitHub', 'Render', 'Regression', 'Classification', 'Decision Trees', 'Random Forest', 'Gradient Boosting', 'Neural Network Basics', 'Feature Engineering', 'Cross-validation', 'Hyperparameter Tuning', 'Model Evaluation (MAE, RMSE, R², Precision, Recall, F1)']
    },
    {
        name: "YouTube Sentiment Analysis",
        type: "WebApp",
        url: "https://github.com/rohitbedse/yt-comment-sentiment-analysis",
        github: "https://github.com/rohitbedse/yt-comment-sentiment-analysis",
        image: youtube,
        slug: "youtube-sentiment-analysis",
        description: "Built Chrome extension + backend NLP pipeline analyzing YouTube comments via YouTube Data API v3. Developed preprocessing pipeline handling emojis/spam with realistic sentiment distribution (not forced positivity). Evaluated models using Precision, Recall, and F1-score to optimize performance. Tracked experiments step-by-step in MLflow for reproducibility and comparison.",
        tech: ['Python', 'NLP', 'Text Cleaning', 'TF-IDF', 'BoW', 'N-grams', 'Basic NLP concepts', 'MLflow', 'Chrome Extension', 'YouTube Data API']
    },
    {
        name: "Flights Dashboard",
        type: "WebApp",
        url: "https://github.com/rohitbedse/Flights-Dashboard-using-Python-and-SQL",
        github: "https://github.com/rohitbedse/Flights-Dashboard-using-Python-and-SQL",
        image: flights,
        slug: "flights-dashboard",
        description: "Engineered Python + SQL ETL pipeline transforming raw flight data into normalized analytics schema. Built interactive dashboard visualizing route profitability and seasonal demand patterns. Automated data cleaning for fare analysis across multiple carriers and booking classes.",
        tech: ['Python', 'SQL', 'Pandas', 'ETL', 'Business Intelligence', 'Data Cleaning', 'Dashboard']
    }
];

export function getData(){
    return data;
}