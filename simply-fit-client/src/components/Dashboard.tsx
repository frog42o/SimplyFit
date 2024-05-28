import useAPI from "../util/getAPI"
import "../assets/Dashboard.css"
import axios from 'axios';

axios.defaults.withCredentials = true;
interface UserData {
    username: string; 
}
function Dashboard() {
    const {data, loading, error} = useAPI<UserData>('/dashboard')
    const logoutUser = async () => {
        try {
         await axios.get('http://localhost:8080/api/logout');
        
         window.location.href = '/';
        } catch (error:unknown) {
            console.log(error);
        }
      };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="vw-100 vh-100 d-flex mx-auto justify-content-center align-items-center">
            <div className="col-md-6 test">        
                {data ? (
                    <div className='mt-3 text-center'>
                        <div className='welcome-header test'>
                            <h1>Welcome, {data.username}</h1>
                            <button className='close-btn test' type="button" onClick ={logoutUser}>logout</button>
                        </div>
                        <pre>{JSON.stringify(data, null, 2)}</pre>
                    </div>
                ) : (
                    <div>No user data available</div>
                )}
            </div>
        </div>   
    );
}

export default Dashboard;
