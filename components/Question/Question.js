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
                return (
                  <Button
                    bsStyle='primary'
                    key={index}
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
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  possibleAnswers: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired
    })
  ),
  title: PropTypes.string.isRequired
}

export default Question
