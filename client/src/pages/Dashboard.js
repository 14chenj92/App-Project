import React, { useState } from 'react';
import ImageSlider from '../components/Homepage/ImageSlider.tsx';
import HomeCard from '../components/Homepage/Card.js';
import { Button, Card } from 'antd';
import "../styles/Dashboard.css";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1 className="dashboardWelcome">Welcome!</h1>
            <span style={{marginLeft:"5%",fontSize:"20px"}}>Your Students</span>
            <div className="menuContainer">
            <Card className="menuCard"/>
            <Card className="menuCard"/>
            </div>
        </div>
    )
}

export default Dashboard;