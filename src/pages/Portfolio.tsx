import React from 'react'

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="inner02">
        <div className="text-box">
          <span>PORTFOLIO</span>
          <h2>
            CAFE24
            MARKET
            PLUS
          </h2>
          <p>
            카페24 본사 프로젝트 마켓플러스, 이지픽, 셀러,<br />
            스퀘어 등 디자인/개발 정식 제휴사입니다.<br />
            믿고 신뢰 할 수 있는 주식회사 비온미의 더 많은<br />
            포트폴리오를 확인 해보세요!
          </p>
          <div className="portfolio-btn">
            <img src={require('../assets/images/arrow-top-right-icon.png')} alt="arrow-top-right-icon" />
          </div>
        </div>
        <div className="img-box">
          <img src={require('../assets/images/portfolio-img01.png')} alt="portfolio-img01" />
        </div>
        <div className="text-deco">
          Design has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        </div>
      </div>
    </div>
  );
};

export default Portfolio