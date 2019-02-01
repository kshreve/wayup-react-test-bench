import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.scss';

class Header extends PureComponent {
  render() {
    const { location } = this.props;
    const { pathname } = location;

    const isHome = pathname === '/';
    const isJustAnotherPage = pathname === '/page';
    const counterPage = pathname === '/counter';
    const chucknorrisPage = pathname === '/chucknorris';

    return (
      <header className={styles.globalHeader}>
        <ul>
          <li className={!isHome ? styles.active : ''}>
            {
                            isHome
                              ? 'Home' : <Link to="/">Home</Link>

                        }
          </li>
          <li className={!isJustAnotherPage ? styles.active : ''}>
            {
                            isJustAnotherPage
                              ? 'Just Another Page' : <Link to="/page">Just Another Page</Link>
                        }
          </li>
          <li className={!counterPage ? styles.active : ''}>
            {
                            counterPage
                              ? 'counter Page' : <Link to="/counter">counterPage</Link>
                        }
          </li>
          <li className={!chucknorrisPage ? styles.active : ''}>
            {
                            chucknorrisPage
                              ? 'chucknorrisPage' : <Link to="/chucknorris">chucknorrisPage</Link>
                        }
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
