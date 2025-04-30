import { FaLinkedin, FaGithub, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="main-content">
      <div className="about-container">
        <h1 className="about-title">My Dev Journey So Far...</h1>

        <div>
          <h2 className="education-intro">
            As of recent I have started doing mini Arduino projects to enhance my skills in robotics. Check it out on these social platforms!
          </h2>
          <div className="social-row">
            <a href="https://youtube.com/@thecodebim" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://instagram.com/thecodebim" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>

        <h2>Education</h2>

        <div className="education-section">
          <div className="education-item">
            <h2>BSc Computer Science</h2>
            <p>University of London</p>
            <ul>
              <li>
                <strong>1st Year:</strong>
                <ul>
                  <li>Discrete Mathematics</li>
                  <li>Computational Mathematics</li>
                  <li>Programming I & II</li>
                  <li>Algorithm Data Structures I</li>
                  <li>Fundamentals of Computer Science</li>
                  <li>Web Development</li>
                  <li>How Computers Work (RPL)</li>
                </ul>
              </li>
              <li>
                <strong>2nd Year:</strong>
                <ul>
                  <li>Object-Oriented Programming</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <h2>Certifications</h2>

        <div className="certification-section">
          <div className="education-item">
            <h2>Google IT Support Professional Certificate</h2>
            <ul>
              <li>Hardware & Troubleshooting</li>
              <li>Networking & Operating Systems</li>
              <li>System Administration & Security</li>
            </ul>
          </div>

          <div className="education-item">
            <h2>Meta Front End Developer Certificate</h2>
            <ul>
              <li>HTML, CSS, JavaScript, React.js</li>
              <li>Git, Responsive Design, Test Driven Dev</li>
              <li>Figma - UX/UI</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
