import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/signIn/signIn.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='/shop' element={<div>The Shop Page</div>}/>
        <Route path='/signIn' element={<SignIn />}/>
      </Route>
    </Routes>
  );
};

export default App;
