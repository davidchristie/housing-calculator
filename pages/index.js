import Link from 'next/link'
import withRedux from 'next-redux-wrapper'
import React from 'react'
import { Button, Grid, Jumbotron } from 'react-bootstrap'

import Page from '../components/Page'
import initStore from '../store'

class Index extends React.Component {
  render () {
    return (
      <Page>
        <Grid>
          <Jumbotron>
            <h1>Housing Calculator</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link href='/question?id=1'>
              <a>
                <Button bsStyle='primary'>Start</Button>
              </a>
            </Link>
          </Jumbotron>
        </Grid>
      </Page>
    )
  }
}

export default withRedux(initStore)(Index)
