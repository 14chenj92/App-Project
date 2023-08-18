import React from "react";
import '../../styles/Homepage.css';
import { Card } from 'antd';

function TrainerCard(props) {
    return (
      <Card className="trainerCard">
          <div className="classesActivity">{props.name}</div>
          <div className="classesDescription">{props.desc}</div>
      </Card>
    );
  }
  
  export default TrainerCard;