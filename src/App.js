import React , { Fragment , useState , useEffect }from 'react';
import './App.css';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import axios from 'axios';



const App  = () => {

  const [ users,setUsers ] = useState([]);
  const [ user,setUser ] = useState({});
  const [ loading,setLoading ] = useState(false);
  const [ repos,setRepos ] = useState([]);
  const [ alertMsg,setAlertMsg ] = useState('');
  const [ alertType , setAlertType ] = useState();
  const [alertBool , setAlertBool ] = useState(false)


  // async componentDidMount(){
  //   this.setState({
  //     loading : true,
  //   })
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   this.setState({
  //     users: res.data,
  //     loading: false,
  //   });
  // }

  //Search Github Users
  const searchUsers = async (text) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      setUsers(res.data.items);
      setLoading(false);
  }

  // Get Single user
  const getUser = async (username) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setUser(res.data);
    setLoading(false);   
  }
  // Get users repos
  const getUserRepos = async (username) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&
    client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setRepos(res.data);
    setLoading(false);  
  }
  
  // remove users
  const removeUsers = () => {
    setUsers([]);
  } 
  // set alert
  const setAlert = (msg,type) => {
    setAlertMsg(msg);
    setAlertType(type);
    setAlertBool(true);

    setTimeout(()=> {
    setAlertMsg('');
    setAlertType('');
    setAlertBool(false);
    } ,3000)
  }

    return (
      <Router>
      <div className="App">
          <Navbar />
          <div className = 'container'>
          <Alert alertMsg = {alertMsg} alertType = {alertType} alertBool = {alertBool} />
          <Switch>
            <Route exact path = '/' render = { props => (
              <Fragment>
                  <Search searchUsers= {searchUsers}  removeUsers={removeUsers} users={users} setAlert ={setAlert}  />
                  <Users loading = {loading} users= {users}/>
              </Fragment>
            ) }>
            </Route>
            <Route exact path ='/about' component = {About} >
            </Route>
            <Route exact path = '/user/:login' render = { props => (
              <User { ...props } getUser = {getUser} getUserRepos = {getUserRepos} user = {user} repos={repos} loading = {loading} />
            )
            } ></Route>
          </Switch>
          </div>
      </div>
      </Router>
    );
  

}

export default App;
