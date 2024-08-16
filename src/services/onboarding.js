import { apiClient } from "./config"

export const apiPatientResponses= async(payload) => {
    return apiClient.post("/patientresponses",payload);
};
