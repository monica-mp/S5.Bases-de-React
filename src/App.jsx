import Card from "./Card.jsx";
import { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";


import image1 from "./assets/time_managment.svg";
import image2 from "./assets/programming.svg";
import image3 from "./assets/meditation.svg";

export function App() {
  const tutorialData = [
    {
      title: "Dedica moltes hores",
      description:
        "Un mínim de 30 hores. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.",
      bgColor: "#01A9DB",
      image: image1,
    },
    {
      title: "Programa projectes propis",
      description:
        "Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.",
      bgColor: "#BDBDBD",
      image: image2,
    },
    {
      title: "Procura descansar",
      description:
        "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
      bgColor: "#FF8000",
      image: image3,
    },
  ];

  const [step, setStep] = useState(0);
  const currentCardData = tutorialData[step];
 


  function nextStep() {
    if (step < tutorialData.length - 1) {
      setStep(step + 1);
    }
  }

  function prevStep() {
    if (step > 0) {
      setStep(step - 1);
    }
  }

  const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;
  const AppStyle = styled.div`
    background-color: #f2f2f2;
    height: 100vh;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <>
      <GlobalStyle />
      <AppStyle className="App">
        <Card currentCardData={currentCardData} nextStep={nextStep} prevStep={prevStep} currentStep={step} totalSteps={tutorialData.length}/>        
      </AppStyle>
    </>
  );
}
