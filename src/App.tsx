import React, { useEffect } from 'react';
import './App.css';
import Component from './components/Component';
import { useDispatch } from 'react-redux';
import { actions } from './features/posts';
import { getPeople } from './api/api';
import { useAppDispatch } from './store/hooks';


function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actions.setLoading(true));
    getPeople()
      .then(data => {
        dispatch(actions.set(data));
        dispatch(actions.setLoading(false));
      });
  }, []);

  return (
    <div className="App">
      <Component />
    </div>
  );
}

export default App;
