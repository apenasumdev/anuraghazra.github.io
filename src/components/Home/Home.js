import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import svgRect from '@src/static/home_rect.svg';

import { HeroCard } from './HeroCard';
import { HomeWrapper, Intro } from './Home.style';

import IconLink from '@common/IconLink';
import PageHeader from '@common/PageHeader';
import Flex from '@common/Flex';
import Button from '@common/Button';

import { Card, CardIcon, CardText, CardTitle } from '@common/Card';

const ThingsILove = () => (
  <Flex justify="space-between" align="center">
    <Card>
      <CardIcon>
        <FontAwesomeIcon icon="code" />
      </CardIcon>
      <CardTitle>FrontEnd</CardTitle>
      <CardText>
        Adoro aprender coisas novas com Reactjs e também
        HTML, CSS.
      </CardText>
    </Card>

    <Card>
      <CardIcon>
        <FontAwesomeIcon icon={['fab', 'js']} />
      </CardIcon>
      <CardTitle>Javascript</CardTitle>
      <CardText>
        Eu amo javascript, foi a porta de tudo para mim.
      </CardText>
    </Card>

    <Card>
      <CardIcon>
        <FontAwesomeIcon icon="paint-brush" />
      </CardIcon>
      <CardTitle>Criador codes</CardTitle>
      <CardText>
        Eu amo criar comandos. fazer com que um codigo funcione e ver as pessoas usando é muito satisfatório para mim.
      </CardText>
    </Card>
  </Flex>
);

const Home = () => {
  return (
    <HomeWrapper id="home">
      <img className="svg-rect" src={svgRect} alt=""></img>

      <Intro>
        {/* <Parallax y={[50, -50]} className="home__text"> */}
        <div className="home__text">
          <p>Hello, I’m</p>
          <h1>Vinicius Souza</h1>
          <p className="adjust">UM CURIOSO NO MUNDO DA PROGRAMAÇÃO</p>

          <div className="home__CTA">
            <Button className="cta" as="a" href="#">
              Download Resume 
            </Button>

            <div className="home__social">
              <IconLink
                label="github"
                icon={['fab', 'github']}
                href="//github.com/souzx17"
              />
              {/* <IconLink
                label="twitter"
                icon={['fab', 'twitter']}
                href="//twitter.com/"
              /> */}
            </div>
          </div>
        </div>
        {/* </Parallax> */}
        <HeroCard />
      </Intro>

      {/* Things I LOVE */}
      <PageHeader style={{ marginBottom: 30 }}>
        Eu amo <i className="fas fa-heart" />
      </PageHeader>
      <ThingsILove />
    </HomeWrapper>
  );
};

export default Home;
