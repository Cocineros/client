import './testimonial.css'
import { Avatar, Image, Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
const { Meta } = Card;


export default function Testimonial() {
    return (
        <div className="testimonial-container">
            <h1>from the creators of my cookbook</h1>
            <div className='test-containers'>
            <div className="test1">
                <Avatar className='avatar' size={64} icon={<UserOutlined />} />

                <h2>"I wanted an app that kept all of my recipes for me so that I can easily share them with friends and family."</h2>

            </div>
            <br></br>
            <div className="test2">
                <Avatar className='avatar' size={64} icon={<UserOutlined />} />

                <h2>"I wanted my recipes to look nice with minimal effort."</h2>
            </div>
            <br></br>
            <div className="test3">
                <Avatar className='avatar' size={64} icon={<UserOutlined />} />

                <h2>"I wanted to have access to all my recipes, so I can use them whether I am traveling or at home."</h2>
            </div>
            </div>
            );
        </div>
    );
}