import React, { useState } from "react";
import Sidebar from "./Sidebar"; // Adjust the path as necessary

function LandingPage() {
  // State to manage sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="btn btn-primary position-fixed top-0 start-0 m-3"
      >
        Menu
      </button>

      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main content */}
      <div className="vw-100 vh-100 d-flex mx-auto justify-content-center align-items-center">
        <div className="text-center">
          <h1>Welcome to SimplyFit!</h1>
          <h2 className="mt-3">Let's get started.</h2>
          <button className="btn btn-primary mt-3">Sign Up</button>
          <h5 className="mt-3">
            Existing member? <a href="">Log in</a>
          </h5>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
