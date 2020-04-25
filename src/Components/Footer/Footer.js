import React from 'react';
import styles from './footer.module.css';
import '../../App.css';

function Footer() {
  return (
    <div className={styles.footer_container}>
      <p>
        This platform was built as part of the pan-European Hackathon{' '}
        <a href="https://euvsvirus.org/" target="_blank" rel="noopener noreferrer">
          #EUvsVirus
        </a>{' '}
        <a href="https://github.com/edieblu/concrete-wow" target="_blank" rel="noopener noreferrer">
          <i style={{ fontSize: '20px', marginLeft: '3rem' }} className="fa fa-github"></i>
        </a>{' '}
      </p>
    </div>
  );
}

export default Footer;
