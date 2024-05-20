import {useState} from 'react';
 
import Login from  './Login';
import HomePage from './HomePage';
import SignUp from './SignUp';
enum PageIndex{
  home = 0,
  signup = 1, 
  login =2,
}
function LandingPage() {
  const [viewIndex, setViewPageIndex] = useState<PageIndex>(PageIndex.home);

  const switchPage = (index: PageIndex) => {
    setViewPageIndex(index);
  };
  const renderView = () =>{
    switch(viewIndex){
      case PageIndex.home: 
        return <HomePage onSwitchComponent={switchPage}/>;
      case PageIndex.signup: 
        return <SignUp onSwitchComponent={switchPage}/>;
      case PageIndex.login:
        return <Login onSwitchComponent = {switchPage}/>;
      default:
        return <HomePage onSwitchComponent={switchPage}/>;
    }
  }
  return (
    <div className="vw-100 vh-100 d-flex mx-auto justify-content-center align-items-center">
      {renderView()}
    </div>
  );
}
export default LandingPage;
