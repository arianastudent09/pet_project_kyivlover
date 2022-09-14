import * as axios from "axios"

export const importFotos = () => {
   return axios.get('https://arianastudent09.github.io/pet_project_kyivlover/kyivloverapi-main/data.json')
       .then(res => res.data)
       .catch(err => console.log(err));
}