import { importFotos } from "../../api/api"

const SET_FOTOS = "SET_FOTOS"
const SET_USERNAME = "SET_USERNAME"
const SET_PASSWORD = "SET_PASSWORD"
const SET_POPUP_VISIBILITY = "SET_POPUP_VISIBILITY"

/* 
[
      {
         id: 0, 
         text: "БУДИНОК АПТЕКАРЯ ФРОМЕТТА", 
         picSrc: pic1,
         aboutData: {
            historyText: [
               "Будівля належала аптекарю з Прилук Миколі Фроммету. 1871 року він купує ділянку на перетині теперішніх бульвару Тараса Шевченка та вулиці Коцюбинського. Після завершення будівництва Фроммет розміщує свою аптеку на першому поверсі.",
               "Яскравий зразок житлової забудови доби ранньої еклектики. Комплекс будівель нагадує казковий замок через романо-готичні мотиви."
            ],
            location: "бульвар Тараса Шевченка, 36 "
         }
      },
      {
         id: 1, 
         text: "ПРИБУТКОВИЙ БУДИНОК НА ЖИТОМИРСЬКІЙ", 
         picSrc: pic2,
         aboutData: {
            historyText: [
               "П'ятиповерховий прибутковий будинок був збудований у 1912 році на місці садиби Кравцова. Фасад оформлений у стилі неокласицизм, складається із двох різних житлових секцій.",
               "У будинку проживала родина мистецтвознавця та археолога Адріана Прахова."
            ],
            location: "вулиця Велика Житомирська, 40"
         }
      },
      {
         id: 2, 
         text: "ЖИТЛОВИЙ БУДИНОК НА СІЧОВИХ СТРІЛЬЦІВ", 
         picSrc: pic3,
         aboutData: {
            historyText: [
               "Збудований 1898 року київським архітектором Володимиром Ніколаєвим на ділянці інженера-технолога Ф.Фальберга. Крім житлових апартаментів усередині розташовувалась школа живопису та ліплення академіка В. Галинського, а також Польське гімнастичне товариство.",
               "Кожен поверх був розрахований на дві великі п'ятикімнатні квартири."
            ],
            location: "вулиця Січових Стрільців, 14"
         }
      },
      {
         id: 3,
         text: "БУДИНОК ІЗ КОТАМИ", 
         picSrc: pic4,
         aboutData: {
            historyText: [
               "Побудований у 1909 році у стилі пізнього модерну з елементами неоготики та романського стилю. Автором проекту був талановитий київський архітектор Володимир Безсмертний.",
               "Ще одна особливість фасаду - велика кількість декору. Якщо придивитися, можна розгледіти двох сов над дверима, двох кішок біля вікна на першому поверсі, фамільний герб Ягімовських."
            ],
            location: "вулиця Гоголівська, 23"
         }
      },
   ]
*/

let initial_state = {
   fotos: [],
   username: "",
   password: "",
   popupVisibly: false
}

export const galleryReducer = (state = initial_state, action) => {
   switch (action.type){
      case SET_FOTOS:
         return{
            ...state,
            fotos: action.fotos
         }
      case SET_PASSWORD:
         return{
            ...state,
            password: action.password
         }
      case SET_USERNAME:
         return{
            ...state,
            username: action.username
         }
      case SET_POPUP_VISIBILITY:
         return{
            ...state,
            popupVisibly: action.newval
         }
      default:
         return state
   }
}

export const setPasswordAC = (password) => ({
   type: SET_PASSWORD,
   password
})
export const setPopupVisibilityAC = (newval) => ({
   type: SET_POPUP_VISIBILITY,
   newval
})
export const setUsernameAC = (username) => ({
   type: SET_USERNAME,
   username
})
const setFotosAC = (fotos) => ({
   type: SET_FOTOS,
   fotos
})

export const setFotosThunk = () => {
   return (dispatch) => {
      return importFotos()
         .then(res => dispatch(setFotosAC(res.fotos)))
   }
}