import React from 'react';
import "./Projects.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab } from 'react-bootstrap';
import ResumeButton from './ResumeButton/ResumeButton';

import IndeedScraper from "./../../assets/scrape-indeed-data.jpeg"
import StockPredictor from "./../../assets/stock-predictor.png";
import GarbageClassifier from "./../../assets/garbage-classifier.png";
import ProjectCard from "./ProjectCards/ProjectCard";      

function Projects() {
  return (
    <>
    <Tabs defaultActiveKey="data-science" id="tabs" className="mb-3">
        <Tab eventKey="data-science" title="Data Science-Analytics">
            <div className="container">
                <div className="row g-3">
                    <div className="col-12 cold-md-6 col-lg-4">
                        <ProjectCard
                            image={GarbageClassifier}
                            alt="homepage of the Garbage Classifier app"
                            title="GARBAGE CLASSIFIER"
                            text="tensorflow, react native"
                            url ="https://github.com/linhdinh0908/TORec"
                        />
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <ProjectCard
                            image ={StockPredictor}
                            alt="Stock Volatility Diagram"
                            title="STOCK PREDICTOR"
                            text="tech stack: machine learning sckilearn"
                            url="https://github.com/linhdinh0908/Stock-Price-Prediction-Model"
                        />
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <ProjectCard
                            image={IndeedScraper}
                            alt="Indeed Website Scraping Project"
                            title="INDEED WEB SCRAPER"
                            text="Scrape Indeed Review. Technology stack:  Python BeautifulSoup, Pandas, Matplotlib"
                            url="https://github.com/linhdinh0908/Indeed-Reviews-Sentiment-Analysis"
                        />
                    </div>
                </div>
            </div>
        </Tab>
        <Tab eventKey="front-end" title="Front End" className='"title"'>
            <ProjectCard
                alt = "what"
                title="YES"
                text="blah blah"
            />
        </Tab>
    </Tabs>
    <ResumeButton class="resume-button"/>
    </>
    
  )
}

export default Projects;
