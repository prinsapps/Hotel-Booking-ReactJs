import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';

export default class Services extends Component {
  state={
      services:[
          {
              icon:<FaCocktail/>,
              title:"Free Cocktail",
              info:"Information about this cocktail"
          },
          {
            icon:<FaHiking/>,
            title:"Free FaHiking",
            info:"Information about this cocktail"
        },
        {
            icon:<FaShuttleVan/>,
            title:"Free ShuttleVan",
            info:"Information about this cocktail"
        },
        {
            icon:<FaBeer/>,
            title:"Free Beer",
            info:"Information about this cocktail"
        }
      ]
  }
    render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
            {this.state.services.map((item,index) => {
return <article key={index} className="service">
    <span>{item.icon}</span>
    <h6>{item.title}</h6>
    <p>{item.info}</p>
</article>
            })}
        </div>    
      </section>
    );
  }
}
