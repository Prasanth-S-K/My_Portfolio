import "./index.css";

function Skills() {
  const skills = [
    {
      src: "https://res.cloudinary.com/dtfndvjsg/image/upload/v1759064817/html5-logo-icon-3d-hd-png-701751694706448mhzoib8wwh_1_ucfd34.png",
      alt: "HTML5",
    },
    {
      src: "https://res.cloudinary.com/dtfndvjsg/image/upload/v1759064816/2716dfa933fe4d76af6856a1b50ee2a9_awstdw.jpg",
      alt: "CSS3",
    },
    {
      src: "https://res.cloudinary.com/dtfndvjsg/image/upload/v1759064815/171-1718046_javascript-programming-language-logo-hd-png-download_yzwehg.jpg",
      alt: "JavaScript",
    },
    {
      src: "https://res.cloudinary.com/dtfndvjsg/image/upload/v1759064815/0_dkRx02Vvkn2tNQRB_wpbbnr.jpg",
      alt: "Bootstrap",
    },
    {
      src: "https://res.cloudinary.com/dtfndvjsg/image/upload/v1759064815/5602757_m2dhai.webp",
      alt: "Python",
    },
    {
      src: "https://res.cloudinary.com/dtfndvjsg/image/upload/v1759064816/desktop-wallpaper-mysql-logo-logo-brands-for-3d_bwexxz.jpg",
      alt: "MySQL",
    },
    {
      src: "https://res.cloudinary.com/dtfndvjsg/image/upload/v1759064816/Nodejs_bpqfpl.jpg",
      alt: "Node.js",
    },
    {
      src: "https://res.cloudinary.com/dtfndvjsg/image/upload/v1759064817/free-react-3d-icon-png-download-7578010_kah6nu.webp",
      alt: "React",
    },
  ];

  return (
    <div id="skills" className="skills">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        <ul>
          {skills.map((skill, i) => (
            <li key={i} className="skill-card">
              <div className="skill-icon">
                <img className="skills-image" src={skill.src} alt={skill.alt} />
              </div>
              <p className="skills-alt">{skill.alt}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
