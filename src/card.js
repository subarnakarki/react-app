import React, {Component} from 'react';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0
    }
  }

  addLike(){
    this.setState({likes: this.state.likes + 1});
  }
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
              <p>Likes: {this.state.likes}</p>
              <p><button onClick={this.addLike.bind(this)} className="button">Like</button></p>
            </div>
          </div>
        </div>
      )
  }
}

export default Card;
