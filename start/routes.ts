/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const WritersController = () => import('#controllers/writers_controller')
const RegistersController = () => import('#controllers/auth/registers_controller')
const LoginController = () => import('#controllers/auth/login_controller')
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
const AdminDashboardController = () => import('#controllers/admin/dashboard_controller')
const AdminMoviesController = () => import('#controllers/admin/movies_controller')
import AvatarsController from '#controllers/avatars_controller'
import DemosController from '#controllers/demos_controller'
const ProfilesController = () => import('#controllers/profiles_controller')
const WatchlistsController = () => import('#controllers/watchlists_controller')
const HomeController = () => import('#controllers/home_controller')
const LogoutsController = () => import('#controllers/auth/logouts_controller')
const DirectorsController = () => import('#controllers/directors_controller')
const MoviesController = () => import('#controllers/movies_controller')
const RedisController = () => import('#controllers/redis_controller')

router.get('/', [HomeController, 'index']).as('home')

router.get('/avatars/:filename', [AvatarsController, 'show']).as('avatars.show')

router.get('/movies', [MoviesController, 'index']).as('movies.index')

router
  .get('/movies/:slug', [MoviesController, 'show'])
  .as('movies.show')
  .where('slug', router.matchers.slug())

  router
  .group(() => {
    router.get('/watchlist', [WatchlistsController, 'index']).as('index')
    router.post('/watchlists/:movieId/toggle', [WatchlistsController, 'toggle']).as('toggle')
    router
      .post('/watchlists/:movieId/toggle-watched', [WatchlistsController, 'toggleWatched'])
      .as('toggle.watched')
  })
  .as('watchlists')
  .use(middleware.auth())

router.get('/directors', [DirectorsController, 'index']).as('directors.index')
router.get('/directors/:id', [DirectorsController, 'show']).as('directors.show')

router.get('/writers', [WritersController, 'index']).as('writers.index')
router.get('/writers/:id', [WritersController, 'show']).as('writers.show')

router.delete('/redis/flush', [RedisController, 'flush']).as('redis.flush')
router.delete('/redis/:slug', [RedisController, 'destroy']).as('redis.destroy')


router.get('/profile/edit', [ProfilesController, 'edit']).as('profiles.edit').use(middleware.auth())
router.put('/profiles', [ProfilesController, 'update']).as('profiles.update').use(middleware.auth())

router
  .group(() => {
    router
      .get('/register', [RegistersController, 'show'])
      .as('register.show')
      .use(middleware.guest())
    router
      .post('/register', [RegistersController, 'store'])
      .as('register.store')
      .use(middleware.guest())
    router.get('/login', [LoginController, 'show']).as('login.show').use(middleware.guest())
    router.post('/login', [LoginController, 'store']).as('login.store').use(middleware.guest())
    router.post('/logout', [LogoutsController, 'handle']).as('logout').use(middleware.auth())
  })
  .prefix('/auth')
  .as('auth')


  router.get('/profiles/:id', [ProfilesController, 'show']).as('profiles.show')

router
  .group(() => {
        router.get('/', [AdminDashboardController, 'handle']).as('dashboard')

           router.resource('movies', AdminMoviesController)
  })
  .prefix('/admin')
  .as('admin')
  .use(middleware.admin())

  router.get('/demo',[DemosController,'index']).as('demo_table')
  router.get('/demo/create',[DemosController,'create']).as('demo_creation')
  router.post('/demo',[DemosController,'store']).as('demo_save')