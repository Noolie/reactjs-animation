import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      content: ['number 1', 'number 25', 'number 32'],
      itemNumber: 3
    }
  }

  addNumber(){
      let newItem = 'number ' + Math.round(Math.random() * 100);
      let updatedContent = this.state.content;
      updatedContent.push(newItem);
      this.setState({
        content: updatedContent,
        itemNumber: this.state.itemNumber + 1
      })
  }

  removeNumber(ev){
      console.log(this.state.content)
    let removeItem = Number(ev.target.getAttribute('data-id'))
    let updatedContent = this.state.content;
    updatedContent.splice(removeItem, 1);
    this.setState({
        content: updatedContent,
        itemNumber: (this.state.content.length - 1)
      });
  }

  render() {
    return (
      <div className='app'>
        <button
          onClick={this.addNumber.bind(this)}
          className='add-button'
          >add
        </button>
        <ul className='list'>
          <ReactCSSTransitionGroup
            transitionName='fade'
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
            transitionAppear={true}
            transitionAppearTimeout={1000}>
              {this.state.content.map((item, i) => <li
              data-id={i}
              className='list-item'
              onClick={this.removeNumber.bind(this)}
              key={item}>{item}
            </li>)}
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    );
  }
}

export default App;
