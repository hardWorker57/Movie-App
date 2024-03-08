import React from 'react'
import s from './Sidebar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCompass, faTrophy, faCircleCheck, faClock, faStar, faDownload, faHeart, faCirclePlus, faChampagneGlasses, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className={s.sidebar}>
      <div className="menu">
        <h4>Menu</h4>
        <ul className={s.menu}>
          <li><Link to="/" className={s.menu__list}><span><FontAwesomeIcon icon={ faHouse } /></span> Home</Link></li>
          <li><Link to="#" className={s.menu__list}><span><FontAwesomeIcon icon={ faCompass } /></span> Discover</Link></li>
          <li><Link to="#" className={s.menu__list}><span><FontAwesomeIcon icon={faTrophy} /></span> Awards</Link></li>
          <li><Link to="#" className={s.menu__list}><span><FontAwesomeIcon icon={faChampagneGlasses} /></span> Celebrities</Link></li>
        </ul>
      </div>
      <div className="library">
        <h4>Library</h4>
        <ul className={s.library}>
          <li><Link to="#" className={s.menu__list}><span><FontAwesomeIcon icon={faClock} /></span> Recent</Link></li>
          <li><Link to="#" className={s.menu__list}><span><FontAwesomeIcon icon={faStar} /></span> Top Rated</Link></li>
          <li><Link to="#" className={s.menu__list}><span><FontAwesomeIcon icon={faDownload} /></span> Downloaded</Link></li>
          <li><Link to="#" className={s.menu__list}><span><FontAwesomeIcon icon={faHeart} /></span> Playlists</Link></li>
          <li><Link to="#" className={s.menu__list}><span><FontAwesomeIcon icon={faCirclePlus} /></span> Watchlist</Link></li>
          <li><Link to="#" className={s.menu__list}><span><FontAwesomeIcon icon={faCircleCheck} /></span> Completed</Link></li>
        </ul>
      </div>
      <div className="general">
        <h4>General</h4>
        <ul className={s.general}>
          <li><a href="#" className={s.menu__list}><span><FontAwesomeIcon icon={faGear} /></span> Settings</a></li>
          <li><a href="#" className={s.menu__list}><span><FontAwesomeIcon icon={faArrowRightFromBracket} /></span> Log Out</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar