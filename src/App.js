import React from 'react';
import Todos from './components/Todos';

import './App.css';

// stopped video at 38:40

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false,
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: true,
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false,
      },
    ],
  }

  render() {
    return (
    <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
