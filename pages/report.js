import withRedux from 'next-redux-wrapper'
import React from 'react'

import Page from '../components/Page'
import Report from '../containers/Report'
import initStore from '../store'

class ReportPage extends React.Component {
  render () {
    return (
      <Page>
        <Report />
      </Page>
    )
  }
}

export default withRedux(initStore)(ReportPage)
