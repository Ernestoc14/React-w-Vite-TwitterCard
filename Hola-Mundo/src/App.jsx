// npm run dev

import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  return(
    <section className='App'>
      <TwitterFollowCard isFollowing={true} >
        Miguel Angel Duran
      </TwitterFollowCard>
      
      <TwitterFollowCard isFollowing={false} userName="ernie" name="Ernie Codes"/>
    </section>
  )
}