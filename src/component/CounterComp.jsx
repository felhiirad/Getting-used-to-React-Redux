import React from 'react';
import { connect } from 'react-redux';
import {Up,Plus,Moins} from '../Action/Action'
const CounetrComp = (props) => {
    return ( <div>
        <button onClick={props.Increment}>+</button>
        <input type='text' placeholder='0' value={props.c}  onChange={(e)=>props.handelInput(e.target.value)} />
        <button onClick={props.Decrement}>-</button>
     </div> );
}
const mapDispatchToProps=(dispatch)=>{
    return{
      handelInput:(a)=>dispatch(Up(a)),
      Increment:()=>dispatch(Plus()),
      Decrement:()=>dispatch(Moins())
  
    }
  }
  const mapStateToProps=(state)=>{
    return{
      c:state.count
    }
  }
 
export default connect(mapStateToProps,mapDispatchToProps) (CounetrComp);