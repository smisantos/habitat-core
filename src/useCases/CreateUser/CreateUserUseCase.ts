/* eslint-disable no-useless-constructor */
import { IUsersRepository } from 'src/repositories/IUsersRepository'
import { IcreateUserRequestDTO } from './CreateUserDTO'
import User from '../../entities/User'

export class CreateUserUseCase {
  constructor (
        private usersRepository : IUsersRepository
  ) {}

  async execute (data: IcreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findUserByUsername(data.username)

    if (userAlreadyExists) {
      throw new Error('User already exists!')
    }

    const user = new User(data)

    await this.usersRepository.saveUser(user)
  }
}
