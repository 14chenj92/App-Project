import React from "react";
import "../../styles/TrainerCard.css";
import { Card, Button } from "antd";

const pictureStyle = {
  width: "100px",
  height: "100px",
};

function TrainerCard(props) {
  return (
    <Card className="trainerCard">
      <div className="trainerCardImg">
        <img src={props.picture} alt="" style={pictureStyle} />
        <span>{props.name}</span>
        <span>Timezone: {props.timezone}</span>
      </div>
      <div className="trainerCardInfo">
        <span style={{marginBottom:"5%"}}>Language: {props.language}</span>
        <span>{props.desc}</span>
      </div>
      <div className="trainerCardPrice">
        <span style={{marginBottom:"10%"}}>${props.price} per Session</span>
        <Button>Learn More</Button>
      </div>
    </Card>
  );
}

export default TrainerCard;
