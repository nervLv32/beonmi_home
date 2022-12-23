import React from 'react'

const Projects = () => {
  return (
    <section className="projects">
      <div className="inner-full">
        <div className="title-wrap01">
          <h3>BEONMI PROJECTS</h3>
          <span>CHECK OUT SOME OF OUR THINKING</span>
        </div>
        <div className="project-list">
          <ul>
            <li style={{background: "url(" + require('../assets/images/project-img01.png') + ") no-repeat center / cover"}}>
              <dl>
                <dt>DESIGN UI/UX</dt>
                <dd>
                  Cafe24<br />
                  Maket Plus
                </dd>
              </dl>
            </li>
            <li style={{background: "url(" + require('../assets/images/project-img02.png') + ") no-repeat center / cover"}}>
              <dl>
                <dt>DESIGN UI/UX</dt>
                <dd>
                  AFG<br />
                  Authentic Financial Group
                </dd>
              </dl>
            </li>
            <li style={{background: "url(" + require('../assets/images/project-img03.png') + ") no-repeat center / cover"}}>
              <dl>
                <dt>DESIGN UI/UX</dt>
                <dd>
                  GoalFit - AI<br />
                  Exercise Coach App
                </dd>
              </dl>
            </li>
            <li style={{background: "url(" + require('../assets/images/project-img04.png') + ") no-repeat center / cover"}}>
              <dl>
                <dt>DESIGN UI/UX</dt>
                <dd>
                  KYUNGSHIN<br />
                  Creating Future with Connectivity
                </dd>
              </dl>
            </li>
            <li style={{background: "url(" + require('../assets/images/project-img05.png') + ") no-repeat center / cover"}}>
              <dl>
                <dt>DESIGN UI/UX</dt>
                <dd>
                  Cafe24<br />
                  Seller
                </dd>
              </dl>
            </li>
            <li style={{background: "url(" + require('../assets/images/project-img06.png') + ") no-repeat center / cover"}}>
              <dl>
                <dt>DESIGN UI/UX</dt>
                <dd>
                  HYUNDAM<br />
                  Sogom
                </dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects