import React from 'react'
import {Navbar,Button} from 'react-bootstrap'
import {PropTypes} from 'prop-types'

export const StatusBar = (props) => {
    return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      /> {props.title}
    </Navbar.Brand>
    <Button type="submit">+</Button>
  </Navbar>
    );
  }
  
  StatusBar.propTypes = {
    title: PropTypes.string.isRequired,
  }
  
 