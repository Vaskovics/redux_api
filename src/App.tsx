import React, { useEffect } from 'react';
import './App.css';
import Component from './components/Component';
import { actions } from './features/posts';
import { getPeople } from './api/api';
import { useAppDispatch } from './store/hooks';


function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actions.setLoading(true));
    getPeople()
      .then(data => {
        dispatch(actions.setItem(data));
      })
      .catch(() => {
        dispatch(actions.setError(true));
      })
      .finally(() => {
        dispatch(actions.setLoading(false));
      })
  }, []);

  return (
    <div className="App">
      <Component />
    </div>
  );
}

export default App;
