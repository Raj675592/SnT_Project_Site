import React from 'react';

const ClubsSection = ({ clubsData, setClub }) => {
  return (
    <section className="clubs-section" id="clubs">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Our Clubs</h2>
        <div className="clubs-grid">
          {clubsData.map((clubData, idx) => (
            <div className="club-card" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}
              onClick={() => setClub(clubData.id)}>
              <div className="club-icon">{clubData.icon}</div>
              <h3 className="club-name">{clubData.name}</h3>
              <p className="club-description">{clubData.description}</p>
              <span className="project-count">{clubData.projectCount} Projects</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubsSection;
