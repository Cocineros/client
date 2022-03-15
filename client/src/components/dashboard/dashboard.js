import 'antd/dist/antd.css';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import LoginModal from '../login-modal/LoginModal';
import './dashboard.css'

const { Header, Footer, Sider, Content } = Layout;

export default function Dashboard() {
    const { Search } = Input;

    const suffix = (
        <AudioOutlined
            style={{
                // fontSize: 16,
                // color: '#1890ff',
            }}
        />
    );

    const onSearch = value => console.log(value);
    return (
        <div className="dash-container">
            <Layout className ="layout">
            <Sider className="sidebar">
            <Space direction="vertical">
                <Search placeholder="search for recipe" onSearch={onSearch} style={{ width: 200 }} />
            </Space>
            </Sider>
            <div class="vl"></div>
            <Content>
            <div className="header"><h1>My Recipes</h1></div>
            </Content>
            </Layout>
        </div>
    )
}