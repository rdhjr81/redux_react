import { Fragment } from 'react';
import {useSelector} from 'react-redux';
import Counter from './components/Counter';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import Auth from './components/Auth'

function App() {
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
