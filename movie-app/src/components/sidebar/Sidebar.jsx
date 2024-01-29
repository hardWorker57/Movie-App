import React from 'react'
import s from './Sidebar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCompass, faTrophy, faCircleCheck, faClock, faStar, faDownload, faHeart, faCirclePlus, faChampagneGlasses, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className={s.sidebar}>
      <div className="menu">
        <h4>Menu</h4>
        <ul className={s.menu}>
          <li><a href="#" className={s.menu__list}><FontAwesomeIcon icon={ faHouse } /> Home</a></li>
          <li><a href="#" className={s.menu__list}><FontAwesomeIcon icon={ faCompass } /> Discover</a></li>
          <li><a href="#" className={s.menu__list}><FontAwesomeIcon icon={faTrophy} /> Awards</a></li>
          <li><a href="#" className={s.menu__list}><FontAwesomeIcon icon={faChampagneGlasses} /> Celebrities</a></li>
        </ul>
      </div>
      <div className="library">
        <h4>Library</h4>
        <ul className={s.library}>
          <li><a href="#" className={s.menu__list}><FontAwesomeIcon icon={faClock} /> Recent</a></li>
          <li><a href="#" className={s.menu__list}><FontAwesomeIcon icon={faStar} /> Top Rated</a></li>
          <li><a href="#" className={s.menu__list}><FontAwesomeIcon icon={faDownload} /> Downloaded</a></li>
          <li><a href="#" className={s.menu__list}><FontAwesomeIcon icon={faHeart} /> Playlists</a></li>
          <li><a href="#" className={s.menu__list}><FontAwesomeIcon icon={faCirclePlus} /> Watchlist</a></li>
          <li><a href="#" className={s.menu__list}><FontAwesomeIcon icon={faCircleCheck} /> Completed</a></li>
        </ul>
      </div>
      <div className="general">
        <h4>General</h4>
        <ul className={s.general}>
          <li><a href="#" className={s.menu__list}><FontAwesomeIcon icon={faGear} /> Settings</a></li>
          <li><a href="#" className={s.menu__list}><FontAwesomeIcon icon={faArrowRightFromBracket} /> Log Out</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar