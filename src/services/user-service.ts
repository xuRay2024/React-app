import { partialUtil } from "zod/lib/helpers/partialUtil";
import apiClient from "./api-client";

export interface Persons {
  id: number;
  name: string;
}

class UserService {
  getAllUsers() {
    const controller = new AbortController();

    const request = apiClient.get<Persons[]>("/users", {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  deleteUser(id: number) {
    return apiClient.delete("/users/" + id);
  }

  addUser(user: Persons) {
    return apiClient.post("/users", user);
  }

  updateUser(user: Persons) {
    return apiClient.patch("/users/" + user.id, user);
  }
}

export default new UserService();
