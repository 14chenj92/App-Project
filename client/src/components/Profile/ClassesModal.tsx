import React, { useState } from 'react';
import '../../styles/Profile.css';
import { Button, Modal } from 'antd';
import {FormOutlined } from '@ant-design/icons';

const SignUpModal: React.FC = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <FormOutlined style={{float:"right"}}onClick={showModal}>See More</FormOutlined>
      <Modal title="Class Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Class Name:</p>
        <p>Class Type:</p>
        <p>Description:</p>
        <p>Set Price:</p>
      </Modal>
    </>
  );
};

export default SignUpModal;