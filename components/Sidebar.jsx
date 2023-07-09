import React, {useEffect, useState} from 'react'
import styles from '../styles/Sidebar.module.css'
import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import MessageIcon from '@mui/icons-material/Message';
import {HiOutlineUserGroup} from 'react-icons/hi'
import {BiTime} from 'react-icons/bi'


const Sidebar = () => {
    const [id, setId] = useState(null)

    useEffect(() => {
        setId(location.pathname)
    }, [])
    
  return (
    <div className={styles.container}>
        <div className={styles.group}>
            <span className={styles.title}>Dashboard</span>
            <div className={styles.links}>
                <a href='/admin' className={id === '/admin' && styles.active}><HomeIcon /> Home </a>
                <a><AnalyticsIcon /> Analytics </a>
                <a><ManageAccountsIcon /> Manage </a>
            </div>
        </div>
        <div className={styles.group}>
            <span className={styles.title}>Quick Menu</span>
            <div className={styles.links}>
                <a href="/admin/user" className={id  == '/admin/user' && styles.active}><PersonOutlineOutlinedIcon /> Users </a>
                <a href="/admin/team" className={id == '/admin/team' && styles.active}><GroupsOutlinedIcon /> Team </a>
                <a href="/admin/news" className={id == '/admin/news' && styles.active}><NewspaperOutlinedIcon /> News </a>
                <a href="/admin/match" className={id == '/admin/match' && styles.active}><SportsBasketballOutlinedIcon /> Matches </a>
                <a href="/admin/message" className={id == '/admin/message' && styles.active}><MessageIcon /> Messages </a>
                <a href="/admin/staff" className={id == '/admin/staff' && styles.active}><HiOutlineUserGroup /> Staff </a>
                <a href="/admin/orario" className={id == '/admin/orario' && styles.active}><BiTime /> Orari </a>
            </div>
        </div>
    </div>
  )
}

export default Sidebar