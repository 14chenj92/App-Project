import React from "react";
import '../../styles/Profile.css';
import { Card, Avatar } from 'antd';

function Reviews(props) {
    return (
      <Card className="reviewsDetail">
        <Avatar style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }} size="large" gap={1}>
        {props.user}
      </Avatar>
          <div className="reviewsName">{props.name}</div>
          <div className="reviewsDescription">{props.desc}</div>
      </Card>
    );
  }
  
  export default Reviews;