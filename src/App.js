import React from 'react';
import { connect } from 'react-redux';
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import DialogsContainer from './components/Dialogs/Dialogs.container';
import HeaderContainer from './components/Header/Header.container';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Preloader from './components/preloaders/preloader';
import ProfileContainer from './components/Profile/Profile.container';
import UsersContainer from './components/USERS/User.container';
import {initializedApp} from './redux/app.reducer'

class App extends React.Component{

  componentDidMount(){
    this.props.initializedApp()
  }

  render(){
    if(!this.props.initialized) return <Preloader />
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/profile/:userId?" element={<ProfileContainer />}/>
            <Route path="/dialogs/*" element={<DialogsContainer/>}/>
            <Route path="/users/*" element={<UsersContainer/>}/>
            <Route path="/login/" element={<Login/>}/>
            {/* <Route path="/news" element={<Dialogs/>}/>
            <Route path="/music" element={<Dialogs/>}/>
            <Route path="/settings" element={<Dialogs/>}/> */}
          </Routes>
            
        </div>
      </div>
  )
  }
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }

  return ComponentWithRouterProp;
}
const mapStateToProps = (state)=>({
  initialized: state.app.initialized
})
export default compose(withRouter,connect(mapStateToProps,{initializedApp}))(App)
