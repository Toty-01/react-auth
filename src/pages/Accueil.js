import React from 'react'
import ConnectModal from '../components/ConnectModal'

const Accueil = () => {
  return (
    <div className='Home'>
      <h1>Accueil</h1>
      <div className="app-header">
        <ConnectModal />
      </div>
      <div className="posts-container"></div>
    </div>
  )
}

export default Accueil