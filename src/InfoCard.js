import React from 'react';

const InfoCard = ({item, handleBlock, handleResolve}) => {
  console.log('ITEM', item)
  return (
    <div key={item.id} className="spam-container">
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
          <button name={item.payload.reportId} onClick={handleBlock}>Block</button>
          <button name={item.payload.reportId} onClick={handleResolve}>Resolve</button>
        </div>
    </div>
  </div>
  )
}

export default InfoCard