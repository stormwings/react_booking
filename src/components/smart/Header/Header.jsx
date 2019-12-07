import React from "react";
import "./Header.scss";

export default function Header(props) {
  return (
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
  );
}
