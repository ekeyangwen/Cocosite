import React, { useState } from "react";
import { ReactComponent as PuceColineMichon } from "../svg/PUCE_ColineMichon_Osteo.svg";

const InfosPratiquesCabinetColineMichon = () => {
  const [mapInitialColor, setMapInitialColor] = useState(
    "../../../img/MAP_NB_cabinetOsteo.jpg"
  );

  const changeColor = () => {
    if (mapInitialColor) {
      setMapInitialColor("../../../img/MAP_cabinetOsteo.jpg");
    }
  };

  const returnInitialcolor = () => {
    setMapInitialColor("../../../img/MAP_NB_cabinetOsteo.jpg");
  };

  return (
    <section className="mapAndInfos">
      <section className="puce">
        <PuceColineMichon />
      </section>
      <div className="map">
        <a
          href="https://goo.gl/maps/PDdixQRhR2qUvuuF7"
          className="mapLink"
          rel="noreferrer"
          target="_blank"
        >
          <img
            className="mapImg"
            src={mapInitialColor}
            alt="Carte du cabinet de Coline Michon"
            onMouseOver={changeColor}
            onMouseOut={returnInitialcolor}
          />
        </a>
      </div>
      <div className="infos">
        <div className="coordonnees">
          <p className="centre">Centre Plénitude</p>
          <p className="adress">73, rue de la République </p>
          <p className="access">(Accès par le 123, rue du Mont Joly)</p>
          <p className="sallanches">74700 Sallanches</p>
        </div>
        <a href="tel: +33782920926" className="phone">
          {" "}
          07 82 92 09 26
        </a>
        <div className="doctolib">
          <a
            href="https://www.doctolib.fr/osteopathe/sallanches/coline-michon/"
            target="blank"
            className="doctoLink"
          >
            Prise de rdv {""}
            <img
              className="doctoImg"
              src="https://pro.doctolib.fr/external_button/doctolib-blue-transparent.png"
              alt="Doctolib"
            />
          </a>
        </div>
        <p>
          Consultations d’ostéopathie 60 euros, paiement par chèque ou espèces.
        </p>
        <ul>
          <li>
            Une consultation dure entre 3/4 d’heure et 1 heure en fonction de la
            problématique.
          </li>
          <li>Le tarif est le même pour les bébés, enfants et les adultes.</li>
          <li>
            {" "}
            Vous pouvez demander une facture afin de faire prendre en charge
            tout ou partie du prix par votre mutuelle
          </li>
        </ul>
      </div>
    </section>
  );
};

export default InfosPratiquesCabinetColineMichon;
