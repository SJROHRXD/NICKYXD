import Typewriter from "./AnimatedText";

const typeWriter = new Typewriter(
  document.querySelector("#bitch") as HTMLDivElement,
  {
    loop: true,
    typingSpeed: 10,
    deletingSpeed: 10,
  }
);

typeWriter
  .typeString("Network Engineer")
  .pauseFor(1000)
  .typeString("\n\nHardware Engineer")
  .deleteChars(7)
  .typeString("Deskside Support")
  .pauseFor(150)
  .deleteAll(10)
  .typeString("Mobile Device Support")
  .pauseFor(1000)
  .typeString("\n\nConfigurations and Installations")
  .pauseFor(1000)
  .typeString("\n\nManager")
  .pauseFor(1000)
  .deleteAll(10)
  .start();

export { typeWriter };
