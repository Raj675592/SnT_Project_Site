import React from 'react';

const FeaturedProjects = ({ filteredProjects }) => {
  return (
    <section className="featured-section" id="projects">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Featured Projects</h2>
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <div className="project-card" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="project-header">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-club">{project.club}</span>
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-meta">
                <span className="project-duration">{project.duration}</span>
                <span className={`project-difficulty difficulty-${project.difficulty}`}>{project.difficulty.charAt(0).toUpperCase() + project.difficulty.slice(1)}</span>
              </div>
              <div className="project-tags">
                {project.tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
              </div>
              <div style={{ color: '#666', fontSize: '0.95rem' }}>Mentor: <b>{project.mentor}</b></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
