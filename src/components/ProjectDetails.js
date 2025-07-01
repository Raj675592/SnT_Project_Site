import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projectsData } from '../data';
import Query from './Query'; 
import Footer from './Footer';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const {title} = useParams();
  const navigate = useNavigate();
  const decodedTitle = decodeURIComponent(title);
  const project = projectsData.find(
    p => p.title === decodedTitle
  );
  if (!project) return <div className="not-found">Project not found.</div>;

  return (
    <>
    <div className="pro-bg">
      <div className="pro-main-card">
        <div className="pro-cover-meta-row">
          <div className="pro-cover-img-wrap">
            <img className="pro-cover-img" src={project.coverImage} alt={project.title} />
             
          </div>
          <div className="pro-meta-block">
           
            <h1 className="pro-title-main">{project.title}</h1>
            <div className="pro-meta-row">
              <span className="pro-meta-club">{project.club}</span>
              <span className="pro-meta-mentor">Mentor: {project.mentor}</span>
              <span className="pro-meta-difficulty">{project.difficulty}</span>
              <span className="pro-meta-duration">{project.duration}</span>
            </div>
            <div className="pro-meta-tags">
              {project.tags && project.tags.map(tag => <span key={tag} className="pro-tag">{tag}</span>)}
            </div>
          </div>
        </div>
        <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
        <div className="pro-section">
          <h2 className="pro-section-title">Roadmap to {project.title} <span role="img" aria-label="roadmap">🗺️</span></h2>
          <p className="pro-desc-main">{project.description}</p>
        </div>
        {project.objectives && (
          <div className="pro-section">
            <h3 className="pro-section-title">Objectives <span role="img" aria-label="target">🎯</span></h3>
            <ul className="pro-list">
              {project.objectives.map((obj, i) => <li key={i}>{obj}</li>)}
            </ul>
          </div>
        )}
        {project.methodology && (
          <div className="pro-section">
            <h3 className="pro-section-title">Methodology <span role="img" aria-label="method">🧪</span></h3>
            <p>{project.methodology}</p>
          </div>
        )}
        {project.weekwiseExecution && (
          <div className="pro-section">
            <h3 className="pro-section-title">Weekwise Execution <span role="img" aria-label="calendar">📅</span></h3>
            <div className="weekwise-container">
              {project.weekwiseExecution.map((week, i) => (
                <div className="week-block" key={i}>
                  <h4 className="week-title">{week.week}</h4>
                  <p className="week-plan">{week.plan}</p>
                  <ul className="week-resources">
                    {week.resources.map((res, j) => (
                      <li key={j}><a href={res} target="_blank" rel="noopener noreferrer">{res}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {project.result && (
          <div className="pro-section">
            <h3 className="pro-section-title">Result <span role="img" aria-label="result">🏁</span></h3>
            <p>{project.result.summary}</p>
            {project.result.githubRepo && <a href={project.result.githubRepo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>}
            {project.result.demoLink && <div><a href={project.result.demoLink} target="_blank" rel="noopener noreferrer">Demo Video</a></div>}
            {project.result.images && project.result.images.map((img, i) => (
              <img key={i} src={img} alt={`result-${i}`} className="pro-result-img" />
            ))}
          </div>
        )}
        {project.futureProspects && (
          <div className="pro-section">
            <h3 className="pro-section-title">Future Prospects <span role="img" aria-label="future">🔮</span></h3>
            <p>{project.futureProspects}</p>
          </div>
        )}
       
       <div className="pro-section">
          <Query />
        </div>
        
      </div>
      
    </div>
    <Footer/>
    </>
    
     
  );
};

export default ProjectDetails;