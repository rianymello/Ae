import type { NextPage } from "next";
import LogoFrame from "../components/logo-frame";
import FrameComponent1 from "../components/frame-component";
import Group from "../components/group";
import ContactFrame from "../components/contact-frame";
import NestedFrames from "../components/nested-frames";
import CopyrightNotice from "../components/copyright-notice";
import ThreeVectors from "../components/three-vectors";
import styles from "./home.module.css";
import SobreNos from "../components/sobrenos";

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <LogoFrame />
      <FrameComponent1 />
      <SobreNos />
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
