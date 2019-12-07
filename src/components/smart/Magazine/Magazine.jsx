import React from "react";
import "./Magazine.scss";

export default function Magazine(props) {
  return (
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
            <h1 className="item-title">Descubrí más artículos inspiradores</h1>
            <p className="item-text third-item">
              Explora cientos de artículos y encuentra inspiración para tu
              próxima aventura.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
