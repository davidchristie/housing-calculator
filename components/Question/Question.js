import React, { PropTypes } from 'react'
import {
  Button,
  ButtonGroup,
  Grid,
  Jumbotron
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
            <ButtonGroup block vertical>
              {this.props.possibleAnswers.map((possibleAnswer, index) => {
                const isSelected = possibleAnswer.value === this.props.answer
                return (
                  <Button
                    bsStyle={isSelected ? 'success' : 'primary'}
                    key={index}
                    onClick={event => {
                      this.props.setAnswer(possibleAnswer.value)
                    }}
                  >{possibleAnswer.text}</Button>
                )
              })}
            </ButtonGroup>
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
