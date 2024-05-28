
import Dashboard from "./components/Dashboard";
import LandingPage from "./components/LandingPage";

function App() {
  const pathname = window.location.pathname;

  switch (pathname) {
    case '/dashboard':
      return <div className="position-relative"><Dashboard/></div>;
    default:
      return <LandingPage />;
  }
}
export default App;
