import { apiClient } from "./config"

export const apiGetTherapists= async() => {
    return apiClient.get("/therapistprofiles",);
};
export const apiGetTherapistById= async(id) => {
    return apiClient.get(`/therapistprofiles/${id}`,);
};