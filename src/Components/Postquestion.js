import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {getList, remove, add, setstat} from '../Redux/Reducer/Questionposts'

import { useNavigate } from 'react-router-dom'
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
function Postquestion () {
    const [likes, setlikes] = useState(false);

  const dispatch= useDispatch();
  const navigate = useNavigate();
 let  selector=useSelector(state=>state.Listquestion.tasks); 
  const [newtet, setnew] = useState({ title: "", content:"",location:"", user: "" });
  console.log(newtet)
  return (
    <div style={{textAlign:"center", display: "flex", justifyContent:"space-evenly" }}>
          <div style={{textAlign:"center", width: "30rem"}}>
              <h2>See all Question</h2>
            By Clicking <MDBBtn type='submit' className='mb-2' block onClick={() => (dispatch(add(newtet)), setTimeout(()=>{ navigate("/Qustions") }, 1000))}>
        List all available Qustions
      </MDBBtn>
        </div>
      <div style={{display: "flex", justifyContent:"center"}}>
    <form style={{width: "30rem"}}>
    <h2>Post Your Question</h2>
    <MDBInput id='form4Example1' wrapperClass='mb-4' label='Title' onChange={(e) => setnew({...newtet,title:e.target.value})} />
      <MDBInput type='text' id='form4Example2' wrapperClass='mb-4' label='
      Location' onChange={(e) => setnew({...newtet,location:e.target.value})}/>
      <label>content</label>
      <div className="mb-4">
      <textarea onChange={(e) => setnew({...newtet,content:e.target.value})} label='
      Content'
        id="form4Example3"
        style={{ height: '200px', width:"20em", overflowY: 'auto', borderRadius:"10px" }}
        rows="12"
      ></textarea>
    </div>
      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='form4Example4'
        label='Send me a copy of this message by email'
        defaultChecked
      />
      
      <MDBBtn type='submit' className='mb-4' block onClick={() => (dispatch(add(newtet)).then(navigate("/Qustions")))}>
        Post a Question
      </MDBBtn>
    </form>
    </div>
    </div>
    )
}
export default Postquestion
