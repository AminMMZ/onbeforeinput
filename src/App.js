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
          onBeforeInput={e => {
            const { data } = e
            setTimeout(() => {
              const offset = window.getSelection().anchorOffset
              this.addLog([data, data.length, offset])
            }, 0)
          }}
          onKeyDown={e => {
            const { key } = e
            if (key.length <= 1) return
            setTimeout(() => {
              const offset = window.getSelection().anchorOffset
              this.addLog([key, 'keyDown', offset])
            }, 0)
          }}
          onClick={e => setTimeout(() => {
            const offset = window.getSelection().anchorOffset
            this.addLog(['click', 'click', offset])
          }, 0)}
        >
        this is the default text
        </div>
        <hr />
        {this.state.logs.map((log, index) => (
          <div key={index}>char: {log[0]} - len: {log[1]} - offset: {log[2]}</div>
        ))}
      </Fragment>
    );
  }
}

export default App;
