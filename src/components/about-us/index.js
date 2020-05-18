import React from 'react';

import './_about-us.scss';

const AboutUs = () => (
  <section className="howto" id="howto">
      <div className="container">
          <div className="row">
              <div className="col-12">
                <h3 className="howto-title">Quienes somos</h3>
              </div>
          </div>
          <div className="row">
              <div className="col-12">
                <ul>
                  <li>
                      <a href="http://www.synergiar.com/es/" target="_blank">Synergiar</a>: empresa de desarrollo de Software que ha trabajado en proyectos para empresas como Adidas, Guia Oleo, Action Travel, entre otras.
                    </li>
                    <li>
                      Desarrollo web y mobile
                    </li>
                    <li>
                      Expertos en experiencia de usuario (UX/UI)
                    </li>
                    <li>
                      Con desarrolladores en nuestro staff como el ingeniero <a href="https://portfolio.davidpaley.now.sh/" target="_blank">David Paley</a>, senior Software developer, con mas de 10 años de experiencia en la exportacion de servicios de Software.
                    </li>
                </ul>
              </div>
          </div>
      </div>
  </section>
);

export default AboutUs;
