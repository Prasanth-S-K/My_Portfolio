import "./index.css";
import Typewriter from "./Typewriter";
function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Hello, I’m Prasanth 👋</h1>
        <h2>Turning ideas into elegant, functional web apps</h2>
        <Typewriter />
        <p>Welcome to my portfolio website!</p>
      </div>
      <div className="profile-container">
        <img
          src="https://res.cloudinary.com/dtfndvjsg/image/upload/v1759854695/Prasanth_b7v0rr.png"
          className="profile-photo"
        />
      </div>
    </section>
  );
}

export default Home;
