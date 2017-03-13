import { connect } from 'react-redux'

import Navigation from '../../components/Navigation'

export default connect(
  state => {
    return {
      questions: state.questions
    }
  }
)(Navigation)
