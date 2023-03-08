import React from "react";
import { ReactComponent as PuceColineMichon } from "../svg/PUCE_ColineMichon_Osteo.svg";

const Apropos = () => {
  return (
    <section className="aPropos">
      <section className="puce">
        <PuceColineMichon />
      </section>
      <section className="main">
        <div className="imgPortraitColineMichon">
          {" "}
          <img
            src="../../../img/PORTRAIT_DEF.jpg"
            alt="Portrait de Coline Michon"
            className="portrait"
          />
        </div>
        <section className="formation">
          <div className="formationInitiale">
            <p> • Formation initiale en 5 années</p>
            <p>
              {" "}
              → Diplômée du COS, école agréée par le ministère de la Santé.
            </p>{" "}
            <p>
              → Formation au sein de la maternité des Diaconesses avec Damien
              Moreau pour la prise en charge des nourrissons et des femmes en
              post partum.
            </p>
          </div>

          <div className="formationsComplémentaires">
            • Formations complémentaires
            <p>→ Périnatalité Ostéonat</p>
            <p>→ Ostéopathie endocrinienne Valérie Nammer CFPCO</p>
            <p>
              {" "}
              → Sphères pédiatrique, gynécologique et obstétricale, Centre YGY,
              Catherine Rybus
            </p>
            <p>
              {" "}
              → Fertilité, gynécologie, sexualité et contraception, Élisa
              Boillot
            </p>{" "}
            <p>→ Douleurs aiguës du rachis, Thierry Collot CFPCO</p>
            <p>
              {" "}
              → Freins de langue du nourrisson, Centre allaitement Véronique
              Darmangeat{" "}
            </p>
            <p>
              → Les troubles de la succion du nourrisson (troubles
              mandibulaires, freins restrictifs, préparation à la frenectomie),
              Centre YGY, Charlotte Bergerot Pallisco
            </p>
            <p>
              → Prise en charge des troubles de la fertilité en cabinet
              d’ostéopathie, OPYA institut
            </p>
          </div>

          <div className="benevolat">
            • Bénévole de 2013 à 2016 dans deux associations :
            <p>→ EHEO (enfants handicapés espoir ostéopathie)</p>{" "}
            <p>
              {" "}
              → Corp’Ostéo (soins ostéopathiques pour des personnes en
              difficultés bénéficiaires des CHRS, pensions de familles, UAPE…)
            </p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Apropos;
