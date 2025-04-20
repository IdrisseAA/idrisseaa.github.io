import project1 from '../images/projects/project1.jpg';
import project2 from '../images/projects/project2.jpg';
import project3 from '../images/projects/project3.jpg';
import project4 from '../images/projects/project4.jpg';
import project5 from '../images/projects/project5.jpg';

const projects = [
    {
        projectNumber: 1,
        name: "Automated Sentiment Analysis on Twitter",
        image: project1,
        description:
            "A real-time NLP pipeline analyzing Twitter sentiment for football matches (e.g., Liverpool FC vs. Manchester United), with generative AI summaries and interactive Streamlit dashboards.",
        technologies: [
            "Python",
            "Hugging Face",
            "Streamlit",
            "Twitter API",
            "NLP",
            "Generative AI",
        ],
        link: "https://github.com/idrisseaa/sentiment-analysis",
        category: "NLP",
        date: "March 2025",
    },
    {
        projectNumber: 2,
        name: "Predictive Maintenance Model",
        image: project2,
        description:
            "A machine learning model for Thales to predict equipment failures using time-series data, built with scikit-learn and deployed as a REST API for real-time monitoring.",
        technologies: [
            "Python",
            "scikit-learn",
            "Pandas",
            "Flask",
            "Time-Series Analysis",
        ],
        link: "https://github.com/idrisseaa/predictive-maintenance",
        category: "Automation",
        date: "December 2024",
    },
    {
        projectNumber: 3,
        name: "Customer Support Chatbot",
        image: project3,
        description:
            "An NLP-powered chatbot using Hugging Face transformers to automate customer support queries, integrated with a Flask backend and deployed on AWS.",
        technologies: ["Python", "Hugging Face", "Flask", "AWS", "NLP"],
        link: "https://github.com/idrisseaa/customer-support-chatbot",
        category: "NLP",
        date: "January 2025",
    },
    {
        projectNumber: 4,
        name: "Image-Based Defect Detection",
        image: project4,
        description:
            "A computer vision system to detect manufacturing defects in real-time using convolutional neural networks, trained on TensorFlow and optimized for edge devices.",
        technologies: [
            "Python",
            "TensorFlow",
            "OpenCV",
            "Computer Vision",
            "Edge Computing",
        ],
        link: "https://github.com/idrisseaa/defect-detection",
        category: "Computer Vision",
        date: "October 2024",
    },
    {
        projectNumber: 5,
        name: "Personalized Recommendation System",
        image: project5,
        description:
            "A recommendation engine for e-commerce, leveraging collaborative filtering and deep learning to suggest products, built with PyTorch and deployed via FastAPI.",
        technologies: [
            "Python",
            "PyTorch",
            "FastAPI",
            "Pandas",
            "Recommendation Systems",
        ],
        link: "https://github.com/idrisseaa/recommendation-system",
        category: "Machine Learning",
        date: "August 2024",
    },
    {
        projectNumber: 6,
        name: "Automated Document Summarization",
        image: project2,
        description:
            "An NLP tool to generate concise summaries of long documents using transformer models, integrated with a Streamlit interface for user-friendly access.",
        technologies: ["Python", "Hugging Face", "Streamlit", "NLP", "Transformers"],
        link: "https://github.com/idrisseaa/document-summarization",
        category: "NLP",
        date: "February 2025",
    },
];

export default projects;