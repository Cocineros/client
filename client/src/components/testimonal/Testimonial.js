import './testimonial.css'
import { Avatar, Image, Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
const { Meta } = Card;


export default function Testimonial() {
    return (
        <div className="testimonial-container">
            <h1>from the creators of my cookbook</h1>
            <br></br>
            <div className="test1">
                <Avatar src="https://joeschmoe.io/api/v1/random" />
                <h2>"I wanted an app that kept all of my recipes for me so that I can easily share them with friends and family."</h2>

            </div>

            <div className="test2">
                <Avatar src="https://joeschmoe.io/api/v1/random" /> 
                <h2>"I wanted my recipes to look nice with minimal effort."</h2>
            </div>

            <div className="test3">
                <Avatar src="https://joeschmoe.io/api/v1/random" />
                <h2>""</h2>
            </div>

            <div className="test4">
                <Avatar src="https://joeschmoe.io/api/v1/random" />
                <h2>""</h2>
            </div>

            <div className="test5">
                <Avatar src="https://joeschmoe.io/api/v1/random" />
                <h2>"I wanted to have access to all my recipes, so I can use them whether I am traveling or at home."</h2>
            </div>
            <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Ayse"
      description="This is the description"
    />
  </Card>,
  mountNode,
);
        </div>
    )
}