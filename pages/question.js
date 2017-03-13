import withRedux from 'next-redux-wrapper'
import React from 'react'

import Page from '../components/Page'
import Question from '../containers/Question'
import initStore from '../store'

class QuestionPage extends React.Component {
  static getInitialProps ({ query: { id } }) {
    return {
      id: Number(id)
    }
  }

  render () {
    return (
      <Page>
        <Question id={this.props.id} />
      </Page>
    )
  }
}

export default withRedux(initStore)(QuestionPage)
