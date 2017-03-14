import { connect } from 'react-redux'

import { setAnswer } from '../../actions/questions'
import Question from '../../components/Question'

export default connect(
  (state, ownProps) => {
    const question = state.questions
      .find(question => question.id === ownProps.id)
    return {
      answer: question.answer,
      description: question.description,
      possibleAnswers: question.possibleAnswers,
      title: question.title
    }
  },
  (dispatch, ownProps) => {
    return {
      setAnswer: answer => dispatch(setAnswer(ownProps.id, answer))
    }
  }
)(Question)
