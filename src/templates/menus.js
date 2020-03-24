import React from 'react';

import {Layout} from '../components/index';

export default class Blog extends React.Component {
  render() {
    console.log(this.props.pageContext.menus);
    return (
      <Layout {...this.props}>

      </Layout>
    );
  }
}
