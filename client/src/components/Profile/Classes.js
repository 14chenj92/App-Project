import React from "react";
import '../../styles/Profile.css';
import SignUpModal from './ClassesModal.tsx';
import { Card } from 'antd';

function Classes(props) {
    return (
      <Card className="classesDetail">
          <div className="classesActivity">{props.activity} - {props.plan}
          <SignUpModal className="signup-link"></SignUpModal></div>
          <div className="classesDescription">{props.desc}</div>
      </Card>
    );
  }
  
  export default Classes;