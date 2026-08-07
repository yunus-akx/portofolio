import React from 'react'

export default function App() {
  return (
    <div className="app">
      <nav className="nav">
        <div className="logo">AL RIZQY</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header className="hero">
        <h1>PORTOFOLIO</h1>
        <p>Al Rizqy Muhammad Yunus</p>
        <div className="hero-images">
          <img src="/photo.jpeg" alt="photo" />
        </div>
      </header>

      <section id="work" className="grid">
        <h2>Projects</h2>
        <div className="cards">
          <img src="/prapkl.jpeg" alt="project" />
          <img src="/prapkl1.jpeg" alt="project" />
          <img src="/\"portofolio dtp.jpeg\"" alt="project" />
        </div>
      </section>

      <footer className="footer">© {new Date().getFullYear()} Al Rizqy</footer>
    </div>
  )
}
