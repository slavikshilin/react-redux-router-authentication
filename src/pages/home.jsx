import React, { Component } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Content, Footer } = Layout;

export default class Home extends Component {
 
  render() {
    return (
        <Layout> 
        <Layout align="middle">
            <Footer style={{ fontSize: "x-large" }}>
                Домашняя страница
            </Footer>
            <Content>Поздравляю, вы авторизованы!</Content>
            <Footer></Footer>
        </Layout>
        <Footer id="footer">© Вячеслав Шилин</Footer>
        </Layout> 
    );
  }
}
