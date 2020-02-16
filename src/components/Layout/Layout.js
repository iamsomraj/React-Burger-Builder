import React from 'react';
import Aux from '../../hoc/Auxx';
import Classes from './Layout.module.css';

const Layout = props => {
  return (
    <Aux>
      <div>Toolbar, Sidedrawer, Backdrop </div>
      <main className={Classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
