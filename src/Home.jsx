import React from 'react';
import imgNight from './assets/undraw_relaunch_day_902d.png';
import imgDay from './assets/undraw_Walking_outside_re_56xo.png';
import { MainContainer } from './HomeStyle';
import { Link } from 'react-router-dom';

function Home() {
  const getDate = () => {
    const date = new Date();
    const hours = date.getHours();

    if (hours >= 12 && hours < 18) {
      return (
        <>
          <p>Boa tarde!</p>
          <img src={imgDay} alt="imagem ilustrativa do dia" />
        </>
      );
    } else if (hours >= 18 || hours < 6) {
      return (
        <>
        <p>Boa noite!</p>
          <img src={imgNight} alt="imagem ilustrativa da noite" />
        </>
      );
    } else {
      return (
        <>
        <p>Bom dia!</p>
          <img src={imgDay} alt="imagem ilustrativa do dia" />
        </>
      );
    }
  };

  return (
    <>
    <MainContainer>
      <article>
        <h1>"A tecnologia move o mundo!"</h1>
        <h2>Steve Jobs</h2>
      </article>
      {getDate()}
      <Link to="/login"><button>Começar</button></Link>
    </MainContainer>
    </>
  );
}

export default Home;
