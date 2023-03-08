import React from "react";
import { ReactComponent as PuceColineMichon } from "../svg/PUCE_ColineMichon_Osteo.svg";

const Home = () => {
  return (
    <>
      <section className="home">
        <section className="puce">
          <PuceColineMichon />
        </section>
        <section className="main">
          <div className="imgCabinetOsteo">
            {" "}
            <img
              src="../../../img/cabinetOsteoColineMichon(1).jpeg"
              alt="Cabinet d'Ostéopathie de Coline Michon"
              className="cabinetOsteo"
            />
            {/* <img
              src="../../../img/cabinetOsteoColineMichon(2).jpeg"
              alt="Cabinet d'Ostéopathie de Coline Michon"
              className="cabinetOsteo"
            /> */}
          </div>
          <div className="coordonnees">
            <p className="name">Coline Michon</p>
            <p className="exclusive"> Ostéopathe exclusif</p>
            <p className="centre">Centre Plénitude</p>
            <p className="adress">73, rue de la République </p>
            <p className="access">(Accès par le 123, rue du Mont Joly)</p>
            <p className="sallanches">74700 Sallanches</p>
          </div>
          <a href="tel: +33782920926" className="phone">
            {" "}
            07 82 92 09 26
          </a>
          <p className="description">
            {" "}
            Installée à Sallanches au coeur du Pays du Mont Blanc Coline Michon
            est diplômée du Collège Ostéopathique Sutherland depuis 2014
          </p>{" "}
          {/* <a
            href="https://www.doctolib.fr/osteopathe/sallanches/coline-michon"
            target="_blank"
            rel="noreferrer"
            className="doctoLink"
          >
            → PRENDRE RDV
          </a> */}
          <a
            href="https://www.doctolib.fr/osteopathe/sallanches/coline-michon/"
            target="blank"
            className="doctoLink"
          >
            Prise de rdv sur {""}
            <img
              className="doctoImg"
              src="https://pro.doctolib.fr/external_button/doctolib-blue-transparent.png"
              alt="Doctolib"
            />
          </a>
          <div className="practice">
            <p>Ma pratique et mon approche ostéopathique :</p>
            <p>
              • Spécifiquement formée en ostéopathie pour les femmes enceintes,
              les nourrissons (tête plate ou plagiocéphalie, problèmes
              d’allaitement, coliques, troubles du sommeil etc) et les enfants,
              j’interviens également auprès des adultes pour les troubles
              digestifs, gynécologiques, urinaires, maux de têtes, vertiges et
              bien évidemment pour les troubles articulaires et musculaires
              (cervicalgies, lombalgies, tendinites, entorses…).
            </p>
            <p>
              {" "}
              • Je pratique une ostéopathie dite fonctionnelle, qui comprend des
              techniques crâniennes, viscérales, tissulaires et
              musculo-squelettiques. Cette approche douce prenant en compte la
              globalité du corps permet de soulager un grand nombre de douleurs
              et de symptômes. Elle permet de traiter tout type de patient, du
              nourrisson au senior, mais aussi la femme enceinte et le sportif
            </p>
            <p>
              {" "}
              • En pratique, le corps a une grande capacité d’adaptation et
              accumule continuellement les différentes contraintes qu’on lui
              inflige (coup, chute, mauvaise position, mauvaise alimentation,
              opération chirurgicale, stress, fatigue, etc). Lorsqu’il est trop
              fatigué ou lorsqu’il a dû s'adapter à un trop grand nombre de
              contraintes, il n’est plus capable d’en supporter d’autres. C’est
              alors que la douleur se manifeste, même si le facteur déclenchant
              paraît anodin.
            </p>
            <p>
              • Il est possible de prévenir l’apparition de ces douleurs aiguës
              en se rendant chez son ostéopathe une à deux fois par an, afin de
              traiter les tensions et pertes de mobilités déjà présentes.
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
