import Card from "./Card.jsx";
import { useState } from "react";

import image1 from "./assets/time_managment.svg";
import image2 from "./assets/programming.svg";
import image3 from "./assets/meditation.svg";

export function App() {
  const tutorialData = [
    {
      title: "Dedica moltes hores",
      description:
        "Un mínim de 30 hores. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.",
      bgColor: "blue",
      image: image1,
    },
    {
      title: "Programa projectes propis",
      description:
        "Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.",
      bgColor: "gray",
      image: image2,
    },
    {
      title: "Procura descansar",
      description:
        "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
      bgColor: "yellow",
      image: image3,
    },
  ];

  const [step, setStep] = useState(0);
  const currentCardData = tutorialData[step];

  function nextStep() {
    setStep(prev => prev + 1);
  }
  return (
    <div className="App">
      <Card currentCardData={currentCardData} nextStep={nextStep}/>
    </div>
  );
}
