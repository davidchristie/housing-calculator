import Link from 'next/link'
import Router from 'next/router'
import React, { PropTypes } from 'react'
import {
  Button,
  Glyphicon,
  MenuItem,
  Nav,
  Navbar,
  NavDropdown
} from 'react-bootstrap'

class Navigation extends React.Component {
  render () {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a
              href='/'
              onClick={event => {
                event.preventDefault()
                Router.push('/')
              }}
            >
              Housing Calculator
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown eventKey={3} title='Questions' id='questions-dropdown'>
              {
                this.props.questions.map((question, index) => {
                  const href = `/question?id=${question.id}`
                  return (
                    <MenuItem
                      eventKey={`3.${index + 1}`}
                      href={href}
                      key={index}
                      onClick={event => {
                        event.preventDefault()
                        Router.push(href)
                      }}
                    >
                      {question.title}{' '}
                      {question.answer !== null
                        ? <Glyphicon glyph='ok' />
                        : null}
                    </MenuItem>
                  )
                })
              }
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <Link href='/report'>
              <Button bsStyle='success'>
                Report
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

Navigation.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      answer: PropTypes.any,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
}

export default Navigation
