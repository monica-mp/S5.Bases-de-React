import styled from "styled-components";
import Indicator from "./Indicator.jsx";

function Card({ currentCardData, nextStep, prevStep, currentStep, totalSteps }) {
  const CardContainer = styled.div`
    margin: 0;
    font-family: "Poppins", sans-serif;
    background-color: ${(props) => props.bgColor || "white"};
    width: 350px;
    height: 700px;
    box-shadow: 2px 2px 40px gray;
    border-radius: 30px;
  `;

  const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    width: 100%;
    height: 60%;
    img {
      width: 80%;
      height: 80%;
    }
  `;
  const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    height: 35%;
    position: relative;
    background-color: white;
    padding: 20px 25px;
    border-radius: 0 0 30px 30px;
  `;
  const CardTitle = styled.h1`
    font-size: 20px;
    font-weight: bold;
  `;
  const CardP = styled.p`
    font-size: 14px;
    height: 70px;
  `;

  const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 200px;
  `;

  const Button = styled.button`
    top: 0;
    right: 0;
    background-color: #2e2e2e;
    color: white;
    border-radius: 50%;
    padding: 20px;
    margin: 25px 5px;
    border: none;
    cursor: pointer;
  `;
  const Button1 = styled(Button)`
    background-color: white;
    color: #424242;
    border-radius: 50%;
    padding: 20px;
    margin: 25px 5px;
    border: 1px solid #424242;
    cursor: pointer;
  `;

 

  return (
    <CardContainer bgColor={currentCardData.bgColor}>
      <ImageContainer>
        <img src={currentCardData.image} />
      </ImageContainer>
      <CardBody>
        <CardTitle className="card-title">{currentCardData.title}</CardTitle>
        <CardP className="card-content">{currentCardData.description}</CardP>       
        <Buttons className="card-buttons">  
        <Indicator currentStep={currentStep} totalSteps={totalSteps} />        
          {currentStep === 0 && <Button onClick={nextStep}>⮕</Button>}
          {currentStep > 0 && currentStep < totalSteps - 1 && (
            <div>
              <Button1 onClick={prevStep}>⬅</Button1>
              <Button onClick={nextStep}>⮕</Button>
            </div>
          )}
          {currentStep === totalSteps - 1 && <Button1 onClick={prevStep}>←</Button1>}
        </Buttons>
      </CardBody>
    </CardContainer>
  );
}

export default Card;
