import React, { useState } from 'react'
import s from './Header.module.scss'

const Header = () => {
    
    const [search, setSearch] = useState("");
    
  return (
      <div className='Header'>
          <div className="container">
              <div className={s.nav}>
                <ul className={s.menu}>
                    <li><a href="" className="menu_list">Movies</a></li>
                    <li><a href="" className="menu_list">TV Shows</a></li>
                    <li><a href="" className="menu_list">Anime</a></li>
                </ul>
                <div className={s.search}>
                    <span>i</span><input type="search" name="search" id="" placeholder='Search' onChange={(e) => setSearch(e.target.value)} /><span>i</span>
                </div>
              </div>
          </div>
      </div>
  )
}

export default Header