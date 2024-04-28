import React from 'react';
import './App.css'
import Layout from './layout/Layout';
// import aos


const App = () => {
  const styles = {
    bg_custom_gradient: {
      background: 'linear-gradient(100deg, #f6ea41   , #f048c6)'
    }
  };

  return (
  <div style={styles.bg_custom_gradient}>
  
  <div className='text-[22px] px-[150px]'>
      <Layout/>
</div>
  </div>
  )
};

export default App;
