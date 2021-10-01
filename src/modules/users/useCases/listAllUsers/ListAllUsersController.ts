import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers;

      const userIdToString = String(user_id);

      const users = this.listAllUsersUseCase.execute({
        user_id: userIdToString,
      });

      return response.json(users);
    } catch {
      return response.status(400).json({ error: "Mensagem de erro" });
    }
  }
}

export { ListAllUsersController };
