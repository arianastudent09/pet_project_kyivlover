import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import s from "./History.module.css"
import { Link } from "react-router-dom"

import location from "../../media/History/location.png"
import x from "../../media/About/x.png"

const History = () => {

   const {linkID} = useParams()
   const fotos = useSelector(state => state.gallery.fotos)

   return(
      <>
         <div className={s.block1}></div>
         <div className={s.close}>
            <Link to = "/gallery"><img src={x} alt="" /></Link>
         </div>

         <div className={s.history}>
            <div className={s.flex}>
               <div className={s.item}>
                  {
                     fotos.map(f => {
                        if (f.id == linkID){
                           return <img className={s.pic} src={f.picSrc} alt="" />
                        }
                     }) 
                  }
               </div>
               <div className={s.item}>
                  <h1 className={s.h1}>History</h1>
                  {
                     fotos.map(f => {
                        if (f.id == linkID){
                           return f.aboutData.historyText.map(h => {
                              return <p className={s.text}>{h}</p>
                           })
                        }
                     })
                  }

                  <div className={s.location}>
                     <img src={location} alt="" />
                     <p className={s.location_text}>
                        {
                           fotos.map(f => {
                              if (f.id == linkID){
                                 return f.aboutData.location
                              }
                           })
                        }
                     </p>
                  </div>

               </div>
            </div>
         </div>
      </>
   )
}

export default History