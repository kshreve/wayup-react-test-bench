import React, { PureComponent } from 'react';

import styles from './Home.scss';

class Home extends PureComponent {
  render() {
    return (
      <div className={styles.exampleOutput}>
        <h1>
                    Let&apos;s Get
          <span className="emphasize">Started</span>
        </h1>
        <p>If you see this screen, it means you are all setup \o/</p>
      </div>
    );
  }
}

export default Home;
