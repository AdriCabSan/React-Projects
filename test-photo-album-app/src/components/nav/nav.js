import React from 'react'
import {Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export class Navigation extends React.Component{
    render(){
        return(
<Nav justify variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link eventKey="link-1" as={Link} to="/albums">Album</Nav.Link>
  </Nav.Item>

  <Nav.Item>
    <Nav.Link eventKey="link-2" as={Link} to="/photos">Photo</Nav.Link>
  </Nav.Item>

</Nav>
        )
    }
}

