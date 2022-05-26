import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetPokemonByNameQuery } from '../../store/api/pokemon';
import styles from './pokemonPage.module.scss';
import FlameAnimation from '../../images/flame(animation).gif';
import Flame from '../../images/flame.png';

const PokemonPage = () => {
  const { nameId } = useParams();
  const {
    data, isLoading, isError, isSuccess,
    // @ts-ignore
  } = useGetPokemonByNameQuery(nameId);
  const navigate = useNavigate();

  console.log(data && data);

  return (
    <section className="section">
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Error!!!</h1>}
      {data && isSuccess && (
      <div className={styles.container}>
        <div className={styles.buttonBox}>
          <button
            className={styles.button}
            title="Previous pokemon"
            hidden={data && data.id === 1}
            onClick={() => navigate(`/pokemon/${data && data.id - 1}`)}
          >
            <div className="button rotated__prev">
              <img src={Flame} alt="Card Back" width={100} />
              <img src={FlameAnimation} className="img-top" alt="Card Front" width={100} />
            </div>
          </button>
        </div>
        <div className={styles.card}>
          <div className={styles.right__row}>
            <img src={data.sprites.other.dream_world.front_default} alt={data.name} width={300} />
          </div>
          <div className={styles.left__row}>
            <h1 className={styles.title}>{data.name.toUpperCase()}</h1>
            <div className={styles.listItems}>
              <h3 className={styles.explanation}>Base experience:</h3>
              <h2 className={styles.information}>{data.base_experience}</h2>
            </div>
            <div className={styles.listItems}>
              <h3 className={styles.explanation}>Weight:</h3>
              <h2 className={styles.information}>{data.weight}</h2>
            </div>
            <div className={styles.listItems}>
              <h3 className={styles.explanation}>Height:</h3>
              <h2 className={styles.information}>{data.height}</h2>
            </div>
          </div>
        </div>
        <div className={styles.buttonBox}>
          <button
            className={styles.button}
            title="Next pokemon"
            hidden={data && data.id === 1126}
            onClick={() => navigate(`/pokemon/${data && data.id + 1}`)}
          >
            <div className="button rotated__next">
              <img src={Flame} alt="Card Back" width={100} />
              <img src={FlameAnimation} className="img-top" alt="Card Front" width={100} />
            </div>
          </button>
        </div>
      </div>
      )}
    </section>
  );
};

export default PokemonPage;
