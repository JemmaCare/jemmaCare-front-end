import { apiClient } from "./config"

export const apiAppointmentDateTime= async(payload) => {
    return apiClient.post("/auth/signup",payload);
};