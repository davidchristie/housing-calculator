import { connect } from 'react-redux'

import Report from '../../components/Report'

export default connect(
  state => {
    return {
      questions: state.questions
    }
  }
)(Report)
