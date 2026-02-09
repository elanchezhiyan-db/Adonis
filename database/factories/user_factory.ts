import factory from '@adonisjs/lucid/factories'
import User from '#models/user'
import Roles from '#enums/roles'
import { ProfileFactory } from './profile_factory.js'
import Role from '#models/role'

export const UserFactory = factory
  .define(User, async ({ faker }) => {
    const role = await Role.query().where('name', 'User').firstOrFail()

    return {
      roleId: role.id,
      fullName: faker.person.fullName(),
      avatarUrl: faker.image.avatar(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    }
  })
  .relation('profile', () => ProfileFactory)
  .build()
