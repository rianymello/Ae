import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Meta from "../components/meta";
import PortalPopup from "../components/portal-popup";
import Meta3 from "../components/meta3";
import Meta2 from "../components/meta2";
import Meta1 from "../components/meta1";
import styles from "./index.module.css";

const Home: NextPage = () => {
  const [isMeta1Open, setMeta1Open] = useState(false);
  const [isMeta2Open, setMeta2Open] = useState(false);
  const [isMeta3Open, setMeta3Open] = useState(false);
  const [isMeta4Open, setMeta4Open] = useState(false);

  const onSobreTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='sobreNosContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onMembrosTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='nossosMembrosContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onPropostasTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='propostasContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactosTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='footerSectionContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const openMeta1 = useCallback(() => {
    setMeta1Open(true);
  }, []);

  const closeMeta1 = useCallback(() => {
    setMeta1Open(false);
  }, []);

  const openMeta2 = useCallback(() => {
    setMeta2Open(true);
  }, []);

  const closeMeta2 = useCallback(() => {
    setMeta2Open(false);
  }, []);

  const openMeta3 = useCallback(() => {
    setMeta3Open(true);
  }, []);

  const closeMeta3 = useCallback(() => {
    setMeta3Open(false);
  }, []);

  const openMeta4 = useCallback(() => {
    setMeta4Open(true);
  }, []);

  const closeMeta4 = useCallback(() => {
    setMeta4Open(false);
  }, []);

  return (
    <>
      <div className={styles.home}>
        <img className={styles.homeChild} alt="" src="/vector-2.svg" />
        <img className={styles.homeItem} alt="" src="/vector-3.svg" />
        <img className={styles.homeInner} alt="" src="/vector-1.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector-4.svg" />
        <div className={styles.rectangleDiv} />
        <div className={styles.navbar}>
          <div className={styles.frame} />
          <div className={styles.frame1} />
          <div className={styles.navbarChild} />
          <b className={styles.sobre} onClick={onSobreTextClick}>
            Sobre
          </b>
          <b className={styles.membros} onClick={onMembrosTextClick}>
            Membros
          </b>
          <b className={styles.propostas} onClick={onPropostasTextClick}>
            Propostas
          </b>
          <b className={styles.contactos} onClick={onContactosTextClick}>
            Contactos
          </b>
          <b className={styles.sujestes}>Sujestões?</b>
          <div className={styles.listaC}>{`Lista C `}</div>
          <img
            className={styles.capturaDeTela20240228100Icon}
            alt=""
            src="/captura-de-tela-20240228-100645removebgpreviewphotoroom-1@2x.png"
          />
        </div>
        <img className={styles.homeChild1} alt="" src="/vector-7.svg" />
        <img className={styles.homeChild2} alt="" src="/vector-8.svg" />
        <img className={styles.homeChild3} alt="" src="/vector-14.svg" />
        <div className={styles.component2} />
        <div
          className={styles.footerSection}
          data-scroll-to="footerSectionContainer"
        >
          <b className={styles.listaC1}>
            2024 © Lista C - BY Riany Mello. Pedro Elias e Diogo Fragoso. -
            Todos direitos reservados.
          </b>
          <b className={styles.socializeComA}>Socialize com a Lista C!</b>
          <img className={styles.pinterestIcon} alt="" src="/pinterest.svg" />
          <img className={styles.instagramIcon} alt="" src="/instagram.svg" />
          <img className={styles.linkedinIcon} alt="" src="/linkedin.svg" />
          <img className={styles.youtubeIcon} alt="" src="/youtube.svg" />
          <img className={styles.twitterIcon} alt="" src="/twitter.svg" />
          <div className={styles.footerSectionChild} />
          <b className={styles.buildYourWorld}>BUILD YOUR WORLD</b>
          <img
            className={styles.footerSectionItem}
            alt=""
            src="/vector-17.svg"
          />
          <img
            className={styles.footerSectionInner}
            alt=""
            src="/vector-20.svg"
          />
          <img
            className={styles.footerSectionChild1}
            alt=""
            src="/vector-22.svg"
          />
        </div>
        <div className={styles.propostas1} data-scroll-to="propostasContainer">
          <img className={styles.propostasChild} alt="" src="/vector-15.svg" />
          <b className={styles.propostas2}>PROPOSTAS</b>
          <div className={styles.nossas}>NOSSAS</div>
          <div className={styles.desejaConhecerMaisContainer}>
            <p className={styles.desejaConhecerMais}>
              Deseja conhecer mais sobre cada uma de nossas propostas e como
            </p>
            <p className={styles.desejaConhecerMais}>
              {" "}
              estão progredindo? Aqui, mantemos você atualizado sobre o status
            </p>
            <p className={styles.deCadaIniciativa}>
              {" "}
              de cada iniciativa que molda o futuro da nossa Associação de
              Estudantes.
            </p>
          </div>
          <div className={styles.component3} />
          <div className={styles.meta1} onClick={openMeta1}>
            <img
              className={styles.outlineArrowSmallRight}
              alt=""
              src="/outline--arrowsmallright.svg"
            />
            <div className={styles.meta1Child} />
            <div className={styles.meta1Item} />
            <b className={styles.b}>01</b>
            <b className={styles.meta11}>Meta 1</b>
          </div>
          <div className={styles.meta2} onClick={openMeta2}>
            <img
              className={styles.outlineArrowSmallRight1}
              alt=""
              src="/outline--arrowsmallright.svg"
            />
            <div className={styles.meta1Child} />
            <div className={styles.meta2Item} />
            <b className={styles.b1}>02</b>
            <b className={styles.meta21}>Meta 2</b>
          </div>
          <div className={styles.meta3} onClick={openMeta3}>
            <img
              className={styles.outlineArrowSmallRight2}
              alt=""
              src="/outline--arrowsmallright.svg"
            />
            <div className={styles.meta1Child} />
            <div className={styles.meta3Item} />
            <b className={styles.meta31}>Meta 3</b>
            <b className={styles.b2}>03</b>
          </div>
          <div className={styles.meta4} onClick={openMeta4}>
            <img
              className={styles.outlineArrowSmallRight3}
              alt=""
              src="/outline--arrowsmallright.svg"
            />
            <div className={styles.meta1Child} />
            <div className={styles.meta2Item} />
            <b className={styles.b3}>04</b>
            <b className={styles.meta41}>Meta 4</b>
          </div>
        </div>
        <div className={styles.entreEmContato}>
          <div className={styles.capa}>
            <img className={styles.dsgIcon} alt="" src="/dsg@2x.png" />
            <img className={styles.cartinhaIcon} alt="" src="/cartinha.svg" />
            <div className={styles.texto}>
              <div className={styles.queremosTeOuvir}>Queremos te ouvir!</div>
              <b className={styles.contemConoscoEContainer}>
                ENTRE EM CONTATO CONOSGO
              </b>
            </div>
          </div>
        </div>
        <img className={styles.homeChild4} alt="" src="/vector-19.svg" />
        <div className={styles.sobreNos} data-scroll-to="sobreNosContainer">
          <div className={styles.text}>{` `}</div>
          <div className={styles.bodyTop}>
            <div className={styles.texto1}>
              <div className={styles.bemVindoAssociaoContainer}>
                <p
                  className={styles.desejaConhecerMais}
                >{`Bem-vindo à Associação de Estudantes, onde cada capítulo conta uma história `}</p>
                <p
                  className={styles.desejaConhecerMais}
                >{`única e cada estudante é um protagonista em nossa jornada coletiva. Somos mais `}</p>
                <p
                  className={styles.desejaConhecerMais}
                >{`que uma lista; somos uma comunidade vibrante, forjada pela paixão, inclusão e `}</p>
                <p
                  className={styles.desejaConhecerMais}
                >{`ambição. Aqui, cada elo humano compõe o tecido de nossa trajetória, e cada sonho `}</p>
                <p
                  className={styles.desejaConhecerMais}
                >{`alimenta nossa chama coletiva. Juntos, celebramos a diversidade, cultivamos `}</p>
                <p
                  className={styles.desejaConhecerMais}
                >{`excelência acadêmica e trilhamos um caminho de aprendizado, onde cada passo `}</p>
                <p
                  className={styles.desejaConhecerMais}
                >{`é uma conquista compartilhada. `}</p>
                <p className={styles.deCadaIniciativa}>
                  <b>{`#ContemConosco `}</b>
                </p>
              </div>
              <div className={styles.ns}>NÓS</div>
              <b className={styles.sobre1}>SOBRE</b>
            </div>
            <img
              className={styles.fotoPessoas}
              alt=""
              src="/foto-pessoas@2x.png"
            />
          </div>
        </div>
        <div className={styles.header}>
          <div className={styles.comecinho}>
            <b className={styles.contemConoscoEContainer}>
              <span className={styles.contem}>Contem</span>
              <span className={styles.conoscoENs}> conosco e nós</span>
            </b>
            <div className={styles.exploreOsBastidoresContainer}>
              <p
                className={styles.desejaConhecerMais}
              >{`Explore os bastidores da nossa Lísta! Projetos, progresso e metas futuras - tudo aqui. `}</p>
              <p
                className={styles.desejaConhecerMais}
              >{`Somos uma comunidade unida, apaixonada por fazer a diferença. `}</p>
              <p className={styles.desejaConhecerMais}>
                Conheça nossos membros e faça parte dessa jornada.
              </p>
              <p className={styles.deCadaIniciativa}>
                Todos contam, todos são bem-vindos!
              </p>
            </div>
            <b className={styles.contamosComVocsContainer}>
              <span>{`Contamos `}</span>
              <span className={styles.comVocs}>com vocês</span>
            </b>
          </div>
          <div className={styles.michelangelo}>
            <div className={styles.michelangeloChild} />
            <img
              className={styles.pexelsMichelangeloBuonarrotiIcon}
              alt=""
              src="/pexelsmichelangelobuonarroti8728382-1@2x.png"
            />
          </div>
        </div>
        <div
          className={styles.nossosMembros}
          data-scroll-to="nossosMembrosContainer"
        >
          <div className={styles.membrosGrupo} />
          <img
            className={styles.nossosMembrosChild}
            alt=""
            src="/vector-18.svg"
          />
          <b className={styles.membros1}>MEMBROS</b>
        </div>
        <div className={styles.conheaNossos}>CONHEÇA NOSSOS</div>
        <div className={styles.caroselGrupo}>
          <div className={styles.membrosCarrosel}>
            <div className={styles.membros2}>
              <div className={styles.pessoa1}>
                <img
                  className={styles.pessoa1Dsg}
                  alt=""
                  src="/pessoa-1-dsg@2x.png"
                />
                <div className={styles.presidenteDaDireo}>
                  Presidente da Direção
                </div>
                <b className={styles.eliaEsteves}>Elia Esteves</b>
              </div>
              <div className={styles.pessoa2}>
                <img
                  className={styles.pessoa2Dsg}
                  alt=""
                  src="/pessoa-2-dsg@2x.png"
                />
                <div className={styles.vitaeSapienPelContainer}>
                  <p className={styles.desejaConhecerMais}>
                    Vitae sapien pel entesque habitant morbi
                  </p>
                  <p
                    className={styles.nuncViverraAliquet}
                  >{`nunc. Viverra aliquet  porttitor rhoncus `}</p>
                  <p className={styles.deCadaIniciativa}>
                    libero justo laoreet sit amet vitae.
                  </p>
                </div>
                <b className={styles.pedroElias}>zé</b>
              </div>
              <div className={styles.pessoa3}>
                <img
                  className={styles.pessoa2Dsg}
                  alt=""
                  src="/pessoa-3-dsg@2x.png"
                />
                <b className={styles.diogoAlves}>DIOGO ALVES</b>
                <div className={styles.vitaeSapienPellentesqueContainer}>
                  <p className={styles.desejaConhecerMais}>
                    Vitae sapien pellentesque habitant morbi
                  </p>
                  <p
                    className={styles.nuncViverraAliquet}
                  >{`nunc. Viverra aliquet  porttitor rhoncus `}</p>
                  <p className={styles.deCadaIniciativa}>
                    libero justo laoreet sit amet vitae.
                  </p>
                </div>
              </div>
              <div className={styles.pessoa2}>
                <img
                  className={styles.pessoa2Dsg}
                  alt=""
                  src="/pessoa-4-dsg@2x.png"
                />
                <div className={styles.tesoureiro}>{`Tesoureiro `}</div>
                <b className={styles.tiagoJos}>Tiago José</b>
              </div>
              <div className={styles.pessoa2}>
                <img
                  className={styles.pessoa2Dsg}
                  alt=""
                  src="/pessoa-4-dsg@2x.png"
                />
                <div className={styles.vogal}>1°vogal</div>
                <b className={styles.tomsRibeiro}>Tomás Ribeiro</b>
              </div>
              <div className={styles.pessoa2}>
                <img
                  className={styles.pessoa2Dsg}
                  alt=""
                  src="/pessoa-2-dsg@2x.png"
                />
                <div className={styles.vogal1}>2°vogal</div>
                <b className={styles.brunoLima}> Bruno Lima</b>
              </div>
              <div className={styles.pessoa2}>
                <img
                  className={styles.pessoa2Dsg}
                  alt=""
                  src="/pessoa-2-dsg@2x.png"
                />
                <div className={styles.vogal2}>3°vogal</div>
                <b className={styles.pedroElias}>Tiago Azevedo</b>
              </div>
              <div className={styles.pessoa2}>
                <img
                  className={styles.pessoa2Dsg}
                  alt=""
                  src="/pessoa-2-dsg@2x.png"
                />
                <div className={styles.vogal3}>4°vogal</div>
                <b className={styles.pedroElias}>Artur Batista</b>
              </div>
              <div className={styles.pessoa2}>
                <img
                  className={styles.pessoa2Dsg}
                  alt=""
                  src="/pessoa-2-dsg@2x.png"
                />
                <div className={styles.vogal4}>5°vogal</div>
                <b className={styles.pedroElias}>Yasmim</b>
              </div>
              <div className={styles.pessoa2}>
                <img
                  className={styles.pessoa2Dsg}
                  alt=""
                  src="/pessoa-2-dsg@2x.png"
                />
                <div className={styles.presidenteDaAssembleia}>
                  Presidente da Assembleia Geral
                </div>
                <b className={styles.ngela}>Ângela</b>
              </div>
              <div className={styles.pessoa10}>
                <img
                  className={styles.pessoa1Dsg}
                  alt=""
                  src="/pessoa-2-dsg@2x.png"
                />
                <div className={styles.vicePresidenteDaAssembleia}>
                  Vice-presidente da Assembleia Geral
                </div>
                <b className={styles.camilaGigante}> Camila Gigante</b>
              </div>
              <div className={styles.pessoa2}>
                <img
                  className={styles.pessoa2Dsg}
                  alt=""
                  src="/pessoa-2-dsg@2x.png"
                />
                <div className={styles.secretarioDaAssembleia}>
                  Secretario da Assembleia Geral
                </div>
                <b className={styles.miguelGonalves}>Miguel Gonçalves</b>
              </div>
              <div className={styles.pessoa2}>
                <img
                  className={styles.pessoa2Dsg}
                  alt=""
                  src="/pessoa-2-dsg@2x.png"
                />
                <div className={styles.presidenteDoConcelho}>
                  Presidente do Concelho Fiscal
                </div>
                <b className={styles.anaRita}>Ana Rita</b>
              </div>
              <div className={styles.pessoa2}>
                <img
                  className={styles.pessoa2Dsg}
                  alt=""
                  src="/pessoa-2-dsg@2x.png"
                />
                <div className={styles.secretrioDoConcelho}>
                  Secretário do Concelho Fiscal
                </div>
                <b className={styles.pedroElias}>Hugo Lima</b>
              </div>
              <div className={styles.pessoa2}>
                <img
                  className={styles.pessoa2Dsg}
                  alt=""
                  src="/pessoa-2-dsg@2x.png"
                />
                <div className={styles.vicePresidenteDaDireo}>
                  Vice-presidente da Direção
                </div>
                <b className={styles.veraDamio}>Vera Damião</b>
              </div>
              <div className={styles.pessoa3}>
                <img
                  className={styles.pessoa2Dsg}
                  alt=""
                  src="/pessoa-3-dsg@2x.png"
                />
                <b className={styles.irisFigueiredo}>Iris Figueiredo</b>
                <div className={styles.secretriaDaDireo}>
                  Secretária da Direção
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMeta1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMeta1}
        >
          <Meta onClose={closeMeta1} />
        </PortalPopup>
      )}
      {isMeta2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMeta2}
        >
          <Meta3 onClose={closeMeta2} />
        </PortalPopup>
      )}
      {isMeta3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMeta3}
        >
          <Meta2 onClose={closeMeta3} />
        </PortalPopup>
      )}
      {isMeta4Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMeta4}
        >
          <Meta1 onClose={closeMeta4} />
        </PortalPopup>
      )}
    </>
  );
};

export default Home;
