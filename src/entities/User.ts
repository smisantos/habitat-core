import { Entity, PrimaryGeneratedColumn, Unique, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('users')
@Unique(['username'])
class User {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    role: string;

    @Column()
    userStatus: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

export default User
