import React, {useState} from 'react'

const Services = () => {

  const [ tabState, setTabState ] = useState<number>(1)

  const tabData = [
    {
      id: 1,
      name: 'Inerface Design',
      content: [
        {
          text: 'Interface &#10; Design1'
        },
        {
          text: 'Brand &#10; Strategy1'
        },
        {
          text: "Web &#10; Design1"
        },
        {
          text: "Development1"
        }
      ]
    },
    {
      id: 2,
      name: 'Brand Strategy',
      content: [
        {
          text: 'Interface &#10; Design2'
        },
        {
          text: 'Brand &#10; Strategy2'
        },
        {
          text: "Web &#10; Design2"
        },
        {
          text: "Development2"
        }
      ]
    },
    {
      id: 3,
      name: "Web Design",
      content: [
        {
          text: 'Interface &#10; Design3'
        },
        {
          text: 'Brand &#10; Strategy3'
        },
        {
          text: "Web &#10; Design3"
        },
        {
          text: "Development3"
        }
      ]
    }
  ]

  const selectTabHandler = (e: number) => {
    setTabState(e)
  }

  return (
    <section className="services">
      <div className="inner02">
        <div className="left-wrap">
          <div className="title">
            <h3>BEONMI SERVICES</h3>
            <span>Some of the services we offer</span>
          </div>
          <div className="tab-wrap">
            {
              tabData.map((item, index) => {
                return (
                  <button 
                    key={index}
                    onClick={() => selectTabHandler(item.id)}
                    className={tabState === item.id ? 'active' : ''}
                  >
                    {item.name}
                    <span className="m-l-10">+</span>
                  </button>
                )
              })
            }
          </div>
        </div>
        <div className="right-wrap">
          <ul>
            {
              tabData.filter(item => tabState === item.id).map(item => (
                item.content.map(content => (
                  <li>
                    <div className="box">
                      <span dangerouslySetInnerHTML={{__html: content.text}}></span>
                    </div>
                  </li>
                ))
              ))
            }
          </ul>
        </div>
        <div className="text-bg">
          <p>Innovative design proposals for business</p>
          <p>design proposals for business</p>
        </div>
      </div>
    </section>
  );
};

export default Services;