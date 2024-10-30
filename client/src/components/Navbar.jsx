import React from 'react'
import { Typography } from "antd";
import { sparkGreen } from '../helpers';
import SPARK from '../assets/spark-logo.png'

function Navbar() {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: sparkGreen, height: '4rem', width: '100vw',}}>
        <img src={SPARK} alt='spark-logo' style={{height: '3rem', position: 'absolute', left: 10}} className='logo'/>
        <Typography.Title style={{color: 'white', fontSize: 'large'}}>Spark Weather Center</Typography.Title>
    </div>
  )
}

export default Navbar