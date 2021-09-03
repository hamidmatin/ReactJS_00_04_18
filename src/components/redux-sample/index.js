import React from 'react'
import Layout from '../../containers/layout'
import ReduxCC from './redux-cc'
import ReduxFC from './redux-fc'

export const ReduxSampleIndex = () => {
  return (
    <Layout title='Redux Sample'>
      <ReduxCC title='Class Component Redux Sample'/>
      <hr />
      <ReduxFC title='Function Component Redux Sample' />
    </Layout>
  )
}
