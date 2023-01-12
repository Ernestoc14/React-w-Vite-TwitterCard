import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  return(
    <section className='App'>
      <TwitterFollowCard isFollowing={true} userName="midudev" name="Miguel Angel Duran"/>
      <TwitterFollowCard isFollowing={false} userName="ernie" name="Ernie Codes"/>
      <TwitterFollowCard isFollowing={true} userName="elonmusk" name="Elon Musk"/>
      <TwitterFollowCard isFollowing={false} userName="dualipa" name="Dua Lipa"/>
    </section>
  )
}