import { connect } from 'react-redux'

import Question from '../../components/Question'

export default connect(
  (state, ownProps) => {
    const question = state.questions
      .find(question => question.id === ownProps.id)
    return {
      description: question.description,
      possibleAnswers: question.possibleAnswers,
      title: question.title
    }
  }
)(Question)
