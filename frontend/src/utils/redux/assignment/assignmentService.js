import axiosClient from "../../axios/axios-client";
import { API_GROUP, API_ORGANIZATION, API_PUROK } from "../../urls/api_url";

const Get_Purok = async () => {
  const response = await axiosClient.get(API_PUROK);
  if (response.data) {
    return response;
  }
};

const Get_Organization = async () => {
  const response = await axiosClient.get(API_ORGANIZATION);
  if (response.data) {
    return response;
  }
};

const Get_Group = async () => {
  const response = await axiosClient.get(API_GROUP);
  if (response.data) {
    return response;
  }
};

const assignmentService = {
  Get_Purok,
  Get_Organization,
  Get_Group,
};

export default assignmentService;
