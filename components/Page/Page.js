import Head from 'next/head'
import React, { PropTypes } from 'react'

import Navigation from '../../containers/Navigation'

class Page extends React.Component {
  render () {
    return (
      <div>
        <Head>
          <title>Housing Calculator</title>
          <meta charSet='utf-8' />
          <meta
            content='initial-scale=1.0, width=device-width'
            name='viewport'
          />
          <link
            href='https://bootswatch.com/cosmo/bootstrap.min.css'
            rel='stylesheet'
          />
        </Head>
        <Navigation />
        {this.props.children}
      </div>
    )
  }
}

Page.defaultProps = {
  title: 'Housing Calculator'
}

Page.propTypes = {
  title: PropTypes.string.isRequired
}

export default Page
