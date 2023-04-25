import React, { Component } from 'react';
import {connect} from 'react-redux'
import {ADDREMINDER,REMOVEREMINDER,CLEARREMINDER} from './actioncreator/index'
import moment from 'moment';

class App extends Component {
  state = {
    text : '',
    date: new Date()
  }

  remindermap = () => {
    const {y} = this.props;
    return(
      y.map(y => {
        return(
          <div key={y.id} className="bigkey">
            <h3>reminder name : {y.text}</h3>
            <h3>reminder time : {moment(new Date(y.date)).fromNow()}</h3>
        <button className="btn btn-danger" onClick={() => this.props.REMOVEREMINDER(y.id)}>DELETE REMINDER {y.text}</button>
          </div>
        )
      })
    )
  }
  render(){
  return (
    <div className="App">
      <div className="container">
      <div className="bigparent">
      <h1 className="title">REMINDER APP</h1><br />
      <input type="text" placeholder="enter the reminder" onChange={(e) => this.setState({text:e.target.value})} value={this.state.text}/><br /><br />
      <input type="datetime-local" onChange={(e) => this.setState({date:e.target.value})} value={this.state.date} /><br /><br />
      <button className="brn btn-primary" onClick={()=> {
        this.props.ADDREMINDER(this.state.text,this.state.date);
        this.setState({
          text:'',
          date:''
        })
      }
      }>ADD REMINDER</button><br /><br />
      {this.remindermap()}<br /><br />
      <button className="btn btn-success" onClick={() => this.props.CLEARREMINDER()}>CLEAR REMINDERS</button>
    </div>
    </div>
    </div>
  );
  }
}


/*
function mapdispatch(dispatch){
  return {
    addbutton : () => dispatch(ADDREMINDER())
  }
}
*/

function mapstate(state){
  return{
    y : state
  }
}

export default connect(mapstate,{ADDREMINDER,REMOVEREMINDER,CLEARREMINDER})(App);
