interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void; // Function to toggle the sidebar
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className="sidebar position-fixed top-0"
      style={{
        width: "250px",
        height: "100vh",
        transition: "0.3s",
        backgroundColor: "#f8f9fa",
        transform: isOpen ? "translateX(0)" : "translateX(-100%)", // This line controls the sliding effect
      }}
    >
      <button
        onClick={toggleSidebar}
        className="btn btn-primary top-0 end-0 m-3"
      >
        Close
      </button>
      <a href="#" className="d-block p-2 ml-2">
        Workouts
      </a>
      <a href="#" className="d-block p-2 ml-2">
        Goals
      </a>
      <a href="#" className="d-block p-2 ml-2">
        Journal
      </a>
      <a href="#" className="d-block p-2 ml-2">
        Friends
      </a>
      <a href="#" className="d-block p-2 ml-2">
        Favorites
      </a>
    </div>
  );
};


export default Sidebar;
