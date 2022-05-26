import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetAllPokemonsQuery } from '../../store/api/pokemon';
import styles from './allPokemonsPage.module.scss';
import Flame from '../../images/flame.png';
import FlameAnimation from '../../images/flame(animation).gif';

const imgBaseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';

const AllPokemonsPage = () => {
  // const storeData = useSelector((store) => store);
  // console.log('StoreData:', storeData);
  // const allPokemons = useGetAllPokemonsQuery();
  // console.log('AllPokemons:', allPokemons);

  const {
    data, isLoading, isError, isSuccess,
  } = useGetAllPokemonsQuery();
  const navigate = useNavigate();

  // console.log(data);

  return (
    <section className="section">
      {/* <div className={styles.pagination}> */}
      {/*  <div className={styles.buttonBox}> */}
      {/*    <button */}
      {/*      className={styles.button} */}
      {/*      title="Previous 20 pokemons" */}
      {/*      hidden={data && data.id === 1} */}
      {/*      onClick={() => navigate(`/pokemon/${data && data.id - 1}`)} */}
      {/*    > */}
      {/*      <div className="button rotated__prev"> */}
      {/*        <img src={Flame} alt="Card Back" width={100} /> */}
      {/*        <img src={FlameAnimation} className="img-top" alt="Card Front" width={100} /> */}
      {/*      </div> */}
      {/*    </button> */}
      {/*  </div> */}
      {/*  <div className={styles.buttonBox}> */}
      {/*    <button */}
      {/*      className={styles.button} */}
      {/*      title="Next 20 pokemons" */}
      {/*        // hidden={data && data.id === 1} */}
      {/*        // onClick={() => navigate(`/pokemon/${data && data.id + 1}`)} */}
      {/*    > */}
      {/*      <div className="button rotated__next"> */}
      {/*        <img src={Flame} alt="Card Back" width={100} /> */}
      {/*        <img src={FlameAnimation} className="img-top" alt="Card Front" width={100} /> */}
      {/*      </div> */}
      {/*    </button> */}
      {/*  </div> */}
      {/* </div> */}
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
    </section>
  );
};

export default AllPokemonsPage;
