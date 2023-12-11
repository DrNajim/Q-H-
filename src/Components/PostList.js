import React from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
function PostList(props){ 
   return (
    <div>
 <div className="icone-search-section">
      </div>
      <MDBTable style={{marginTop:"2rem"}}>
      <MDBTableHead light>
        <tr>
          <th scope='col'>ID</th>
          <th scope='col'>Name	</th>
          <th scope='col'>Email</th>
        </tr>
      </MDBTableHead>
      {props?.map(item => (
      <MDBTableBody data-aos="flip-left"
      data-aos-duration="ease-out-cubic"
      data-aos-easing="1000">
        <tr>
          <th scope='row'>{props.indexOf(item)}</th>
          <td>{item.title}</td>
          <td>{item.body}</td>
          <Link style={{ textDecoration: 'none', color: 'black'}} to={"/PostListDetail"} state={props}><td>Click for detail</td></Link>
        </tr>        
      </MDBTableBody>))}
    </MDBTable>    
    </div>
  )
}

export default PostList

    
