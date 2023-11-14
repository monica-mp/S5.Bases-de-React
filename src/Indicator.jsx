import styled from "styled-components";

function Indicator({ totalSteps, currentStep}) {
  const IndicatorStyle = styled.div`
    display: flex;
    justify-content: center;
   
  `;

  const Dot = styled.div`
    width:  ${(props) => props.isActive ? "15px" : "5px"};
    height: ${(props) => props.isActive ? "5px" : "5px"};
    border-radius: ${(props) => props.isActive ? "20%" :  "50%"};;
    background-color: ${(props) => props.isActive ? "#222" :  "gray"};
    margin: 0 5px;
    `;
  
  return (
    <IndicatorStyle>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <Dot key={index} isActive={index === currentStep} />
      ))}
      
    </IndicatorStyle>
  );
}

export default Indicator;
