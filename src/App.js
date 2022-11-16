import { Fragment } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {authActions} from './store/index'
import Counter from './components/Counter';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import Auth from './components/Auth'

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  

  return (
    <Fragment>
      <Header />
      {isAuthenticated ? <UserProfile />: <Auth />}
      <Counter />
      
    </Fragment>
  );
}

export default App;
