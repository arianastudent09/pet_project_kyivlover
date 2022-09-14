import s from "./About.module.css"
import {Link} from "react-router-dom"

import luisa from "../../media/About/luisa.png"
import x from "../../media/About/x.png"

const About = () => {
   return(
      <>
         <Link to = "/gallery" className={s.close}>
            <img src={x} alt="" />
         </Link>

         <div className={s.block1}></div>
         <div className={s.block2}></div>

         <div className={s.about}>
            <div className={s.text}>
               <h1 className={s.h1}>
                  about blog
               </h1>

               <p className={s.aboutText}>
                  Авторка блогів <a href = "https://www.instagram.com/thekyivlover/ ">@thekyivlover</a> та <a href = "https://www.instagram.com/thechernivtsilover/">@thechernivtsilover</a>, smm-ниця. У блозі пише про любов до українських міст, архітектуру, світанки і заходи сонця та затишні місця. Їй вдається закохувати в місто або як мінімум дивитися на нього зовсім інакше, помічаючи те, на що раніше не звертав увагу.
               </p>

               <h3 className={s.name}>ЛУЇЗА АЛЯБ’ЄВА</h3>
               <div className={s.instLink}><a href="https://www.instagram.com/louisa.aliabieva/" >@louisa.aliabieva</a></div>
            </div>

            <div className={s.image}>
               <img className={s.luisa} src={luisa} alt="" />
            </div>

         </div>
      </>
   )
}

export default About