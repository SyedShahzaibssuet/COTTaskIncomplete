import './App.css';
import axios from 'axios';
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state={apirespomse:null,selecteddate:null,deliverytype:null,countryname:null};
  }
  callApi(){
    fetch('http://localhost:4000/countryname').then(res=>res.json()).then(res=>this.setState({apirespomse:res}))
  }
  componentWillMount()
  {
    this.callApi();
  }
  handleInputChange=e=>{
    this.setState({[e.target.name]:e.target.value,});
  };
  handleSubmit=e=>{
    e.prevenyDefault();
    const {selecteddate,deliverytype,countryname}=this.state;
    const deliverytim = {
      selecteddate,deliverytype,countryname
    }
    axios.post('http://localhost:4000/deliverytime',deliverytim)
    .then(()=>console.log('Data Send'))
    .catch(err=>console.log(err))
  };
  

render() {

  var countryoption;
  if(this.state.apirespomse!==null){
  countryoption=this.state.apirespomse.map(element => 
    { return (<option onChange={this.handleInputChange} name="countryname" value={element.countryname}>{element.countryname}</option>);}
  )}
  return (
    <div className="App">
      <header className="App-header">
        <h1>Delivery Time Calculator</h1>        
        <form onSubmit={this.handleSubmit}>
                <div className="mt:30">
                    <label name="selecteddate">Delivery Time : 
                        <DatePicker name="selecteddate" selected={this.state.selecteddate} onChange={date=>this.setState({selecteddate:date})}/>
                    </label>
                </div>
                <div>
                    <label>Delivery Type : 
                        <select name="deliverytype">
                            <option selected onChange={this.handleInputChange} name="deliverytype" value="Normal">Normal</option>
                            <option name="deliverytype" onChange={this.handleInputChange} value="Urgent">Urgent</option>
                        </select>
                    </label>                    
                </div>
                <div>
                    <label>Delivery Country : 
                        <select name="countryname">
                       {countryoption}
                        </select>
                    </label>                    
                </div>
                <input type="Submit" className="btn btn-success" value="Submit"/>
            </form>
      </header>
      
    </div>
  );
}
}
export default App;
