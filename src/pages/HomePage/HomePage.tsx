import React from 'react';
import Pikatchu from '../../images/pikachu.png';
import styles from './homePage.module.scss';

const HomePage = () => (
  <section className="section">
    <div className={styles.container}>
      <div className={styles.column}>
        <h1 className={styles.title}>About the Pokémon Company International</h1>
        <p className={styles.text}>
          {`The Pokémon Company International, a subsidiary of The Pokémon Company in Japan, manages the property
        outside of Asia and is responsible for brand management, licensing, marketing, the Pokémon Trading Card
        Game, the animated TV series, home entertainment, and the official Pokémon website. Pokémon was launched
        in Japan in 1996 and today is one of the most popular children's entertainment properties in the world.`}
        </p>
      </div>
      <div className="column">
        <img src={Pikatchu} alt="Pikatchu" width={300} />
      </div>
    </div>
  </section>
);

export default HomePage;
