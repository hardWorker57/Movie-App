import React from 'react'
import s from './Sidebar.module.scss'

const Sidebar = () => {
  return (
    <div className={s.sidebar}>
      <div className="menu">
        <h4>Menu</h4>
        <ul className={s.menu}>
          <li><a href="#" className={s.menu__list}>Home</a></li>
          <li><a href="#" className={s.menu__list}>Discover</a></li>
          <li><a href="#" className={s.menu__list}>Awards</a></li>
          <li><a href="#" className={s.menu__list}>Celebrities</a></li>
        </ul>
      </div>
      <div className="library">
        <h4>Library</h4>
        <ul className={s.library}>
          <li><a href="#" className={s.menu__list}>Recent</a></li>
          <li><a href="#" className={s.menu__list}>Top Rated</a></li>
          <li><a href="#" className={s.menu__list}>Downloaded</a></li>
          <li><a href="#" className={s.menu__list}>Playlists</a></li>
          <li><a href="#" className={s.menu__list}>Watchlist</a></li>
          <li><a href="#" className={s.menu__list}>Completed</a></li>
        </ul>
      </div>
      <div className="general">
        <h4>General</h4>
        <ul className={s.general}>
          <li><a href="#" className={s.menu__list}>Settings</a></li>
          <li><a href="#" className={s.menu__list}>Log Out</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar