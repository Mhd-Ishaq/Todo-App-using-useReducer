import React, {useState,useReducer} from 'react';
import Modal from './Modal';
import {reducer} from './reducer';

const Index = () => {
  const [name, setName] = useState('');

  const defaultState = {
    people : [],
    isModalOpen : false,
    modalContent : '',
  };
  const [state, dispatch] = useReducer(reducer, defaultState);

  const submitHandler = (e)=>{
    e.preventDefault();
    if(name){
      const newItem = { name};
      dispatch({type : 'ADD_PERSON', payload : newItem});
      setName('');
    }else{
      dispatch({type :'NO_VALUE'});
    }
  }

  const closeModal = ()=>{
    dispatch({type:'CLOSE_MODAL'});
  }


  return (
    <>
      {state.isModalOpen && (
      <Modal modalContent ={state.modalContent} closeModal ={closeModal} />
    )}

    <form  className="form-control" onSubmit={submitHandler}>
      <div>
        <input
        type="text"
        value = {name}
        onChange = {(e)=> setName(e.target.value)}
        />
      </div>
      <button className='submit-btn' type="submit">ADD</button>
    </form>

    {state.people.map((person)=>{
      return (
        <div className=".grocery-item" >
          <h4>{person.name}</h4>
          <button className='delete-btn' onClick ={()=> dispatch({type : 'DELETE_PERSON',payload : person.id})}>Delete </button>
        </div>
      );
    })}
    </>
  )
  
}

export default Index