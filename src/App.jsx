import React from "react";
import "./App.scss";

import Logo from "./Logo";

function App() {
  return (
    <div className="App">
      <header id="navbar">
        <div className="navbar--container">
          <div className="login--button">
            <button type="button" className="button">
              <span className="flex-wrapper">Iniciá sesión</span>
            </button>
          </div>
          <div className="currency--button">
            <div className="current--currency">ARS</div>
            <select id="currency">
              <optgroup label="Principales monedas">
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - Libra esterlina</option>
                <option value="USD">USD - Dólar EE.UU.</option>
              </optgroup>
              <optgroup label="Todas las monedas">
                <option value="AED">AED - Dírham de los EAU</option>
                <option value="ARS">ARS - Peso argentino</option>
                <option value="AUD">AUD - Dólar australiano</option>
                <option value="AZN">AZN - Manat azerbaiyano</option>
                <option value="BGN">BGN - Lev búlgaro</option>
                <option value="BHD">BHD - Dinar bareiní</option>
                <option value="BRL">BRL - Real brasileño</option>
                <option value="CAD">CAD - Dólar canadiense</option>
                <option value="CHF">CHF - Franco suizo</option>
                <option value="CLP">CLP - Peso chileno</option>
                <option value="CNY">CNY - Yuan chino</option>
                <option value="COP">COP - Peso colombiano</option>
                <option value="CZK">CZK - Corona checa</option>
                <option value="DKK">DKK - Corona danesa</option>
                <option value="DZD">DZD - Dinar argelino</option>
                <option value="EGP">EGP - Libra egipcia</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - Libra esterlina</option>
                <option value="HKD">HKD - Dólar de Hong Kong</option>
                <option value="HRK">HRK - Kuna croata</option>
                <option value="HUF">HUF - Florín húngaro</option>
                <option value="IDR">IDR - Rupia indonesia</option>
                <option value="ILS">ILS - Shequel israelí</option>
                <option value="INR">INR - Rupia india</option>
                <option value="JOD">JOD - Dinar jordano</option>
                <option value="JPY">JPY - Yen japonés</option>
                <option value="KRW">KRW - Won surcoreano</option>
                <option value="KWD">KWD - Dinar kuwaití</option>
                <option value="KZT">KZT - Tenge kazajo</option>
                <option value="LBP">LBP - Libra libanesa</option>
                <option value="MAD">MAD - Dírham marroquí</option>
                <option value="MDL">MDL - Leu moldavo</option>
                <option value="MXN">MXN - Peso mexicano</option>
                <option value="MYR">MYR - Ringgit malayo</option>
                <option value="NGN">NGN - Naira nigeriano</option>
                <option value="NOK">NOK - Corona noruega</option>
                <option value="NZD">NZD - Dólar neozelandés</option>
                <option value="OMR">OMR - Rial omaní</option>
                <option value="PEN">PEN - Nuevo Sol peruano</option>
                <option value="PHP">PHP - Peso filipino</option>
                <option value="PLN">PLN - Zloty polaco</option>
                <option value="QAR">QAR - Riyal qatarí</option>
                <option value="RON">RON - Leu rumano</option>
                <option value="RSD">RSD - Dinar serbio</option>
                <option value="RUB">RUB - Rublo ruso</option>
                <option value="SAR">SAR - Riyal saudí</option>
                <option value="SEK">SEK - Corona sueca</option>
                <option value="SGD">SGD - Dólar singapurense</option>
                <option value="THB">THB - Baht tailandés</option>
                <option value="TND">TND - Dinar tunecino</option>
                <option value="TRY">TRY - Lira turca</option>
                <option value="TWD">TWD - Nuevo Dólar taiwanés</option>
                <option value="UAH">UAH - Grivna ucraniana</option>
                <option value="USD">USD - Dólar EE.UU.</option>
                <option value="UYU">UYU - Peso uruguayo</option>
                <option value="VND">VND - Dong vietnamita</option>
                <option value="ZAR">ZAR - Rand sudafricano</option>
              </optgroup>
            </select>
          </div>
        </div>
      </header>

      <section id="hero_panel">
        <div className="wrapper">
          <div className="hero--image">
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Trivago.svg/1280px-Trivago.svg.png"
              }
              className="hero--image__logo"
              alt="logo"
            />
          </div>
          <h2 className="hero--subtitle">
            Encontrá tu hotel ideal y compará precios de diferentes páginas web
          </h2>
        </div>
      </section>

      <section id="question_panel">
        <div className="wrapper">
          <h2 className="global--title">
            ¿Necesitás ideas para tu próximo viaje?
          </h2>
          <p className="global--subtitle">
            Descubrí las mejores experiencias en hoteles en los más de 140
            artículos de trivago Magazine, desde hoteles boutique en Mendoza
            hasta casas de campo encantadoras en Córdoba.
          </p>
        </div>
      </section>

      <section id="magazine_panel">
        <div className="wrapper">
          <div className="hero--image">
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Trivago.svg/1280px-Trivago.svg.png"
              }
              className="hero--image__logo"
              alt="logo"
            />
          </div>
          <ul className="magazine--list">
            <li className="magazine--list-item">
              <img
                className="item-img"
                src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,f_auto,h_300,q_auto,w_300/mag/2019/06/19090617/rsz-1fotolia-165115946-subscription-monthly-xxl.jpg"
                alt="magazine"
              />
              <span className="item-span">140+ artículos</span>
              <h1 className="item-title">Aventurate a viajar al exterior</h1>
              <p className="item-text">
                Te traemos diferentes ideas de destinos internacionales para que
                tengas el mundo en tus manos.
              </p>
            </li>
            <li className="magazine--list-item">
              <img
                className="item-img"
                src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,f_auto,h_300,q_auto,w_300/mag/2018/04/25121433/hoteles-romanticos-buenos-aires-nikole-mock.jpg"
                alt="magazine"
              />
              <span className="item-span">140+ artículos</span>
              <h1 className="item-title">Planea tus vacaciones en pareja</h1>
              <p className="item-text">
                Algunos de los mejores recuerdos románticos se crean en los
                viajes.
              </p>
            </li>
            <li className="magazine--list-item">
              <img
                className="item-img"
                src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,f_auto,h_300,q_auto,w_300/mag/2018/09/19105728/rsz-victor-freitas-656091-unsplash.jpg"
                alt="magazine"
              />
              <span className="item-span">140+ artículos</span>
              <h1 className="item-title">Disfrutá de las mejores playas</h1>
              <p className="item-text">
                ¿Playas en Brazil? Descubrí estas increíbles escapadas para tus
                vacaciones de verano.
              </p>
            </li>
            <li className="magazine--list-item">
              <img
                className="item-img"
                src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,f_auto,h_300,q_auto,w_300/mag/2019/05/28100455/eyeem-100000323-126180008-1.jpg"
                alt="magazine"
              />
              <span className="item-span">140+ artículos</span>
              <h1 className="item-title">
                Descubrí más artículos inspiradores
              </h1>
              <p className="item-text third-item">
                Explora cientos de artículos y encuentra inspiración para tu
                próxima aventura.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section id="guide_panel">
        <div className="wrapper">
          <div className="guide--container">
            <div className="guide--item">
              <h2 className="global--title">
                trivago: El buscador de hoteles global
              </h2>
              <p className="global--subtitle">
                trivago es un buscador de hoteles que agiliza los procesos de
                comparación y reserva mostrando en tiempo real los precios de
                más de 1,8 millones de hoteles de más de 190 países integrados
                en más de 400 agencias de reserva online. Con más de 1,4 mil
                millones de visitas al año, los viajeros utilizan trivago para
                encontrar ofertas para los diferentes destinos.
              </p>
            </div>
            <div className="guide--item">
              <h2 className="global--title">
                Encontrá hoteles baratos en trivago
              </h2>
              <p className="global--subtitle">
                Con trivago podés encontrar fácilmente tu hotel ideal y comparar
                precios de diferentes páginas web. Simplemente escribí dónde
                querés ir y cuándo, y nuestros motores de búsqueda compararán
                por vos los precios de diferentes alojamientos. Para ajustar aún
                más los resultados, podés ordenar los hoteles por precio, por
                distancia (por ejemplo, de la playa) o filtrarlos por número de
                estrellas, instalaciones y mucho más. Desde hostels hasta
                lujosas suites, trivago facilita la reserva online, ya sean
                hoteles en Buenos Aires o en Córdoba, o destinos internacionales
                como Nueva York, Miami o Florianópolis. Podés buscar una gran
                variedad de habitaciones, ¡tanto en destinos argentinos como en
                ciudades de todo el mundo!
              </p>
            </div>
          </div>
          <div className="guide--container">
            <div className="guide--item">
              <h2 className="global--title">
                Las opiniones de hoteles te van a ayudar a encontrar tu hotel
                ideal
              </h2>
              <p className="global--subtitle">
                Tenemos 175 millones de opiniones de usuarios y más de 19
                millones de fotos que te permitirán saber más sobre los lugares
                que querés visitar. Para tener una visión más completa del
                hotel, trivago muestra el promedio de puntuación de otras
                páginas de reserva, como por ejemplo Expedia, Hoteles.com, Agoda
                etc.
              </p>
            </div>
            <div className="guide--item">
              <h2 className="global--title">Cómo reservar</h2>
              <p className="global--subtitle">
                trivago es una página de comparación de precios mediante una
                avanzada búsqueda de hoteles. Los precios que se muestran
                provienen de páginas de reserva y de hoteles. Esto significa
                que, aunque los usuarios deciden en trivago qué hotel se ajusta
                mejor a sus necesidades, la reserva se completa en la página de
                la agencia (la cual está conectada con nuestra página web). Al
                hacer click en “ver oferta”, te redirigimos a la página web de
                la agencia, donde podrás completar la reserva de la oferta
                mostrada en trivago. ¡Dejá que trivago te ayude a encontrar el
                precio que buscás entre más de 400 agencias de reserva online!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="list_panel">
        <div className="wrapper">
          <div className="location--list">
            <h3 className="location--title">Más ciudades destacadas</h3>
            <ul className="location--container">
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Puerto Iguazú
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Puerto Madryn
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Punta del Este
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Rosario
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Salta Capital
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  San Carlos de Bariloche
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  San Luis Capital
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  San Miguel de Tucumán
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Tandil
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Tierra del Fuego
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Ushuaia
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Villa Carlos Paz
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Villa Gesell
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Villa La Angostura
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Belo Horizonte
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Búzios
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Distrito Capital
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Barcelona
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Recife
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Río de Janeiro
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Colonia del Sacramento
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  El Calafate
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Florianópolis
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Cartagena
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  San Pablo
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Santa Fe Capital
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Santiago
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Berlín
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Camboriú
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Lima
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Londres
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Machu Picchu
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Madrid
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Montevideo
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  New York
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Orlando
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Ciudad de Panamá
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  París
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Venecia
                </a>
              </li>
            </ul>
          </div>
          <div className="location--list">
            <h3 className="location--title">trivago internacional</h3>
            <ul className="location--container">
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Puerto Iguazú
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Puerto Madryn
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Punta del Este
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Rosario
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Salta Capital
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  San Carlos de Bariloche
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  San Luis Capital
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  San Miguel de Tucumán
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Tandil
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Tierra del Fuego
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Ushuaia
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Villa Carlos Paz
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Villa Gesell
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Villa La Angostura
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Belo Horizonte
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Búzios
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Distrito Capital
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Barcelona
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Recife
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Río de Janeiro
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Colonia del Sacramento
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  El Calafate
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Florianópolis
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Cartagena
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  San Pablo
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Santa Fe Capital
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Santiago
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Berlín
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Camboriú
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Lima
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Londres
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Machu Picchu
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Madrid
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Montevideo
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  New York
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Orlando
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Ciudad de Panamá
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  París
                </a>
              </li>
              <li className="location--item">
                <a className="location--item__url" href="/location">
                  Venecia
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="footer_panel">
        <div className="footer__secondary">
          <Logo />
          <small className="footer__copyright-text">
            Copyright 2019 trivago | Todos los derechos reservados.{" "}
          </small>
        </div>
      </section>
    </div>
  );
}

export default App;
