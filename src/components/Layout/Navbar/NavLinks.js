import React from 'react';
import Link from 'gatsby-link';
import { Link as SLink } from 'react-scroll';

const NavItemsSmoothLinks = ({ NavItem }) => (
  <>
    <NavItem>
      <SLink smooth offset={-70} hashSpy to="home">
        Home
      </SLink>
    </NavItem>
    <NavItem>
      <SLink smooth offset={-100} hashSpy to="about">
        Sobre mim
      </SLink>
    </NavItem>
    <NavItem>
      <SLink smooth offset={-100} hashSpy to="projects">
        Projetos
      </SLink>
    </NavItem>
    {/* <NavItem>
      <SLink smooth offset={-100} hashSpy to="creative-coding">
        Galeria
      </SLink>
    </NavItem>  */}
    {/* <NavItem>
      <SLink smooth offset={-100} hashSpy to="concepts">
        concepts
      </SLink>
    </NavItem> */}
    <NavItem>
      <SLink smooth offset={-100} hashSpy to="contact">
        Contato
      </SLink>
    </NavItem>
  </>
);

const NavItemsGatsbyLinks = ({ NavItem }) => (
  <>
    <NavItem>
      <Link to="/">Home</Link>
    </NavItem>
    <NavItem>
      <Link to="/#about">Sobre mim</Link>
    </NavItem>
    <NavItem>
      <Link to="/#projects">Projetos</Link>
    </NavItem>
    {/* <NavItem>
      <Link to="/#creative-coding">Galeria</Link>
    </NavItem>
    <NavItem>
      <Link to="/#concepts">concepts</Link>
    </NavItem>  */}
    <NavItem>
      <Link to="/#contact">Contato</Link>
    </NavItem>
  </>
);

const NavLinks = React.memo(({ NavItem }) => {
  let path = null;
  if (typeof window !== 'undefined') {
    path = window.location.pathname;
  }

  return (
    <>
      {path === '/' ? (
        <NavItemsSmoothLinks NavItem={NavItem} />
      ) : (
        <NavItemsGatsbyLinks NavItem={NavItem} />
      )}
    </>
  );
});

export default NavLinks;
