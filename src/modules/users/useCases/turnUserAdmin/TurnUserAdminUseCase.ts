import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userToTurnAdmin = this.usersRepository.findById(user_id);

    if (!userToTurnAdmin) {
      throw new Error("Mensagem do erro");
    }

    const userUpdated = this.usersRepository.turnAdmin(userToTurnAdmin);

    return userUpdated;
  }
}

export { TurnUserAdminUseCase };
