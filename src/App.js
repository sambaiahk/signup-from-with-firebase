import react, {useEffect,useState} from 'react';
import axios from 'axios';

const App = () =>{
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const {username, email, password, confirmPassword} = data;
  const onChangeEvent = e =>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const onSubmitEvent = e =>{
    e.preventDefault()
    axios.post('https://samp-e7c03-default-rtdb.firebaseio.com/samb.json', data).then(() => alert("submitted sccessfully"))
    if(username.length <= 3){
      alert("username must be 5 letters")
    }
    else if(password !== confirmPassword){
      alert("password not matched")
    }
    else{
      console.log(data)
  } 
}
  
  return(
    <div>
      <center>
        <form onSubmit={onSubmitEvent}>
          <input type="text" name="username" placeholder='username' value={username} onChange={onChangeEvent}/>
          <br />
          <input type="text" name="email" placeholder="email" value={email} onChange={onChangeEvent} /><br />
          <input type = "password" name="password" placeholder='password'value={password} onChange={onChangeEvent}/>
          <br />
          <input type = "password" name="confirmPassword" placeholder='confirmPassword' value={confirmPassword} onChange={onChangeEvent}/><br />
          <input type = "submit" name = "submit" />
        </form>
      </center>
    </div>
  )
  

}

export default App
