import React, { useState } from 'react';
import MenuCard from '../components/Dashboard/menuCard.tsx';
import { Button, Card } from 'antd';
import "../styles/Dashboard.css";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1 className="dashboardWelcome">Welcome!</h1>
            <span style={{marginLeft:"5%",fontSize:"20px"}}>Your Students</span>
            <div className="menuContainer">
            <MenuCard className="menuCard"/>
            </div>
        </div>
    )
}

export default Dashboard;