import axios from 'axios';
import { EmployerData, apiUrl, jobSeekerData, userEnum } from './global';

export const createUser = async (employerData:EmployerData | jobSeekerData):Promise<userEnum> => {
    try {
      const response = await axios.post(`${apiUrl}/users`, employerData );
  
      if (response.status !== 201) {
        throw new Error(`Erreur HTTP : ${response.status} - ${response.statusText}`);
      }
      console.log(response.data)
      if (response.data === "") {
        return userEnum.notExist;
      }
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la création de l\'employeur :', error);
      throw error;
    }
};

export const userParam = async (email:string) => {
    
    const user = await axios.get(`${apiUrl}/users/${email}`);
    if (user.data.length !== 0) {
        if (user.data === userEnum.isEmployer) 
            return userEnum.isEmployer;
        if (user.data === userEnum.isJobSeeker) 
            return userEnum.isJobSeeker;
    }
    return userEnum.notExist;
} 

export const deleteUser = async (email:string) => {
    try {
        const response = await axios.post(`${apiUrl}/users/${email}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

export const userExist = async (email:string) => {
    const user = await userParam(email);
    if (user === userEnum.notExist)
        return false;
    return true;
}
