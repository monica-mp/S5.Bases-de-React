import styled from "styled-components";

function Indicator({ totalSteps, currentStep, onDotClick }) {
  const IndicatorStyle = styled.div`
    display: flex;
    justify-content: center;
  `;

  const Dot = styled.div`
    width: ${(props) => (props.isActive ? "15px" : "10px")};
    height: ${(props) => (props.isActive ? "10px" : "10px")};
    border-radius: ${(props) => (props.isActive ? "40%" : "50%")};
    background-color: ${(props) => (props.isActive ? "#222" : "gray")};
    margin: 0 5px;
    cursor: pointer;
  `;

  return (
    <IndicatorStyle>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <Dot
          key={index}
          isActive={index === currentStep}
          onClick={() => onDotClick(index)}
        />
      ))}
    </IndicatorStyle>
  );
}

export default Indicator;
