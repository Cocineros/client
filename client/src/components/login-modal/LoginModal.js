import React, { useState } from 'react'
import { Modal, Button } from 'antd';
import Login from '../login/Login';



export default function LoginModal(){
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
          Login
        </Button>
        <Modal
          title="Login to Bumbu"
          visible={isModalVisitble}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Login />
        </Modal>
                {/* <NavLink className="button" to="/signup">Signup</NavLink>
                <NavLink className="button" to="/login">Login</NavLink> */}
            </div>
        </div>
    )
}
