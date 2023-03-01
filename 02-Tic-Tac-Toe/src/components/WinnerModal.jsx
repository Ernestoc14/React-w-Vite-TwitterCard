import { Square } from './Square'
export function WinnerModal ({ winner, resetGame }) {
  if (winner == null) return null

  const winnerText = winner === false ? 'Tie Game' : winner + ' Win the match!'
  return (
    <section className='winner'>
      <div className='text'>
        <h2>
          {winnerText}
        </h2>
        <header className='win'>
          {winner && <Square>{winner}</Square>}
        </header>
        <footer>
          <button onClick={resetGame}>Start a New Game</button>
        </footer>
      </div>
    </section>
  )
}
