import Role from '#models/role'
import MovieStatus from '#models/movie_status'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Roles from '#enums/roles'
import MovieStatuses from '#enums/movie_statuses'
// import FakeSeeder from './01_fake_seeder.js'

export default class extends BaseSeeder {
  async run() {
    await Role.updateOrCreateMany('id', [
      {
        id: Roles.USER,
        name: 'User',
      },
      {
        id: Roles.ADMIN,
        name: 'Admin',
      },
    ])

    await MovieStatus.updateOrCreateMany('id', [
      {
        id: MovieStatuses.WRITING,
        name: 'Writing',
      },
      {
        id: MovieStatuses.CASTING,
        name: 'Casting',
      },
      {
        id: MovieStatuses.PRODUCTION,
        name: 'Production',
      },
      {
        id: MovieStatuses.POST_PRODUCTION,
        name: 'Post Production',
      },
      {
        id: MovieStatuses.RELEASED,
        name: 'Released',
      },
    ])

    // @ts-ignore
    // await this.call(FakeSeeder)
  }
}
