import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1 className="about-title">About Our Blog</h1>
      </header>

      <div className="about-content">
        <section className="about-section">
          <h2 className="about-section-title">Our Mission</h2>
          <p>
            Welcome to our blog! We are dedicated to providing high-quality content on various topics
            that matter to our readers. Our mission is to inform, educate, and entertain through
            well-researched articles and engaging stories.
          </p>
          <p>
            Founded in 2023, we strive to create a platform where ideas can be shared freely and
            discussions can flourish. We believe in the power of words to inspire change and foster
            understanding.
          </p>
        </section>

        <section className="about-section">
          <h2 className="about-section-title">Our Team</h2>
          <p>
            Our team consists of passionate writers, editors, and content creators who are experts
            in their respective fields. Together, we work to bring you the best content possible.
          </p>

          <div className="team-grid">
            <div className="team-member">
              <div className="team-member-name">Jane Doe</div>
              <div className="team-member-role">Founder & Editor-in-Chief</div>
            </div>
            <div className="team-member">
              <div className="team-member-name">John Smith</div>
              <div className="team-member-role">Senior Writer</div>
            </div>
            <div className="team-member">
              <div className="team-member-name">Emily Johnson</div>
              <div className="team-member-role">Content Strategist</div>
            </div>
            <div className="team-member">
              <div className="team-member-name">Michael Brown</div>
              <div className="team-member-role">Technical Writer</div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2 className="about-section-title">Contact Us</h2>
          <p>
            We'd love to hear from you! If you have any questions, suggestions, or feedback,
            please don't hesitate to reach out to us at <a href="mailto:contact@ourblog.com">contact@ourblog.com</a>.
          </p>
          <p>
            You can also follow us on social media to stay updated with our latest posts and announcements.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
