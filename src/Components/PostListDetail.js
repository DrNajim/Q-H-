import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { update } from '../Redux/Reducer/Postlists';
function PostListDetail(){
    const location=useLocation();
    const PostListDetail=location.state
    const dispatch = useDispatch()
    const [setsign, setcurrentsign] = useState('')
  return (
    <div>
      <div>
      <div className='Universite_detail'>
      <div style={{height:"max-content", width:"20em"}}>
         <MDBCard className='mb-3'>
        <MDBCardBody style={{height:"max-content", width:"40em"}}>
          <MDBCardTitle>Post Name: <br></br>  {PostListDetail.title}</MDBCardTitle>
          <MDBCardText> Email : <br></br>
          {PostListDetail.body}
          </MDBCardText>
          <input
        type="text"
        onChange={e =>
          setcurrentsign({...PostListDetail, body:e.target.value})
        }
        placeholder="Enter to update Email"
      /><button onClick={() => dispatch(update(setsign))}>Update</button>
        </MDBCardBody>
      </MDBCard>
      </div></div>
    </div>
    </div>
  )
}

export default PostListDetail