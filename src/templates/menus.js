import React from 'react';

import {Layout} from '../components/index';

export default class Menus extends React.Component {
  render() {
    console.log(this.props.pageContext.menus);
    return (
      <Layout {...this.props}>

      </Layout>
    );
  }
}
