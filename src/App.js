import React from 'react';
import './app.css'
import elements from './mockData'
import InfoCard from './InfoCard'

const App = () => {
  const handleBlock = () => {
    alert('Blocked!')
  }

  const handleResolve = () => {alert('Resolved!')}

  const renderSpamReport = () => {
    return elements.map(item => {
      return <InfoCard item={item} handleBlock={handleBlock} handleResolve={handleResolve} />
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