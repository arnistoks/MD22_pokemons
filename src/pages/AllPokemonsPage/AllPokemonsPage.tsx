import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetAllPokemonsQuery } from '../../store/api/pokemon';
import styles from './allPokemonsPage.module.scss';
import Flame from '../../images/flame.png';
import FlameAnimation from '../../images/flame(animation).gif';

const imgBaseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

const AllPokemonsPage = () => {
  // const storeData = useSelector((store) => store);
  // console.log('StoreData:', storeData);
  // const allPokemons = useGetAllPokemonsQuery();
  // console.log('AllPokemons:', allPokemons);

  const [offset, setOffset] = useState(0);

  const {
    data, isLoading, isError, isSuccess,
  } = useGetAllPokemonsQuery(offset);
  const navigate = useNavigate();

  // console.log(data);

  return (
    <section className="section">
      <div className={styles.pagination}>
        <div className={styles.buttonBox}>
          <button
            className={styles.button}
            title="Previous 20 pokemons"
            hidden={offset === 0}
            onClick={() => setOffset(offset - 20)}
          >
            <div className="button rotated__prev">
              <img src={Flame} alt="Card Back" width={100} />
              <img src={FlameAnimation} className="img-top" alt="Card Front" width={100} />
            </div>
          </button>
        </div>
        <div className={styles.buttonBox}>
          <button
            className={styles.button}
            title="Next 20 pokemons"
            hidden={offset === 600}
            onClick={() => setOffset(offset + 20)}
          >
            <div className="button rotated__next">
              <img src={Flame} alt="Card Back" width={100} />
              <img src={FlameAnimation} className="img-top" alt="Card Front" width={100} />
            </div>
          </button>
        </div>
      </div>
      <div className={styles.container}>
        {isLoading && <h1>Loading...</h1>}
        {isError && <h1>Error!!!</h1>}
        {data && isSuccess && data.results && data.results.map(({ name, url }) => {
          const pokemonId = url.split('/')[6];

          return (
            <div
              key={name}
              className={styles.card}
            >
              <h1 className={styles.title}>{name.toUpperCase()}</h1>
              <div className={styles.imageBox}>
                <img
                  src={`${imgBaseUrl}${pokemonId}.svg`}
                  alt={name}
                  width="200"
                />
              </div>
              <button
                className={styles.button__showMore}
                onClick={() => navigate(`/pokemon/${name}`)}
              >
                Show more
              </button>
            </div>
          );
        })}
      </div>
      <div className={styles.pagination}>
        <div className={styles.buttonBox}>
          <button
            className={styles.button}
            title="Previous 20 pokemons"
            hidden={offset === 0}
            onClick={() => setOffset(offset - 20)}
          >
            <div className="button rotated__prev">
              <img src={Flame} alt="Card Back" width={100} />
              <img src={FlameAnimation} className="img-top" alt="Card Front" width={100} />
            </div>
          </button>
        </div>
        <div className={styles.buttonBox}>
          <button
            className={styles.button}
            title="Next 20 pokemons"
            hidden={offset === 600}
            onClick={() => setOffset(offset + 20)}
          >
            <div className="button rotated__next">
              <img src={Flame} alt="Card Back" width={100} />
              <img src={FlameAnimation} className="img-top" alt="Card Front" width={100} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllPokemonsPage;
