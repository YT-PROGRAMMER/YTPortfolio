import { useState } from "react";
import img1 from "../assets/image/1.png";
import img2 from "../assets/image/2.png";
import img3 from "../assets/image/3.png";
import img4 from "../assets/image/4.png";
import img5 from "../assets/image/5.png";
import img6 from "../assets/image/6.png";
import img7 from "../assets/image/libarary.png";
import img8 from "../assets/image/QR.png";
import img9 from "../assets/image/password.png";
import img10 from "../assets/image/8.png";
import img11 from "../assets/image/9.png";
import img12 from "../assets/image/10.png";
import img13 from "../assets/image/libarary.png";
import img14 from "../assets/image/react.png";
const projects = [
  {
    title: "kasper",
    type: "html&css",
    url: "https://yt-programmer.github.io/template-two/",
    img: img1,
  },
  {
    title: "leon",
    type: "html&css",
    url: "https://yt-programmer.github.io/template-one-/",
    img: img2,
  },
  {
    title: "portfolio",
    type: "html&css",
    url: "https://yt-programmer.github.io/MT_/",
    img: img3,
  },
  {
    title: "frontendMentor1",
    type: "html&css",
    url: "https://yt-programmer.github.io/fron-mentor-1-/",
    img: img4,
  },
  {
    title: "frontendMentor2",
    type: "html&css",
    url: "https://yt-programmer.github.io/front-mentor-3/",
    img: img5,
  },
  {
    title: "frontendMentor3",
    type: "html&css",
    url: "https://yt-programmer.github.io/frontend-mentor-2/",
    img: img6,
  },

  {
    title: "library",
    type: "js",
    url: "https://yt-programmer.github.io/library-/library.html",
    img: img7,
  },
  {
    title: "QrCode",
    type: "js",
    url: "https://yt-programmer.github.io/Qr-Code-/",
    img: img8,
  },
  {
    title: "generatedPassword",
    type: "js",
    url: "https://yt-programmer.github.io/generated-password/",
    img: img9,
  },
  {
    title: "chatBot",
    type: "js",
    url: "https://yt-programmer.github.io/chat-bot/",
    img: img10,
  },
  {
    title: "jannahPath",
    type: "js",
    url: "https://jannahpath.ct.ws/",
    img: img11,
  },
  {
    title: "cruds",
    type: "js",
    url: "https://yt-programmer.github.io/cruds/",
    img: img12,
  },

  {
    title: "library",
    type: "bootstrap",
    url: "https://yt-programmer.github.io/library-/library.html",
    img: img13,
  },

  {
    title: "shoppingCart",
    type: "react",
    url: "https://r-five-xi.vercel.app/",
    img: img14,
  },
];
const Projects = () => {
  const [Projects, setProjects] = useState(projects);
  const filtera = (filtring) => {
    const html_css = projects.filter((item) => item.type === "html&css");
    const js = projects.filter((item) => item.type === "js");
    const bootstrap = projects.filter((item) => item.type === "bootstrap");
    const react = projects.filter((item) => item.type === "react");
    switch (filtring) {
      case "all":
        setProjects(projects);
        break;
      case "html&css":
        setProjects(html_css);
        break;
      case "js":
        setProjects(js);
        break;
      case "bootstrap":
        setProjects(bootstrap);
        break;
      case "react":
        setProjects(react);
        break;
      default:
        setProjects(projects);
    }
  };
  const lis = document.querySelectorAll(".projects ul li");
  lis.forEach((ele) => {
    ele.addEventListener("click", () => {
      lis.forEach((e) => {
        e.classList.remove("active");
      });

      this.classList.add("active");
    });
  });
  return (
    <div className="projects">
      <div className="container">
        <div className="head">
          <h1>
            My Recent <span>Works</span>
          </h1>
          <ul>
            <li className="active">
              <button onClick={() => filtera("all")}>All</button>
            </li>
            <li>
              <button onClick={() => filtera("html&css")}>Html & Css</button>
            </li>
            <li>
              <button onClick={() => filtera("js")}>JavaScript</button>
            </li>
            <li>
              <button onClick={() => filtera("bootstrap")}>Bootstrap</button>
            </li>
            <li>
              <button onClick={() => filtera("react")}>React</button>
            </li>
          </ul>
        </div>
        <div className="cards">
          {Projects.map((i, id) => {
            return (
              <div key={id}>
                <div className="front">
                  <img src={i.img} />
                </div>
                <div className="back">
                  <h1>{i.title}</h1>
                  <a href={i.url}>
                    <i className="fa-solid fa-link"></i>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
