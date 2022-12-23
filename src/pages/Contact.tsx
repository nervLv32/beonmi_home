import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Contact = () => {
  return (
    <section className="contact">
      <div className="inner02">
        <div className="text-box">
          <h3>
            Don't<br />
            a stranger-say hello<br />
            <span>info</span>@<span>beonmi.co.kr</span>
          </h3>
          <p>실력과 신뢰를 겸비한 IT파트너를 만들어 보세요.</p>
          <div className="contact-btn">
            <Link to="/">
              <img src={require('../assets/images/contact-icon.png')} alt="contact-icon" />
              <span>
                우리와 함께<br />
                프로젝트를 시작해 보세요!
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact