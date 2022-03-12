import React, { useState } from 'react'
import { Modal, Button } from 'antd';
import { NavLink } from 'react-router-dom'
import './landing.css'
import Signup from '../signup/Signup';

export default function Landing(){
  const [isModalVisitble, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
    return (
        <div className="landing-container">
            <h1>my cookbook</h1>
            <div className="buttons">
            <Button type="primary" onClick={showModal}>
          signup
        </Button>
        <Modal
          title="Basic Modal"
          visible={isModalVisitble}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Signup/>
        </Modal>
                {/* <NavLink className="button" to="/signup">Signup</NavLink>
                <NavLink className="button" to="/login">Login</NavLink> */}
            </div>
        </div>
    )
}
