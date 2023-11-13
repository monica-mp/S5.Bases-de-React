import styled from "styled-components";

function Card({ currentCardData, nextStep }) {
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
    margin: 0;
  `;

  const Button = styled.button`
    background-color: #2e2e2e;
    color: white;
    border-radius: 50%;
    padding: 20px;
    margin: 25px 15px;
    border: none;
    cursor: pointer;
    align-self: flex-end;
  `;

  return (
    <CardContainer bgColor={currentCardData.bgColor}>
      <ImageContainer>
        <img src={currentCardData.image} />
      </ImageContainer>
      <CardBody>
        <CardTitle className="card-title">{currentCardData.title}</CardTitle>
        <CardP className="card-content">{currentCardData.description}</CardP>
        <Button onClick={nextStep}>→</Button>
      </CardBody>
    </CardContainer>
  );
}

export default Card;
