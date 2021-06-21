import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: ["React JS", "Spring Boot", "Node JS"],
    });
  });
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="image-container">
          <img src="/assets/man.png" alt="man" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Mohit Tyagi</h1>
          <h3>
            Full Stack Developer <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="/assets/down.png" alt="down" />
        </a>
      </div>
    </div>
  );
}
