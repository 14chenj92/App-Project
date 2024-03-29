import React from 'react';
import '../../styles/Homepage.css';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (<p>Yoga</p>)
  },
  {
    key: '2',
    label: (<p>Basketball</p>)
  },
  {
    key: '3',
    label: (<p>Swimming</p>)
  },
  {
    key: '4',
    label: (<p>Cycling</p>)
  },
  {
    key: '5',
    label: (<p>Strength</p>)
  },
];


const App: React.FC = () => (
  <div className="searchFilter">
  <div className="labels">
  <p className="searchLabels">Category</p>
  <Space direction="vertical">
    <Space wrap>
      <Dropdown menu={{ items }} placement="bottomLeft">
        <Button>bottomLeft</Button>
      </Dropdown>
    </Space>
  </Space>
  <p className="searchLabels">Language</p>
  <Space direction="vertical">
    <Space wrap>
      <Dropdown menu={{ items }} placement="bottomLeft">
        <Button>bottomLeft</Button>
      </Dropdown>
    </Space>
  </Space>
  <p className="searchLabels">Timezone</p>
  <Space direction="vertical">
    <Space wrap>
      <Dropdown menu={{ items }} placement="bottomLeft">
        <Button>bottomLeft</Button>
      </Dropdown>
    </Space>
  </Space>
  <p className="searchLabels">Class Type</p>
  <Space direction="vertical">
    <Space wrap>
      <Dropdown menu={{ items }} placement="bottomLeft">
        <Button>bottomLeft</Button>
      </Dropdown>
    </Space>
  </Space>
  <p className="searchLabels">Price Range</p>
  <Space direction="vertical">
    <Space wrap>
      <Dropdown menu={{ items }} placement="bottomLeft">
        <Button>bottomLeft</Button>
      </Dropdown>
    </Space>
  </Space>
  </div>
  </div>
);

export default App;