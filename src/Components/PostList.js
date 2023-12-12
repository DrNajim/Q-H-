import React from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
function PostList(props){ 
  console.log(props)
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
      {Object.keys(props).map((key) => (
        <tr key={key}>
{          console.log(props[key])
}          <th scope='row'>{props[key].id}</th>
          <td>{props[key]}</td>
          <td>{props[key]}</td>
          <td>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/PostListDetail" state={props}>
              Click for detail
            </Link>
          </td>
        </tr>
      ))}
    </MDBTableBody>
  </MDBTable>
</div>

  )
}

export default PostList

    
