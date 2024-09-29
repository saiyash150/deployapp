import {Component} from "react"
import {v4 as uuidv4} from "uuid"
import './App.css';




class App extends Component{

  state={text:'',address:"",result:""}



  updateaddress=(event)=>{
    this.setState({address:event.target.value})

  }


  updatename=(event)=>{
    this.setState({text:event.target.value})

  }

  onsubmit=async (event)=>{
    
    event.preventDefault()
    const {text,address}=this.state

    const value={id:uuidv4(),name:text,address}

    const options={
      method:"POST",
      body: JSON.stringify(value),


    }
    const web=""
    const response=await fetch(web,options)





  }
  render(){
    const{text,address}=this.state
    return(
      <div className="container">
        <form className="form-container" onSubmit={this.onsubmit}>
          <h1 className="head">Yash assignment</h1>

          <div className="input-container">
            <label htmlFor="user">UserName</label>
            <input type="text" id="user" className="userinput" onChange={this.updatename} value={text}/>

          </div>
          <div className="input-container">
            <label htmlFor="user">Address</label>
            <input type="text" id="user" className="userinput" onChange={this.updateaddress} value={address}/>

          </div>

          <button className="submit" type="submit">Submit</button>




        </form>
      </div>
    )

  }
}



export default App;
