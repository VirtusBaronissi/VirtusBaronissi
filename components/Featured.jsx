import React from 'react'
import styles from '../styles/Featured.module.css'

const Fetatured = () => {

  const data = {
    punteggio1: 82,
    punteggio2: 67,
    squadraAvversaria: 'guest'
  }

  const next = {
    squadraAvversaria: 'guest'
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.last}>ULTIMO INCONTRO</h1>
      <div className={styles.box}>
        <div className={styles.team}>
          <img src="/logo.png" alt="" />
          <h2>Virtus Baronissi</h2>
        </div>
        <div className={styles.punteggio}>
          <h1>{data.punteggio1} - {data.punteggio2}</h1>
        </div>
        <div className={styles.team}>
          <img src="/guest.webp" alt="" />
          <h2>Guest</h2>
        </div>
      </div>

      <div className={styles.nextContainer}>
        <div className={styles.next}>
          <span>Schedule</span>
          <h1>PROSSIMI INCONTRI</h1>
        </div>

        <div className={`${styles.box} ${styles.responsive}`} style={{width: '500px', height: "fit-content"}}>
          <div className={styles.team2}>
            <img src="/logo.png" alt="" style={{width: '150px', height: '150px'}} />
            <h2>Virtus Baronissi</h2>
          </div>
          <div className={styles.vs}>
            <h1>VS</h1>
          </div>
          <div className={styles.team2}>
            <img src="/guest.webp" alt="" style={{width: '150px', height: '150px'}} />
            <h2>Guest</h2>
          </div>
        </div>

        <div className={`${styles.box} ${styles.responsive}`} style={{width: '450px', height: "fit-content"}}>
          <div className={styles.team2}>
            <img src="/logo.png" alt="" style={{width: '120px', height: '120px'}} />
            <h2>Virtus Baronissi</h2>
          </div>
          <div className={styles.vs}>
            <h1>VS</h1>
          </div>
          <div className={styles.team2}>
            <img src="/guest.webp" alt="" style={{width: '120px', height: '120px'}} />
            <h2>Guest</h2>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Fetatured