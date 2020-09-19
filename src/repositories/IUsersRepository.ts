import User from 'src/entities/User'

export interface IUsersRepository {
    findUserByMail(email:string): Promise<User>
    findUserByUsername(username:string): Promise<User>
    saveUser(user: User): Promise<void>
}
