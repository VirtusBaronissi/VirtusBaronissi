import React from 'react';
import { useState } from 'react';
import styles from '../styles/Navbar.module.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


const Navbar = () => {

    const [isActive, setIsActive] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false);
    const [showDropDown2, setShowDropDown2] = useState(false);

  return (
    <div className={styles.container}>
        <img src="/logo.png" alt="" />
        <div className={styles.links}>
            <div className={isActive ? `${styles.menu} ${styles.active}` : styles.menu}>
                <a href="/">Home</a>
                <a href="/contatti">Contatti</a>
                <a href="/news">News</a>
                <span style={{display: 'inline-flex', alignItems: 'center'}}>
                    Giovanili {showDropDown ? <ArrowDropUpIcon onClick={() => setShowDropDown(prev => !prev)} /> : <ArrowDropDownIcon onClick={() => setShowDropDown(prev => !prev)} />}
                    <div className={(showDropDown) ? `${styles.dropdown} ${styles.show}` : styles.dropdown}>
                        <a href="/squadra/under19"><SportsBasketballIcon /> Under 19</a>
                        <a href="/squadra/under17"><SportsBasketballIcon /> Under 17</a>
                        <a href="/squadra/under15"><SportsBasketballIcon /> Under 15</a>
                        <a href="/squadra/minibasket"><SportsBasketballIcon /> Minibasket</a>
                    </div>
                </span>
                <span  style={{display: 'inline-flex', alignItems: 'center'}}>
                    Corsi {showDropDown2 ? <ArrowDropUpIcon onClick={() => setShowDropDown2(prev => !prev)} /> : <ArrowDropDownIcon onClick={() => setShowDropDown2(prev => !prev)} />}
                    <div className={(showDropDown2) ? `${styles.dropdown2} ${styles.show}` : styles.dropdown2}>
                        <span ><AccessTimeIcon /> ore 16:00-17:00 Minibasket (2016-2013) - solo lunedi</span>
                        <span ><AccessTimeIcon /> ore 17:00-18:00 Minibasket (2012-2011)</span>
                        <span ><AccessTimeIcon /> ore 18:00-19:00 Under 15 (2010-2007)</span>
                        <span ><AccessTimeIcon /> ore 19:00-20:15 Under 17 (2006-2005)</span>
                        <span ><AccessTimeIcon /> ore 20:15-21:30 Under 19 (2004-2003-2002)</span>
                    </div>
                </span>
            </div>
            <div onClick={() => {
                setIsActive(prev => !prev);
                setShowDropDown(false)
            }} className={isActive ? `${styles.hamburger} ${styles.active}` : styles.hamburger}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>
        </div>
    </div>
  )
}

export default Navbar