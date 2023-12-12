import React from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
function PostList(props){ 
  console.log(props.title)
   return (
    <div>
  <MDBTable style={{ marginTop: "2rem" }}>
    <MDBTableHead light>
      <tr>
        <th scope='col'>ID</th>
        <th scope='col'>Title</th>
        <th scope='col'>Body</th>
      </tr>
    </MDBTableHead>
    <MDBTableBody data-aos="flip-left"
      data-aos-duration="ease-out-cubic"
      data-aos-easing="1000">
        <tr>
          <th scope='row'>{props.id}</th>
          <td>{props.title}</td>
          <td>{props.body}</td>
          <td>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/PostListDetail" state={props}>
              Click for detail
            </Link>
          </td>
        </tr>
    </MDBTableBody>
  </MDBTable>
</div>

  )
}

export default PostList

    
