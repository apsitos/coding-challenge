import React, {useEffect, useState} from 'react';
import './app.css'
import elements from './mockData'
import InfoCard from './InfoCard'

const App = () => {
  const [reports, setReports] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    //this is fetching HTML: endpoint set up incorrectly
    return fetch('/getdata')
    .then(res => res.text())
    .then(data => console.log(data))
    // .then(data => setReports(data.elements))
    .catch(e => console.log('ERROR', e))
  })


  const handleBlock = () => {
    alert('Blocked!')
  }

  const handleResolve = (name) => {
    return fetch(`/report/${name}`)
    .then(res => res.json())
    .then(data => setSuccess(true))
    .catch(error => {
      console.log("ERROR RESOLVING", error);
      setSuccess(false)
    }) 
  }

  const renderSpamReport = () => {
    const dataToMap = !!reports ? reports : elements
    return dataToMap.map(item => {
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