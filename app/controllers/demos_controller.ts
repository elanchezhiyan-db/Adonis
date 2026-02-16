import Demo from '#models/demo'
import type { HttpContext } from '@adonisjs/core/http'

export default class DemosController {
  
  async index({view}: HttpContext) {
    const recs=await Demo.all()

    return view.render('pages/demos/index',{recs})
  }
  
  async create({view}:HttpContext)
  {
    return view.render('pages/demos/create')
  }

  async store({request,response}:HttpContext)
  {

    const data =request.only(['name','role'])

    await Demo.create(data)

    return response.redirect('/demo')
  }
}