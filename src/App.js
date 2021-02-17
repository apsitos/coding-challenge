import React from 'react';
import './app.css'
import elements from './mockData'

const App = () => {
  const handleBlock = () => {
    alert('Clicked!')
  }

  const handleResolve = () => {}

  const renderSpamReport = () => {
    return elements.map(item => {
      return (
        <div className="spam-container">
          <div className="spam-info">
            <div className="info-left">
              <p>Id: {item.id}</p>
              <p>State: {item.state}</p>
            </div>
            <div className="info-right">
              <p>Type: {item.payload.reportType}</p>
              <p>Message: {item.payload.message}</p>
            </div>
            <div className="button-container">
              <button onClick={handleBlock}>Block</button>
              <button onClick={handleResolve}>Resolve</button>
            </div>
          </div>
        </div>
      )
    })
  }

  return (
      <div>
        <h1>Reports</h1>
        {renderSpamReport()}
      </div>
  )
}

export default App;