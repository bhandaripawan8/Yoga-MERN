import React from 'react';
import './App.css'
import Layout from './layout/Layout';
// import aos


const App = () => {
  const styles = {
    bg_custom_gradient: {
      background: 'linear-gradient(100deg, #D8B5FF, #1EAE98)'
    }
  };

  return (
  <div style={styles.bg_custom_gradient}>
  
  <div className='text-[22px] px-[150px] bg-gradient-to-r from-blue-400 to-grey-400'>
      <Layout/>
</div>
  </div>
  )
};

export default App;
