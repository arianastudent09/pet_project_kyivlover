import s from "./Gellery.module.css"
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom'

import loginFoto from "../../media/Gallery/login.png"
import userFoto from "../../media/Gallery/user.png"

import { useDispatch, useSelector } from "react-redux"
import { setPasswordAC, setUsernameAC, setPopupVisibilityAC } from "../../store/reducers/galleryReducer"
import { useEffect } from "react"

const Gallery = () => {
   // For deleting accaunt
   // localStorage.setItem("userData",",")

   if (localStorage.getItem("userData") == null || localStorage.getItem("userData") == undefined){
      localStorage.setItem("userData",",")
   }

   const location = useLocation();
   const dispatch = useDispatch();

   const fotos = useSelector(state => state.gallery.fotos);
   const username = useSelector(state => state.gallery.username);
   const password = useSelector(state => state.gallery.password);
   const popupVisibility = useSelector(state => state.gallery.popupVisibly)

   useEffect(() => {
      if (localStorage.getItem("userData") == null || localStorage.getItem("userData") == undefined){
         localStorage.setItem("userData",",")
      }
   }, [])

   const setUsername = (usern) => {
      dispatch(setUsernameAC(usern))
   }
   const setPassword = (pass) => {
      dispatch(setPasswordAC(pass))
   }
   const togglePopup = (newval) => {
      dispatch(setPopupVisibilityAC(newval))
   }

   const showPopup = () => {
      togglePopup(!popupVisibility)
   }
   const login = () => {
      localStorage.setItem("userData", username+","+password)
      togglePopup(false)
   }


   const mapFotos = fotos.map(f => (
      <div className={s.fitem} key = {f.id}>
            <div className={s.about}>
               <h2 className={s.name}><Link to = {"/history/"+f.id}>{f.text}</Link></h2>
            </div>
         <img className={s.pic} src={f.picSrc} alt="" />
      </div>
   ))

   return(
      <>
         <div className={s.gallery}>
            {
               popupVisibility
               ? <>
               <div className={s.popup} onClick = {showPopup}>
               </div>
               <div className={s.form}>
                     <center>
                        <img src={loginFoto} alt="" />
                        <h3 className={s.loginh3}>Log in</h3>
                     </center>

                        <div className={s.inputs}>
                           <div className={s.inputArea}>
                              <p className={s.inputText}>USERNAME</p>
                              <input value={username} onChange = {(e) => setUsername(e.target.value)} type="text" className={s.input} />
                           </div>

                           <div className={s.inputArea} style = {{marginTop: 34}}>
                              <p className={s.inputText}>PASSWORD</p>
                              <input value={password} onChange = {(e) => setPassword(e.target.value)} type="password" className={s.input} />
                           </div>
                           <button onClick={login} className={s.loginbtn}>LOGIN</button>
                        </div>
                  </div>
               </>
               :''
            }
            <header className={s.header}>
               <h1 className={s.h1 +" "+s.item}>THE KYIVLOVER.</h1>
               <div className={s.item +" "+ s.pages}>
                  <Link className = {location.pathname == "/" ? s.link + " " + s.checked : s.link} to = "/">welcome</Link>
                  <Link className = {location.pathname == "/gallery" ? s.link + " " + s.checked : s.link} to = "/gallery">Gallery</Link>
                  <Link className = {location.pathname == "/about" ? s.link + " " + s.checked : s.link} to = "/about">about BLOG</Link>
               </div>
               <div className={s.item}>
                  {
                     localStorage.getItem("userData").length > 1
                        ? <div className={s.profileArea}>
                           <img src={userFoto} alt="" />
                           <p className={s.username}>{localStorage.getItem("userData").split(",")[0]}</p>
                        </div>
                        : <button onClick={showPopup} className={s.button}>LOGIN</button>
                  }
               </div>
            </header>

            <div className={s.fotos}>
               {mapFotos}
            </div>
         </div>
      </>
   )
}

export default Gallery