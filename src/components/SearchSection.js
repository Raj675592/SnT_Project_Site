import React from 'react';

const SearchSection = ({ search, setSearch, club, setClub, difficulty, setDifficulty }) => {
  return (
    <section className="search-section">
      <div className="container">
        <div className="search-container" data-aos="fade-up">
          <input type="text" className="search-input" placeholder="Search projects..." value={search} onChange={(e) => setSearch(e.target.value)} />
          <select className="filter-dropdown" value={club} onChange={(e) => setClub(e.target.value)}>
            <option value="">All Clubs</option>
            {/* You can map clubs here as you did in App.js */}
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
  );
};

export default SearchSection;
