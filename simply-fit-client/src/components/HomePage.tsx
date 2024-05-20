import React from 'react';

interface HomePageProps {
    onSwitchComponent: (index: number) => void;
  }
function HomePage({onSwitchComponent}: HomePageProps){
    return (
      <div className="text-center">
        <h1>Welcome to SimplyFit!</h1>
        <h2 className="mt-3">Let's get started.</h2>
        <button className="btn btn-primary mt-3"onClick={() =>onSwitchComponent(1)}>Sign Up</button>
        <h5 className = "mt-3">
          Existing member? <button className = "open-form-btn" onClick={() =>onSwitchComponent(2)}>Log in</button>
        </h5>
      </div>
      )}

export default HomePage;
