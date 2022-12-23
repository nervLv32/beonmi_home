import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="inner02">
        <div className="f-logo">
          <Link to="/">
            <img src={require('../../assets/images/f-logo.png')} alt="BeOnMi" />
          </Link>
        </div>
        <div className="info-wrap">
          <div id="fnb">
            <ul>
              <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : '')}>
                  PORTFOLIO
                </NavLink>
              </li>
              <li>
                <NavLink to="/our" className={({ isActive }) => (isActive ? 'active' : '')}>
                  OUR
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                  CONTACT
                </NavLink>
              </li>
              <li id="top-btn">
                <img src={require('../../assets/images/top-icon.png')} alt="top-icon" />
              </li>
            </ul>
          </div>
          <div className="info-box">
            <div className="info info01">
              <p className="line">
                <span>대표이사</span>
                <span>박민우</span>
              </p>
              <p>
                <span>(우)06033 서울특별시 강남구 논현로 155길 26, 4층</span>
                <span>사업자등록번호 546-81-02901</span>
              </p>
              <ul>
                <li className="text">
                  <NavLink to="/">
                    개인정보취급방침
                  </NavLink>
                </li>
                <li className="text">
                  <NavLink to="/">
                    이용약관
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="info info02">
              <div className="box">
                <h4>CONTACT</h4>
                <p className="line">
                  <span>T. 02-000-0000</span>
                  <span>F. 02-000-0000</span>
                </p>
                <p>
                  <span>E. info@beonmi.co.kr</span>
                </p>
                <ul>
                  <li className="icon">
                    <NavLink to="/">
                      <img src={require('../../assets/images/instagram-icon.png')} alt="instagram" />
                    </NavLink>
                  </li>
                  <li className="icon">
                    <NavLink to="/">
                      <img src={require('../../assets/images/facebook-icon.png')} alt="facebook" />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright">
            ⓒ BEONMI All right reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer