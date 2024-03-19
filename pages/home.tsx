import type { NextPage } from "next";
import LogoFrame from "../components/logo-frame";
import FrameComponent1 from "../components/frame-component";
import Group from "../components/group";
import ContactFrame from "../components/contact-frame";
import NestedFrames from "../components/nested-frames";
import CopyrightNotice from "../components/copyright-notice";
import ThreeVectors from "../components/three-vectors";
import styles from "./home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.frame} />
      <div className={styles.homeChild} />
      <LogoFrame />
      <FrameComponent1 />
      <div className={styles.vector}>
        <div className={styles.sobreParent}>
          <h1 className={styles.sobre}>SOBRE</h1>
          <h1 className={styles.ns}>NÓS</h1>
        </div>
        <div className={styles.bemVindoAssociaoContainer}>
          <p
            className={styles.bemVindoAssociao}
          >{`Bem-vindo à Associação de Estudantes, onde cada capítulo conta uma história `}</p>
          <p
            className={styles.nicaECada}
          >{`única e cada estudante é um protagonista em nossa jornada coletiva. Somos mais `}</p>
          <p
            className={styles.queUmaLista}
          >{`que uma lista; somos uma comunidade vibrante, forjada pela paixão, inclusão e `}</p>
          <p
            className={styles.ambioAquiCada}
          >{`ambição. Aqui, cada elo humano compõe o tecido de nossa trajetória, e cada sonho `}</p>
          <p
            className={styles.alimentaNossaChama}
          >{`alimenta nossa chama coletiva. Juntos, celebramos a diversidade, cultivamos `}</p>
          <p
            className={styles.excelnciaAcadmicaE}
          >{`excelência acadêmica e trilhamos um caminho de aprendizado, onde cada passo `}</p>
          <p
            className={styles.umaConquistaCompartilhada}
          >{`é uma conquista compartilhada. `}</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.contemconosco}>
            <b>{`#ContemConosco `}</b>
          </p>
        </div>
      </div>
      <img
        className={styles.maskGroupIcon}
        loading="lazy"
        alt=""
        src="/mask-group@2x.png"
      />
      <section className={styles.line}>
        <div className={styles.vector1}>
          <div className={styles.rectangleParent}>
            <img className={styles.rectangleIcon} alt="" src="/rectangle.svg" />
            <button className={styles.path}>
              <div className={styles.pathChild} />
              <b className={styles.letsGetIn}>LET’S GET IN TOUCH</b>
            </button>
          </div>
        </div>
      </section>
      <img className={styles.textIcon} alt="" src="/text.svg" />
      <Group />
      <img className={styles.headerGroupIcon} alt="" src="/header-group.svg" />
      <img className={styles.vectorFrameIcon} alt="" src="/vector-frame.svg" />
      <ContactFrame />
      <div className={styles.component3} />
      <NestedFrames />
      <CopyrightNotice />
      <ThreeVectors />
    </div>
  );
};

export default Home;
