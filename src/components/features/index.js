import React from 'react';
import './_features.scss';

import { StaticQuery, graphql } from 'gatsby';

const Features = () => (
    <StaticQuery
        query={ graphql`
      query FeaturesQuery {
        allDataJson {
          edges {
            node {
              features {
                title
              }
            }
          }
        }
      }
    ` }
        render={ (data) => (
            <section className="features" id="features">
              <div className="featureContainer container1">
                <div className="featureDescription fd1">
                  <h3 className="textAlign">Ver recitales desde tu casa</h3>
                  <span className="textAlign">Permite la transmicion <strong>en vivo</strong> de conciertos</span>
                </div>
                <div className="imgClass img1" />
              </div>
              <div className="featureContainer container2">
                <div className="featureDescription fd2">
                  <h3 className="textAlign">Lo mejor para los artistas</h3>
                  <span className="textAlign">El musico puede dar un concierto desde la comodidad de su hogar</span>
                </div>
                <div className="imgClass img2" />
              </div>
              <div className="featureContainer container1">
                <div className="featureDescription fd1">
                  <h3 className="textAlign">Nuevas experiencias</h3>
                  <span className="textAlign">Los fanaticos tienen la posibilidad de disfrutar a su artista favorito incluso en el medio de la pandemia</span>
                </div>
                <div className="imgClass img3" />
              </div>
              <div className="featureContainer container2">
                <div className="featureDescription fd2">
                  <h3 className="textAlign">Soluciones Economicas</h3>
                  <span className="textAlign">Los musicos siguen teniendo un ingreso</span>
                </div>
                <div className="imgClass img4" />
              </div>
              <div className="featureContainer container1">
                <div className="featureDescription fd1">
                  <h3 className="textAlign">Hablando con el publico</h3>
                  <span className="textAlign">Distintos tipos de entradas con distintos niveles de interaccion con el artista</span>
                </div>
                <div className="imgClass img5" />
              </div>
                {/* <div className="row">
                  <div className="col-12">
                    <h3 className="features-title">El Netflix de los recitales!</h3>
                  </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ul className="features-list">
                            {data.allDataJson.edges[0].node.features.map((item, i) => (
                                <li className="features-list-item" key={ i }>
                                    {item.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div> */}
            </section>
        ) } />
);

export default Features;
