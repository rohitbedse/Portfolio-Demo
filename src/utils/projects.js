import ras from "../assets/images/ras.webp";
import joke from "../assets/images/joke.webp";
import lofi from "../assets/images/lofi.webp";
import blog from "../assets/images/blog.webp";
import docAid from "../assets/images/docAid.webp";
import LifeInsureEase from "../assets/images/Edu_Rohit.png";
import Portfolio from "../assets/images/portfolio.png"
import CartManagementSystem from "../assets/images/retrieval-system.png"
const data = [
    {
        name: "Intelligent information retrieval System",
        type: "WebApp",
        url: "https://mini-project-ugln.onrender.com/",
        github: "https://github.com/rohitbedse/Mini-Project.git",
        image: CartManagementSystem,
        slug: "Information-retrieval-system",
        description: "#",
        tech: ['Python', 'Streamlit', 'FIASS', 'Langchain', 'Miniconda', 'Render']
        
    },
    {
        name: "E-learnig Platform",
        type: "Website",
        url: "https://edu-rohit.vercel.app/",
        github: "https://github.com/rohitbedse/Edu_Rohit.git",
        image: LifeInsureEase,
        slug: "E-Leaning-Platform",
        description: "#",
        tech: ['Html', 'CSS', 'javascript', 'tailwaind', 'git', 'project-setup']

    },
    {
        name: "Portfolio Website",
        type: "Website",
        url: "https://portfolio-demo-seven-lyart.vercel.app/",
        github: "https://github.com/rohitbedse/Portfolio-Demo.git",
        image: Portfolio,
        slug: "portfolio",
        description: "This is my Portfolio website made using Astro, Reactjs and Tailwind css. ",
        tech: ['HTML', 'Javascript', 'Css', 'Tailwind css', 'Astro', 'Reactjs']
    },
    {
        name: "DocAid",
        type: "Website",
        url: "#",
        github: '#',
        image: docAid,
        slug: "docaid",
        description: "Website template for Health related businesses",
        tech: ['HTML', 'Javascript', 'CSS', 'Tailwind css', 'ReactJS']
    },
    {
        name: "DevBlogs",
        type: "WebApp",
        url: "#",
        github: "#",
        image: blog,
        slug: "devblogs",
        description: "This is a Blogging website made for technology lovers.",
        tech: ['HTML', 'Javascript', 'Css', 'Tailwind css', 'Astro', 'Markdown']
    },
    {
        name: "Ras Production",
        type: "Website",
        url: "#",
        github: "#",
        image: ras,
        slug: "ras",
        description: "This is an Portfolio website for videography businesses made using HTML, Javascript, Css and Tailwind css it practices modern ui with dark theme ",
        tech: ['HTML', 'Javascript', 'Css', 'Tailwind css']
    },
    {
        name: "Joke Generator",
        type: "WebApp",
        url: "https://jokes-generator-with-api.vercel.app/",
        github: "https://github.com/DevRohit06/Jokes-Generator-With-API",
        image: joke,
        slug: "joke",
        description: "The website which generates joke with multi topics such as anime, programming, etc.",
        tech: ['React', 'Javascript', 'Css', 'Tailwind css', 'express', 'nodejs']
    },

]

export function getData(){
    return data;
}