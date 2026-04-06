import "../css/About.css";


const About = () => {
    return (
    <div className="about-container">
      <div className="about-card">
        <h1 className="about-title">About This Blog</h1>

        <p className="about-text">
          This platform is built to share knowledge across different domains like
          tech, health, and lifestyle. Our goal is to provide simple, useful,
          and practical content for everyday learning.
        </p>

        <div className="about-section">
          <h3>What You Can Do</h3>
          <ul>
            <li>Read high-quality blog posts</li>
            <li>Explore different categories</li>
            <li>Stay updated with new content</li>
          </ul>
        </div>

        <div className="about-section">
          <h3>Our Mission</h3>
          <p>
            To make learning easy, accessible, and engaging for everyone.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;