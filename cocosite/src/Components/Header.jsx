import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const handleShowList = () => {
    setShowNav(!showNav);
    if (window.onclick) {
      setShowNav(!showNav);
    }
  };

  return (
    <section className="header">
      <section className="upperHeader">
        <div className="nameAndWork">
          <NavLink className="returnHome" to="/">
            {" "}
            <p className="name">Coline Michon</p>
            <ul className="workList">
              <li className="work">Ostéopathe D.O</li>
            </ul>{" "}
          </NavLink>
        </div>
      </section>
      <section className="menuNav">
        <nav className="menu">
          <ul className="menuNavItem">
            <NavLink className="navItem" to="/">
              <li className="accueil">Accueil</li>
            </NavLink>
            <NavLink className="navItem" to="/aproposdeColineMichon">
              <li className="aProposDeColineMichon">À propos de moi</li>
            </NavLink>
            <NavLink className="navItem" to="/pourquoiConsulterOsteo">
              <li className="consultations">Pourquoi consulter ?</li>
            </NavLink>

            <NavLink
              className="navItem"
              to="/infosPratiquesCabinetColineMichon"
            >
              <li className="informations">Infos pratiques</li>
            </NavLink>
            <NavLink className="navItem" to="/liensColineMichon">
              <li className="liensUtiles">Liens</li>
            </NavLink>
          </ul>
        </nav>
      </section>

      <div className="logoAndNav-responsive">
        <div className="menuList">
          <button onClick={handleShowList}>
            <img
              src="../../../img/boutonMenuBurger.png"
              alt="Menu hamburger"
              className="hamburgerNav"
            />
          </button>

          <aside className={`${showNav ? "showLinks" : "hideLinks"}`}>
            <ul id="hiddenMenu">
              <NavLink className="accueilNavItem" to="/">
                <li className="accueil" onClick={handleShowList}>
                  Accueil
                </li>
              </NavLink>
              <NavLink className="navItem" to="/aproposdeColineMichon">
                <li className="apropos" onClick={handleShowList}>
                  À propos de moi
                </li>
              </NavLink>
              <NavLink className="navItem" to="/pourquoiConsulterOsteo">
                <li className="pourquoiConsulter" onClick={handleShowList}>
                  Pourquoi consulter?
                </li>
              </NavLink>
              <NavLink
                className="infosPratique"
                to="/infosPratiquesCabinetColineMichon"
              >
                <li className="infos" onClick={handleShowList}>
                  Infos pratiques
                </li>
              </NavLink>{" "}
              <NavLink
                className="navItem"
                to="/liensColineMichon"
                onClick={handleShowList}
              >
                <li className="liens">Liens</li>
              </NavLink>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Header;
