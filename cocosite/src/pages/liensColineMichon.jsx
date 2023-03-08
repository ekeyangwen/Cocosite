import { ReactComponent as PuceColineMichon } from "../svg/PUCE_ColineMichon_Osteo.svg";

const LiensColineMichon = () => {
  return (
    <section className="liens">
      <section className="puce">
        <PuceColineMichon />
      </section>
      <section className="main">
        <ul className="links">
          <li>
            <p className="linkTitle">Centre Plénitude</p>
            <p className="linkDescription">
              Situé en plein cœur de Sallanches le Centre Plénitude regroupe de
              nombreux thérapeutes travaillant régulièrement ensemble autour du
              bien être de leurs patients (Psychologues, hypnothérapeute,
              réflexologue plantaire et crânnienne, sophrologie, thérapies
              familiales, esthéticienne...)
            </p>
            <a
              href="https://centreplenitude74.wixsite.com/sallanches"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              → https://centreplenitude74.wixsite.com/sallanches
            </a>
          </li>
          <li>
            <p className="linkTitle">Chaine Youtube YGY for you</p>
            <p className="linkDescription">
              Conseils et tutoriels d’ostéopathes sur le thème de la grossesse,
              du nourrisson et du post partum
            </p>{" "}
            <a
              href="https://www.youtube.com/@YGYforYOU"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              → www.youtube.com/@YGYforYOU
            </a>
          </li>
          <li>
            <p className="linkTitle">
              Association Française de lutte contre l’endométriose
            </p>
            <p className="linkDescription">
              Informations et conseils sur l'endométriose
            </p>
            <a
              href="https://www.endofrance.org"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              → www.endofrance.org
            </a>
          </li>{" "}
        </ul>
      </section>
    </section>
  );
};

export default LiensColineMichon;
