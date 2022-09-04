import React from 'react';

import SkewBg from '@common/SkewBg';
import PageHeader from '@common/PageHeader';
import Flex from '@common/Flex';

import Quote from './Quote';
import Avatar from './Avatar';

import { AboutWrapper, AboutInfo } from './About.style';

const About = () => {
  return (
    <AboutWrapper id="about">
      <PageHeader>Sobre mim</PageHeader>
      <SkewBg />
      <AboutInfo>
        <div>
          <Avatar src="eukkkj.png" />
        </div>
        <p>
          Olá, eu sou Vinicius Souza virtualmente conhecido como souzx17
          moro no brasil em uma cidadezinha da Bahia, atualmente administro{' '}
          <a className="about__link" href="https://x17apis.herokuapp.com/">
            X17 APIS
          </a>{' '}
          <br />
          <br />Tenho grande prazer em passar parte do tempo aprendendo codigos novos <b>
            <br />Desenvolvendo Bots discord ou Whatsapp e também paginas web.</b>
          <br />Meu primeiro contato com programação foi com o php, quando eu tinha apenas 13 anos, mas como era muito novo e isso iria me gastar tempo eu não tinha como continuar pois precisava estudar. <br />
          <b>Eu não sou o expert do php e muito menos das outras linguagens de programação mas ajudo com oque eu souber, simplesmente aprendo apenas por diversão e prazer.</b>
        </p>
      </AboutInfo>

      <Flex justify="space-between" className="quotes__wrapper">
        <Quote>
          <i>- Roronoa Zoro</i>
          <p>“Não importa o que o mundo diz de mim, o que importa é que eu nunca fiz nada que contrariasse os meus princípios e nunca farei.“</p>
        </Quote>
        <Quote>
          <i>- xxxtentacion</i>
          <p>
            “Preste atenção ao que você está fazendo em sua vida
            Porque sua vida está bem na sua frente.“
          </p>
        </Quote>
        <Quote>
          <p>
            “Uh, sama lamaa duma lamaa hsajsh fdmfweawq
            bnwjhrjh3w jdkahdkahda
            djwke j2je2.”
          </p>
          <i>- Eminem</i>
        </Quote>
      </Flex>
    </AboutWrapper>
  );
};

export default About;
