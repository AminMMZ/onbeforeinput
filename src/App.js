import React, { Fragment, Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state = { logs: [] }
    this.addLog = this.addLog.bind(this)
  }
  addLog(log){
    this.setState(prevState => ({ logs: [log, ...prevState.logs] }))
  }
  render() {
    return (
      <Fragment>
        <div
          contentEditable
          suppressContentEditableWarning
          style={{ outline: 'none' }}
          onBeforeInput={e => this.addLog([e.data, e.data.length])}
        >
        this is the default text
        </div>
        <hr />
        {this.state.logs.map((log, index) => (
          <div key={index}>{log[0]} --- {log[1]}</div>
        ))}
      </Fragment>
    );
  }
}

export default App;
