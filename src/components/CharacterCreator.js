import React from 'react';

export default class CharacterCreator extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert('do the thing!');
  }

  render() {
    return (
      <div >
        <h1>Placeholder</h1>
          <p>Bacon ipsum dolor amet drumstick pork corned beef, tail sirloin tri-tip porchetta swine. Meatball biltong jerky ground round, andouille shoulder salami fatback sausage pig. Prosciutto andouille alcatra pork loin brisket ribeye corned beef. Bresaola picanha sirloin kielbasa. Bacon hamburger shoulder meatball swine chicken. Fatback ball tip strip steak pig beef ribs flank. Ham hock leberkas picanha andouille meatball.</p>
        <button onClick={this.handleClick}>Click for bacon!</button>
      </div>
    );
  }
}
