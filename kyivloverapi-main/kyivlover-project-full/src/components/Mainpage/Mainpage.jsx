import s from "./Mainpage.module.css"
import { Link } from "react-router-dom"

import Instagram from "../../media/img/Header/inst.png"
import Telegram from "../../media/img/Header/telega.png"

const Header = () => {
   return(
      <div className={s.mainpage}>
         <div className={s.content}>
            <div className={s.item}>
               <div className={s.socialBlock}>
                  <a href="https://www.instagram.com/thekyivlover/" className={s.socialItem}>
                     <img src={Instagram} alt="" />
                  </a>
                  <a href="https://t.me/thekyivlover" className={s.socialItem}>
                     <img src={Telegram} alt="" />
                  </a>
               </div>
            </div>
            <div className={s.item}>
               <h1 className={s.h1}>
                  THE KYIVLOVER
               </h1>
               <div className={s.buttonArea}>
                  <Link to="/gallery" className={s.enter}>ENTER</Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Header