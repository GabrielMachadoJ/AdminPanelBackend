import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Finance from 'App/Models/Finance'

export default class FinancesController {
  public async store({request, response}: HttpContextContract) {
    const body = request.body()

    const finance = await Finance.create(body)

    response.status(201)

    return {
      message: 'Registrado com sucesso!',
      data: finance
    }
  }
}
