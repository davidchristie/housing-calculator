import React, { PropTypes } from 'react'
import {
  Grid,
  Jumbotron,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap'

class Question extends React.Component {
  render () {
    return (
      <div>
        <Grid>
          <Jumbotron>
            <h1>{this.props.title}</h1>
            <p>
              {this.props.description}
            </p>
            <ListGroup>
              {this.props.possibleAnswers.map((possibleAnswer, index) => {
                return (
                  <ListGroupItem
                    active={possibleAnswer.value === this.props.answer}
                    onClick={event => {
                      this.props.setAnswer(possibleAnswer.value)
                    }}
                  >
                    {possibleAnswer.text}
                  </ListGroupItem>
                )
              })}
            </ListGroup>
          </Jumbotron>
        </Grid>
      </div>
    )
  }
}

Question.propTypes = {
  answer: PropTypes.any,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  possibleAnswers: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired
    })
  ),
  setAnswer: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default Question
