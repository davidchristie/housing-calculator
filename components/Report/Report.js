import Link from 'next/link'
import React, { PropTypes } from 'react'
import {
  ListGroup,
  ListGroupItem,
  Grid,
  Jumbotron
} from 'react-bootstrap'

class Report extends React.Component {
  render () {
    return (
      <div>
        <Grid>
          <Jumbotron>
            <h1>Report</h1>
            <ListGroup>
              {this.props.questions.map((question, index) => {
                return (
                  <Link href={`/question?id=${question.id}`} key={index}>
                    <ListGroupItem
                      bsStyle={question.answer === null ? 'danger' : 'success'}
                    >
                      {question.title}: {question.answer}
                    </ListGroupItem>
                  </Link>
                )
              })}
            </ListGroup>
          </Jumbotron>
        </Grid>
      </div>
    )
  }
}

Report.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      answer: PropTypes.any,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
}

export default Report
