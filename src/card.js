import React, {Component} from 'react';

class Card extends Component {
    render() {
        const {image, name, profession, summary} = this.props;
        return (
          <div className="column">
            <div className="card">
              <img src={image} alt="Mike" style={{width: '100%'}}></img>
              <div className="container">
                <h2>{name}</h2>
                <p className="title">{profession}</p>
                <p>{summary}</p>
                <p>{name.toLowerCase()}@email.vccs.edu</p>
                <p><button className="button">Contact</button></p>
              </div>
            </div>
          </div>
        )
    }
}

export default Card;
