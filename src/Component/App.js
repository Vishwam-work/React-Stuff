import React,{useState,useEffect} from 'react';
import Header from './Header';
import Addcontact from './Addcontact';
import Userlist from './Userlist';
function App() {
const LOCAL_STORAGE_KEY="user";
const [user,setUser]=useState([])
const addUserhandler =(users)=>{
  console.log(users)
  setUser([...user,users]);
}
// use to store the temporry imformation in local storage

useEffect(()=>{
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(user))
},[user])
useEffect(()=>{
  const retriveUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (retriveUser){
    setUser(retriveUser)
  
  }  
  
  },[])

return (
    <div className="App ui container">
     <Header/>
    <Addcontact addUserhandler={addUserhandler}/>
    <Userlist user={user}/>
    </div>
  );
}

export default App;
