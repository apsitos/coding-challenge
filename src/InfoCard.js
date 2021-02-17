import React from 'react';

const InfoCard = ({item, handleBlock, handleResolve}) => {
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
}

export default InfoCard