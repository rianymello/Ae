import type { NextPage } from "next";
import ConditionalBranch from "../components/conditional-branch";
import Pessoa from "../components/pessoa";
import Propostas from "../components/propostas";
import LogicGateAND from "../components/logic-gate-a-n-d";
import styles from "./index.module.css";

const PaginaInicial: NextPage = () => {
  return (
    <div className={styles.paginaInicial}>
      <div className={styles.nossosMembros}>
        <img
          className={styles.nossosMembrosChild}
          alt=""
          src="/vector-18.svg"
        />
        <div className={styles.membros}>
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
          <div className={styles.pessoa4}>
            <img
              className={styles.pessoa4Dsg}
              alt=""
              src="/pessoa-4-dsg@2x.png"
            />
            <div className={styles.tesoureiro}>{`Tesoureiro `}</div>
            <b className={styles.tiagoJos}>Tiago José</b>
          </div>
          <div className={styles.pessoa5}>
            <img
              className={styles.pessoa4Dsg1}
              alt=""
              src="/pessoa-4-dsg-1@2x.png"
            />
            <div className={styles.vogal}>1°vogal</div>
            <b className={styles.tomsRibeiro}>Tomás Ribeiro</b>
          </div>
          <div className={styles.pessoa8}>
            <img
              className={styles.pessoa2Dsg}
              alt=""
              src="/pessoa-2-dsg@2x.png"
            />
            <div className={styles.vogal1}>2°vogal</div>
            <b className={styles.brunoLima}> Bruno Lima</b>
          </div>
          <div className={styles.pessoa14}>
            <img
              className={styles.pessoa2Dsg1}
              alt=""
              src="/pessoa-2-dsg-1@2x.png"
            />
            <div className={styles.vogal2}>3°vogal</div>
            <b className={styles.tiagoAzevedo}>Tiago Azevedo</b>
          </div>
          <div className={styles.pessoa13}>
            <img
              className={styles.pessoa2Dsg2}
              alt=""
              src="/pessoa-2-dsg-2@2x.png"
            />
            <div className={styles.vogal3}>4°vogal</div>
            <b className={styles.arturBatista}>Artur Batista</b>
          </div>
          <div className={styles.pessoa12}>
            <img
              className={styles.pessoa2Dsg3}
              alt=""
              src="/pessoa-2-dsg-3@2x.png"
            />
            <div className={styles.vogal4}>5°vogal</div>
            <b className={styles.yasmim}>Yasmim</b>
          </div>
          <div className={styles.pessoa11}>
            <img
              className={styles.pessoa2Dsg4}
              alt=""
              src="/pessoa-2-dsg-4@2x.png"
            />
            <div className={styles.presidenteDaAssembleia}>
              Presidente da Assembleia Geral
            </div>
            <b className={styles.ngela}>Ângela</b>
          </div>
          <div className={styles.pessoa10}>
            <img
              className={styles.pessoa2Dsg5}
              alt=""
              src="/pessoa-2-dsg-5@2x.png"
            />
            <div className={styles.vicePresidenteDaAssembleia}>
              Vice-presidente da Assembleia Geral
            </div>
            <b className={styles.camilaGigante}> Camila Gigante</b>
          </div>
          <div className={styles.pessoa9}>
            <img
              className={styles.pessoa2Dsg6}
              alt=""
              src="/pessoa-2-dsg-6@2x.png"
            />
            <div className={styles.secretarioDaAssembleia}>
              Secretario da Assembleia Geral
            </div>
            <b className={styles.miguelGonalves}>Miguel Gonçalves</b>
          </div>
          <div className={styles.pessoa15}>
            <img
              className={styles.pessoa2Dsg7}
              alt=""
              src="/pessoa-2-dsg-7@2x.png"
            />
            <div className={styles.presidenteDoConcelho}>
              Presidente do Concelho Fiscal
            </div>
            <b className={styles.anaRita}>Ana Rita</b>
          </div>
          <div className={styles.pessoa16}>
            <img
              className={styles.pessoa2Dsg8}
              alt=""
              src="/pessoa-2-dsg-8@2x.png"
            />
            <div className={styles.secretrioDoConcelho}>
              Secretário do Concelho Fiscal
            </div>
            <b className={styles.hugoLima}>Hugo Lima</b>
          </div>
          <div className={styles.pessoa7}>
            <img
              className={styles.pessoa2Dsg9}
              alt=""
              src="/pessoa-2-dsg-9@2x.png"
            />
            <div className={styles.vicePresidenteDaDireo}>
              Vice-presidente da Direção
            </div>
            <b className={styles.veraDamio}>Vera Damião</b>
          </div>
          <div className={styles.pessoa6}>
            <img
              className={styles.pessoa3Dsg}
              alt=""
              src="/pessoa-3-dsg@2x.png"
            />
            <b className={styles.irisFigueiredo}>Iris Figueiredo</b>
            <div className={styles.secretriaDaDireo}>Secretária da Direção</div>
          </div>
        </div>
      </div>
      <div className={styles.frame} />
      <ConditionalBranch />
      <div className={styles.michelangelo}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.pexelsMichelangeloBuonarrotiIcon}
            loading="lazy"
            alt=""
            src="/pexelsmichelangelobuonarroti8728382-1@2x.png"
          />
        </div>
      </div>
      <img className={styles.paginaInicialChild} alt="" src="/vector-14.svg" />
      <section className={styles.paginaInicialInner}>
        <div className={styles.frameParent}>
          <div className={styles.sobreNosParent}>
            <div className={styles.sobreNos} data-scroll-to="sobreNosContainer">
              <img
                className={styles.fotoPessoas}
                loading="lazy"
                alt=""
                src="/foto-pessoas@2x.png"
              />
              <div className={styles.sobreNosInner}>
                <div className={styles.frameGroup}>
                  <div className={styles.textWrapper}>
                    <h1 className={styles.text}>{` `}</h1>
                  </div>
                  <div className={styles.frameContainer}>
                    <div className={styles.sobreParent}>
                      <h1 className={styles.sobre}>SOBRE</h1>
                      <h1 className={styles.ns}>NÓS</h1>
                    </div>
                    <div className={styles.bemVindoAssociaoDeEstuWrapper}>
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
                        <p className={styles.contemconosco}>
                          <b>{`#ContemConosco `}</b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.component2} />
              <h1 className={styles.conheaNossos}>CONHEÇA NOSSOS</h1>
            </div>
            <div className={styles.membrosWrapper}>
              <h1 className={styles.membros1}>MEMBROS</h1>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.membroscarroselParent}>
              <div className={styles.membroscarrosel}>
                <div className={styles.pessoa17}>
                  <img
                    className={styles.pessoa1Dsg1}
                    loading="lazy"
                    alt=""
                    src="/pessoa-1-dsg-1@2x.png"
                  />
                  <h1 className={styles.eliaEsteves1}>Elia Esteves</h1>
                  <div className={styles.logicTree}>
                    <div className={styles.presidenteDaDireo1}>
                      Presidente da Direção
                    </div>
                  </div>
                </div>
                <div className={styles.pessoa4DsgParent}>
                  <img
                    className={styles.pessoa4Dsg2}
                    loading="lazy"
                    alt=""
                    src="/pessoa-4-dsg-2@2x.png"
                  />
                  <h1 className={styles.tiagoJos1}>Tiago José</h1>
                  <div className={styles.tesoureiroWrapper}>
                    <div className={styles.tesoureiro1}>{`Tesoureiro `}</div>
                  </div>
                </div>
                <div className={styles.pessoa4DsgGroup}>
                  <img
                    className={styles.pessoa4Dsg3}
                    loading="lazy"
                    alt=""
                    src="/pessoa-4-dsg-3@2x.png"
                  />
                  <h1 className={styles.tomsRibeiro1}>Tomás Ribeiro</h1>
                  <div className={styles.vogalWrapper}>
                    <div className={styles.vogal5}>1°vogal</div>
                  </div>
                </div>
                <div className={styles.pessoa2DsgParent}>
                  <img
                    className={styles.pessoa2Dsg10}
                    alt=""
                    src="/pessoa-2-dsg-10@2x.png"
                  />
                  <h1 className={styles.brunoLima1}> Bruno Lima</h1>
                  <div className={styles.vogalContainer}>
                    <div className={styles.vogal6}>2°vogal</div>
                  </div>
                </div>
                <div className={styles.pessoa141}>
                  <img
                    className={styles.pessoa2Dsg11}
                    loading="lazy"
                    alt=""
                    src="/pessoa-2-dsg-11@2x.png"
                  />
                  <h1 className={styles.tiagoAzevedo1}>Tiago Azevedo</h1>
                  <div className={styles.vogalFrame}>
                    <div className={styles.vogal7}>3°vogal</div>
                  </div>
                </div>
                <div className={styles.pessoa131}>
                  <img
                    className={styles.pessoa2Dsg12}
                    loading="lazy"
                    alt=""
                    src="/pessoa-2-dsg-12@2x.png"
                  />
                  <h1 className={styles.arturBatista1}>Artur Batista</h1>
                  <div className={styles.frameDiv}>
                    <div className={styles.vogal8}>4°vogal</div>
                  </div>
                </div>
                <div className={styles.pessoa121}>
                  <img
                    className={styles.pessoa2Dsg13}
                    loading="lazy"
                    alt=""
                    src="/pessoa-2-dsg-13@2x.png"
                  />
                  <h1 className={styles.yasmim1}>Yasmim</h1>
                  <div className={styles.vogalWrapper1}>
                    <div className={styles.vogal9}>5°vogal</div>
                  </div>
                </div>
                <Pessoa
                  pessoa2Dsg="/pessoa-2-dsg-14@2x.png"
                  ngela="Ângela"
                  presidenteDaAssembleiaGer="Presidente da Assembleia Geral"
                />
                <Pessoa
                  pessoa2Dsg="/pessoa-2-dsg-15@2x.png"
                  ngela=" Camila Gigante"
                  presidenteDaAssembleiaGer="Vice-presidente da Assembleia Geral"
                  propPadding="16.438rem 2.75rem 4.563rem 2.875rem"
                  propPadding1="0rem 0.688rem 0rem 0.563rem"
                  propMinWidth="unset"
                />
                <div className={styles.pessoa91}>
                  <img
                    className={styles.pessoa2Dsg14}
                    loading="lazy"
                    alt=""
                    src="/pessoa-2-dsg-16@2x.png"
                  />
                  <h1 className={styles.miguelGonalves1}>Miguel Gonçalves</h1>
                  <div className={styles.secretarioDaAssembleiaGeralWrapper}>
                    <div className={styles.secretarioDaAssembleia1}>
                      Secretario da Assembleia Geral
                    </div>
                  </div>
                </div>
                <div className={styles.pessoa2DsgGroup}>
                  <img
                    className={styles.pessoa2Dsg15}
                    loading="lazy"
                    alt=""
                    src="/pessoa-2-dsg-17@2x.png"
                  />
                  <div className={styles.presidenteDoConcelhoFiscalWrapper}>
                    <div className={styles.presidenteDoConcelho1}>
                      Presidente do Concelho Fiscal
                    </div>
                  </div>
                  <h1 className={styles.anaRita1}>Ana Rita</h1>
                </div>
                <div className={styles.pessoa2DsgContainer}>
                  <img
                    className={styles.pessoa2Dsg16}
                    alt=""
                    src="/pessoa-2-dsg-18@2x.png"
                  />
                  <h1 className={styles.hugoLima1}>Hugo Lima</h1>
                  <div className={styles.secretrioDoConcelho1}>
                    Secretário do Concelho Fiscal
                  </div>
                </div>
                <div className={styles.pessoa2DsgParent1}>
                  <img
                    className={styles.pessoa2Dsg17}
                    alt=""
                    src="/pessoa-2-dsg-19@2x.png"
                  />
                  <h1 className={styles.veraDamio1}>Vera Damião</h1>
                  <div className={styles.vicePresidenteDaDireoWrapper}>
                    <div className={styles.vicePresidenteDaDireo1}>
                      Vice-presidente da Direção
                    </div>
                  </div>
                </div>
                <div className={styles.pessoa3DsgParent}>
                  <img
                    className={styles.pessoa3Dsg1}
                    alt=""
                    src="/pessoa-3-dsg-1@2x.png"
                  />
                  <h1 className={styles.irisFigueiredo1}>Iris Figueiredo</h1>
                  <div className={styles.secretriaDaDireoWrapper}>
                    <div className={styles.secretriaDaDireo1}>
                      Secretária da Direção
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.outputManager}>
                <div className={styles.conditionChecker}>
                  <img className={styles.dsgIcon} alt="" src="/dsg@2x.png" />
                  <h1 className={styles.entreEmContato}>
                    ENTRE EM CONTATO CONOSGO
                  </h1>
                  <div className={styles.queremosTeOuvirWrapper}>
                    <h1 className={styles.queremosTeOuvir}>
                      Queremos te ouvir!
                    </h1>
                  </div>
                  <img
                    className={styles.cartinhaIcon}
                    loading="lazy"
                    alt=""
                    src="/cartinha.svg"
                  />
                </div>
              </div>
              <div className={styles.frameWrapper1}>
                <div className={styles.frameParent1}>
                  <div className={styles.nossasParent}>
                    <h1 className={styles.nossas}>NOSSAS</h1>
                    <h1 className={styles.propostas}>PROPOSTAS</h1>
                  </div>
                  <div className={styles.desejaConhecerMaisSobreCadWrapper}>
                    <div className={styles.desejaConhecerMaisContainer}>
                      <p className={styles.desejaConhecerMais}>
                        Deseja conhecer mais sobre cada uma de nossas propostas
                        e como
                      </p>
                      <p className={styles.estoProgredindoAqui}>
                        {" "}
                        estão progredindo? Aqui, mantemos você atualizado sobre
                        o status
                      </p>
                      <p className={styles.deCadaIniciativa}>
                        {" "}
                        de cada iniciativa que molda o futuro da nossa
                        Associação de Estudantes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.propostasParent}>
        <Propostas />
        <LogicGateAND />
      </section>
    </div>
  );
};

export default PaginaInicial;
