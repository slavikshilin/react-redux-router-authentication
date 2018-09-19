import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Layout, Alert } from 'antd';
import WrappedLoginForm from './components/loginForm'
import { checkLogin } from './actions/loginActions'
import './App.css';
import 'antd/dist/antd.css';

const { Content, Footer } = Layout;

function onClose(e) {
  console.log(e, 'I was closed.');
};

function AlertMessage(props) {
  const err = props.err;
  if (err) {
    return <div className="ant-form login-form-message">
            <Alert
              message="Ошибка"
              description={err.message}
              type="error"
              showIcon
              onClose={onClose}
            />
          </div> 
  } else {
    return null
  } 
}

class App extends Component {
 
  render() {
    const { page, checkLoginAction } = this.props

    return (
    <Layout> 
      <Layout align="middle">
        <Footer style={{ fontSize: "x-large" }}>
          <AlertMessage err={page.err}/>
          Авторизация на сайте
        </Footer>
        <Content><WrappedLoginForm err={page.err} onSubmitBtn={(login, password) => checkLoginAction(login, password)}/></Content>
        <Footer></Footer>
      </Layout>
      <Footer id="footer">© Вячеслав Шилин</Footer>
    </Layout> 
    );
  }
}

const mapStateToProps = store => {
  return {
    page: store.page,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkLoginAction: (login, password) => dispatch(checkLogin(login, password)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)