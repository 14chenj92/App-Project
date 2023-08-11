import React from 'react';
import '../../styles/Homepage.css';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (<p>Basketball</p>)
  },
  {
    key: '2',
    label: (<p>Basketball</p>)
  }
];

const App: React.FC = () => (
  <div className="searchFilter">
  <Space direction="vertical">
    <Space wrap>
      <Dropdown menu={{ items }} placement="bottomLeft">
        <Button>bottomLeft</Button>
      </Dropdown>
      <Dropdown menu={{ items }} placement="bottom">
        <Button>bottom</Button>
      </Dropdown>
      <Dropdown menu={{ items }} placement="bottomRight">
        <Button>bottomRight</Button>
      </Dropdown>
    </Space>
    <Space wrap>
      <Dropdown menu={{ items }} placement="topLeft">
        <Button>topLeft</Button>
      </Dropdown>
      <Dropdown menu={{ items }} placement="top">
        <Button>top</Button>
      </Dropdown>
      <Dropdown menu={{ items }} placement="topRight">
        <Button>topRight</Button>
      </Dropdown>
    </Space>
  </Space>
  </div>
);

export default App;