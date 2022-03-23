import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];
  return (
    <div className="container-fluid">
      <div className="row py-3">

        <div className="col-8">
          <h1> Math Magicians </h1>
        </div>
        <nav className="col-4 my-1">
          <div className="d-flex flex-nowrap justify-content-around align-items-baseline">

            {links.map((link, index) => (
              index === links.length - 1
                ? (
                  <NavLink key={link.id} to={link.path}>
                    {link.text}
                  </NavLink>
                ) : (
                  <React.Fragment key={link.id}>
                    <NavLink to={link.path}>
                      {link.text}
                    </NavLink>
                    <p>|</p>
                  </React.Fragment>
                )
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
