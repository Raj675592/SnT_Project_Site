import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

const clubsData = [
  {
    name: "Robotics Club",
    description: "Build autonomous robots and explore the fascinating world of robotics and automation.",
    icon: "🤖",
    projectCount: 8,
    id: "robotics"
  },
  {
    name: "Programming Club",
    description: "Master programming languages and develop software solutions for real-world problems.",
    icon: "💻",
    projectCount: 12,
    id: "programming"
  },
  {
    name: "BCS Club",
    description: "Dive into theoretical computer science, algorithms, and computational complexity.",
    icon: "🧮",
    projectCount: 6,
    id: "bcs"
  },
  {
    name: "Electronics Club",
    description: "Design circuits, work with microcontrollers, and create innovative electronic systems.",
    icon: "⚡",
    projectCount: 10,
    id: "electronics"
  },
  {
    name: "Aero Club",
    description: "Explore aerospace engineering through UAV design and aerodynamics research.",
    icon: "✈️",
    projectCount: 5,
    id: "aero"
  },
  {
    name: "Web Development",
    description: "Create modern web applications using cutting-edge frameworks and technologies.",
    icon: "🌐",
    projectCount: 9,
    id: "web"
  }
];

const projectsData = [
  {
    title: "Autonomous Drone Navigation",
    club: "Robotics Club",
    description: "Develop an AI-powered drone that can navigate through obstacles using computer vision and machine learning algorithms.",
    duration: "8 weeks",
    difficulty: "advanced",
    tags: ["Python", "OpenCV", "Machine Learning", "ROS"],
    mentor: "Dr. Rajesh Kumar"
  },
  {
    title: "E-commerce Platform",
    club: "Programming Club",
    description: "Build a full-stack e-commerce platform with payment integration, user authentication, and inventory management.",
    duration: "10 weeks",
    difficulty: "intermediate",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    mentor: "Prof. Anita Sharma"
  },
  {
    title: "Quantum Computing Simulator",
    club: "BCS Club",
    description: "Create a quantum computing simulator to understand quantum algorithms and their applications.",
    duration: "12 weeks",
    difficulty: "advanced",
    tags: ["Python", "Quantum Computing", "Linear Algebra", "Qiskit"],
    mentor: "Dr. Vikram Singh"
  },
  {
    title: "IoT Home Automation",
    club: "Electronics Club",
    description: "Design and implement a smart home system using IoT devices and mobile app control.",
    duration: "6 weeks",
    difficulty: "beginner",
    tags: ["Arduino", "IoT", "Mobile App", "Sensors"],
    mentor: "Prof. Priya Gupta"
  },
  {
    title: "Weather Prediction System",
    club: "Aero Club",
    description: "Develop a machine learning model to predict weather patterns using atmospheric data.",
    duration: "8 weeks",
    difficulty: "intermediate",
    tags: ["Python", "Machine Learning", "Data Analysis", "Meteorology"],
    mentor: "Dr. Suresh Patel"
  },
  {
    title: "Social Media Analytics",
    club: "Web Development",
    description: "Create a web application that analyzes social media trends and user behavior patterns.",
    duration: "9 weeks",
    difficulty: "intermediate",
    tags: ["React", "Python", "Data Visualization", "APIs"],
    mentor: "Prof. Kavya Reddy"
  }
];

function App() {
  const [search, setSearch] = useState("");
  const [club, setClub] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true, offset: 100 });
  }, []);

  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = [project.title, project.description, project.club, ...project.tags]
      .join(" ").toLowerCase().includes(search.toLowerCase());
    const matchesClub = !club || getClubIdByName(project.club) === club;
    const matchesDifficulty = !difficulty || project.difficulty === difficulty;
    return matchesSearch && matchesClub && matchesDifficulty;
  });

  function getClubIdByName(name) {
    const c = clubsData.find(c => c.name === name);
    return c ? c.id : '';
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <>
      <header>
        <nav className="container">
          <a href="#" className="logo">SnT Summer Projects</a>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#clubs">Clubs</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
          </ul>
          <div className="auth-buttons">
            <button className="btn btn-outline" onClick={() => setShowModal(true)}>Login</button>
            <a href="#" className="btn btn-primary">Get Started</a>
          </div>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <h1>Summer Projects @ IIT Kanpur</h1>
            <p className="hero-subtitle">Explore, Learn, Contribute</p>
            <p className="hero-description">
              Discover exciting summer projects from all Science and Technology Council clubs.
            </p>
            <div className="hero-buttons">
              <a href="#clubs" className="btn btn-primary">Explore Projects</a>
              <a href="#" className="btn btn-outline">Become a Mentor</a>
            </div>
          </div>
        </div>
      </section>

      <section className="search-section">
        <div className="container">
          <div className="search-container" data-aos="fade-up">
            <input type="text" className="search-input" placeholder="Search projects..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <select className="filter-dropdown" value={club} onChange={(e) => setClub(e.target.value)}>
              <option value="">All Clubs</option>
              {clubsData.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
            <select className="filter-dropdown" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
              <option value="">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid" data-aos="fade-up">
            <div className="stat-card"><span className="stat-number">50+</span><span className="stat-label">Active Projects</span></div>
            <div className="stat-card"><span className="stat-number">12</span><span className="stat-label">SnT Clubs</span></div>
            <div className="stat-card"><span className="stat-number">200+</span><span className="stat-label">Students Enrolled</span></div>
            <div className="stat-card"><span className="stat-number">30+</span><span className="stat-label">Expert Mentors</span></div>
          </div>
        </div>
      </section>

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
                  <span className={`project-difficulty difficulty-${project.difficulty}`}>{capitalize(project.difficulty)}</span>
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

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>About SnT Council</h3>
              <p>The Science and Technology Council at IIT Kanpur promotes technical excellence through various clubs and innovative projects.</p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <a href="#">Home</a>
              <a href="#">Clubs</a>
              <a href="#">Projects</a>
              <a href="#">Contact</a>
            </div>
            <div className="footer-section">
              <h3>Contact</h3>
              <p>IIT Kanpur, Kalyanpur</p>
              <p>Kanpur, UP 208016</p>
              <p>snt@iitk.ac.in</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Science and Technology Council, IIT Kanpur. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <h2>Login to SnT Portal</h2>
            <form onSubmit={(e) => { e.preventDefault(); setShowModal(false); alert('Login functionality not implemented.'); }}>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email:</label>
                <input type="email" id="email" name="email" required
                  style={{ width: '100%', padding: '0.75rem', border: '2px solid #e0e0e0', borderRadius: '10px', outline: 'none' }}
                  placeholder="your.email@iitk.ac.in" />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Password:</label>
                <input type="password" id="password" name="password" required
                  style={{ width: '100%', padding: '0.75rem', border: '2px solid #e0e0e0', borderRadius: '10px', outline: 'none' }}
                  placeholder="Enter your password" />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="role" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Role:</label>
                <select id="role" name="role" required
                  style={{ width: '100%', padding: '0.75rem', border: '2px solid #e0e0e0', borderRadius: '10px', outline: 'none' }}>
                  <option value="">Select Role</option>
                  <option value="student">Student</option>
                  <option value="mentor">Mentor</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem' }}>Login</button>
              <p style={{ textAlign: 'center', color: '#666' }}>
                Don't have an account? <a href="#" style={{ color: '#667eea', textDecoration: 'none' }}>Register here</a>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
