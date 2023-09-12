import axios from 'axios';
import { EmployerData, apiUrl } from './global';


export const createEmployer = async (employerData:EmployerData) => {
    try {
      const response = await axios.post(`${apiUrl}/employers`, employerData );
  
      if (response.status !== 201) {
        throw new Error(`Erreur HTTP : ${response.status} - ${response.statusText}`);
      }
      console.log(response.data)
      if (response.data === "") {
        return false;
      }
      return true;
    } catch (error) {
      console.error('Erreur lors de la création de l\'employeur :', error);
      throw error;
    }
  };


export const getEmployer = async (email:string) => {
 try {
  const response = await axios.get(`${apiUrl}/employers/${email}`);
    
    if (response.status !== 200) {
      return null;
    }

    if (response.data === "") {
      return null;
    }
    
    const data: EmployerData = {
      email: response.data.email,
      name: response.data.name,
      surname: response.data.surname,
      enterprise_name: response.data.enterprise_name
    };
    
    return data;
 }
    
    catch(error){
      console.error('Erreur lors de la vérification de l\'employeur :', error);
      console.error(error);
      return(null)
    };
  } 