import React from 'react'
import img1 from '../helpers/images_lessons/pesas_entrenamiento_funcional.png'
import img2 from '../helpers/images_lessons/colchoneta.png'
import img3 from '../helpers/images_lessons/guantes.png'
import img4 from '../helpers/images_lessons/zapas.png'
import img5 from '../helpers/images_lessons/colchmorada2.png'
import img6 from '../helpers/images_lessons/ruedita.png'
import img7 from '../helpers/images_lessons/colchonetamorada.png'
const LessonsNavbar = () => {
    return (
        <div>
            <div className="row align-items-center">
            <div className="col">
            <h1 className="titulo">¡Conocé nuestras clases!</h1>
            </div>
            <div className="col-auto ">
            <a className='btn botonhorarios botonhorariostittle' href="https://www.google.com.ar/">¡Ver Horarios!</a>
            </div>
            </div>
            <div className="btn-group col-12 row-cols-md-1 row-cols-sm-12 " role="group" aria-label="Basic example">
              <a type="button" className="btn colorbutton1 fs-6 titulo2 " href="#scrollspyHeading1">Entrenamiento Funcional</a>
              <a type="button" className="btn colorbutton2 fs-6 titulo2" href="#scrollspyHeading2">Aero Local</a>
              <a type="button" className="btn colorbutton4 fs-6 titulo2" href="#scrollspyHeading3">Aero Combat</a>
              <a type="button" className="btn colorbutton6 fs-6 titulo2" href="#scrollspyHeading4">Ritmos</a>
              <a type="button" className="btn colorbutton7 fs-6 titulo2" href="#scrollspyHeading5">Yoga</a>
              <a type="button" className="btn colorbutton3 fs-6 titulo2" href="#scrollspyHeading6">Abdominales</a>
              <a type="button" className="btn colorbutton5 fs-6 titulo2" href="#scrollspyHeading7">Estiramiento</a>
            </div>
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example " tabindex="0">
       
            <div className="card divsb" id="scrollspyHeading1">
                <div className="row g-0 ">
                {/* align-items-center: para centrar texto */}
                       <div className="col-md-6 d-flex justify-content-center pt-5 colorbutton1  titulo2 ">
                          <div className="card-body">
                            <p className="card-text fs-5 "> Vas a aprender movimientos y posturas que luego vas a poder aplicar en tu vida diaria. <br/><br/>Power, intensa y efectiva.</p>
                          </div>
                      </div>
                      <a className="col-auto btn fw-bold text-danger position-absolute top-50 start-50 translate-middle rounded-circle border-5 border-danger bg-light d-none d-md-block d-xxl-none" href="https://www.youtube.com/watch?v=iQ3g-gqKe_A&ab_channel=gymvirtual">¡Mirá la<br/> clase!</a>
                      
                        <div className="col-md-6 d-flex justify-content-center align-items-center fondobutton11">
                          <img src={img1} className="img-fluid rounded-start " alt="PesasRusas"></img>
                        </div>
                </div>
            </div>
                 
            <div className="card divsb" id="scrollspyHeading2">
                <div className="row g-0">
                       <div className="col-md-6 d-flex justify-content-center pt-5 colorbutton2  titulo2">
                          <div className="card-body ">
                            <p className="card-text fs-5">Una clase que te tonifica y aumenta tu resistencia muscular. Ponele que quieres endurecer los brazos y no te copa mucho la sala musculación, esta es la clase para vos.</p>
                          </div>
                      </div>
                      <a className="col-auto btn fw-bold titulo position-absolute top-50 start-50 translate-middle rounded-circle border-5 borde2 bg-light d-none d-md-block d-xxl-none" href="https://www.youtube.com/watch?v=iQ3g-gqKe_A&ab_channel=gymvirtual">¡Mirá la<br/> clase!</a>

                        <div className="col-md-6 d-flex justify-content-center align-items-center fondobutton22  ">
                          <img src={img2} className="img-fluid rounded-start " alt="Colchoneta"></img>
                        </div>
                </div>
            </div>

            <div className="card divsb" id="scrollspyHeading3">
                <div className="row g-0">
                       <div className="col-md-6 d-flex justify-content-center pt-5 colorbutton4  titulo2">
                          <div className="card-body ">
                            <p className="card-text fs-5">Te propone 45 minutos de clase con intensidad al máximo y una variada combinación de golpes de manos y patadas para traspirar y llevar tu energía al 100%.</p>
                          </div>
                      </div>
                      <a className="col-auto btn fw-bold position-absolute top-50 start-50 translate-middle rounded-circle border-5 borde3 bg-light d-none d-md-block d-xxl-none" href="https://www.youtube.com/watch?v=iQ3g-gqKe_A&ab_channel=gymvirtual">¡Mirá la<br/> clase!</a>

                      
                        <div className="col-md-6 d-flex justify-content-center align-items-center fondobutton33  ">
                          <img src={img3} className="img-fluid rounded-start " alt="guantes"></img>
                        </div>
                </div>
            </div>

            <div className="card divsb" id="scrollspyHeading4">
                <div className="row g-0">
                       <div className="col-md-6 d-flex justify-content-center pt-5 colorbutton6  titulo2">
                          <div className="card-body ">
                            <p className="card-text fs-5">La mejor música para bailar, transpirás un montón, te reís y te liberás.<br/><br/>¿Te perdés en la coreo? Vos seguí. Nadie te juzga.<br/> Aquí venís a divertirte.</p>
                          </div>
                      </div>
                      <a className="col-auto btn fw-bold position-absolute top-50 start-50 translate-middle rounded-circle border-5 borde4 bg-light d-none d-md-block d-xxl-none" href="https://www.youtube.com/watch?v=iQ3g-gqKe_A&ab_channel=gymvirtual">¡Mirá la<br/> clase!</a>
                        <div className="col-md-6 d-flex justify-content-center align-items-center fondobutton44  ">
                          <img src={img4} className="img-fluid rounded-start " alt="zapatillas"></img>
                        </div>
                </div>
            </div>


            <div className="card divsb" id="scrollspyHeading5">
                <div className="row g-0">
                       <div className="col-md-6 d-flex justify-content-center pt-5 colorbutton7  titulo2">
                          <div className="card-body ">
                            <p className="card-text fs-5">Conectate con tu respiración, regalate un momento solo para vos. Una serie de posturas (llamadas “asanas”) te permiten alcanzar una serenidad en tu mente y en tu cuerpo.<br/><br/>Vas a tu ritmo, sin presiones.</p>
                          </div>
                      </div>
                      <a className="col-auto btn fw-bold position-absolute top-50 start-50 translate-middle rounded-circle border-5 borde5 bg-light d-none d-md-block d-xxl-none" href="https://www.youtube.com/watch?v=iQ3g-gqKe_A&ab_channel=gymvirtual">¡Mirá la<br/> clase!</a>
                        <div className="col-md-6 d-flex justify-content-center align-items-center fondobutton55  ">
                          <img src={img5} className="img-fluid rounded-start " alt="Colchoneta"></img>
                        </div>
                </div>
            </div>


            <div className="card divsb" id="scrollspyHeading6">
                <div className="row g-0">
                       <div className="col-md-6 d-flex justify-content-center pt-5 colorbutton3  titulo2">
                          <div className="card-body ">
                            <p className="card-text fs-5">Una clase enfocada en la zona media de tu cuerpo <br/>(Abdominales y espinales).<br/>Breve e intensa. Mejorás tu postura, aliviás dolores de espalda y tenés material para buenos selfies en el espejo.</p>
                          </div>
                      </div>
                      <a className="col-auto btn fw-bold position-absolute top-50 start-50 translate-middle rounded-circle border-5 borde6 bg-light d-none d-md-block d-xxl-none" href="https://www.youtube.com/watch?v=iQ3g-gqKe_A&ab_channel=gymvirtual">¡Mirá la<br/> clase!</a>
                        <div className="col-md-6 d-flex justify-content-center align-items-center fondobutton66  ">
                          <img src={img6} className="img-fluid rounded-start " alt="Rueda"></img>
                        </div>
                </div>
            </div>

            <div className="card divsb" id="scrollspyHeading7">
                <div className="row g-0">
                       <div className="col-md-6 d-flex justify-content-center pt-5 colorbutton5  titulo2">
                          <div className="card-body ">
                            <p className="card-text fs-5">Esta clase de 30 minutos te ayudará a fortalecer y mejorar la flexibilidad de tu cuerpo en forma integral a través de movimientos suaves y controlados. Además mejorarás tu postura de manera progresiva, te ayudará a prevenir lesiones</p>
                          </div>
                      </div>
                      <a className="col-auto btn fw-bold position-absolute top-50 start-50 translate-middle rounded-circle border-5 borde7 bg-light d-none d-md-block d-xxl-none" href="https://www.youtube.com/watch?v=iQ3g-gqKe_A&ab_channel=gymvirtual">¡Mirá la<br/> clase!</a>
                        <div className="col-md-6  d-flex justify-content-center align-items-center fondobutton77  ">
                          <img src={img7} className="img-fluid rounded-start " alt="Colchoneta"></img>
                        </div>
                </div>
            </div>
               
            </div>
            
        </div>
    )
}

export default LessonsNavbar
