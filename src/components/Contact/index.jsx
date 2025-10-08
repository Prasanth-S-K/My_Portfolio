import "./index.css";

function Contact() {
  const email = "prasanthk12051999@gmail.com"; // 🔹 your email here
  const resumeLink = "/PRASANTH, K_Resume26925.pdf"; // 🔹 path to your resume (put it in public folder)

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>

      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/prasanth-kamalanathan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn"
            className="icon"
          />
        </a>

        <a
          href="https://leetcode.com/u/Prasanth_S_K/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/leetcode.svg"
            alt="LeetCode"
            className="icon"
          />
        </a>

        <a
          href="https://github.com/Prasanth-S-K"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            className="icon"
          />
        </a>
      </div>

      <div className="buttons">
        <a href={resumeLink} download className="btn resume-btn">
          Grab a Copy of My Resume
        </a>

        <button
          className="btn email-btn"
          onClick={() =>
            window.open(
              `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
              "_blank"
            )
          }
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
            alt="Email"
            className="icon-small"
          />{" "}
          Email Me
        </button>
      </div>
    </section>
  );
}

export default Contact;
