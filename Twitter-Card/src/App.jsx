// npm run dev

import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  return(
    <section className='App'>
      <TwitterFollowCard userName='midudev'>
        Miguel Angel Duran
      </TwitterFollowCard>
      
      <TwitterFollowCard >
        Dua Lipa
      </TwitterFollowCard>
      
      <TwitterFollowCard userName="ernie.codes">
        Ernie Codes
      </TwitterFollowCard>
    </section>
  )
}