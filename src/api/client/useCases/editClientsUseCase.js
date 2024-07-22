import Clients from '../schemas'

export const editClientsUseCase = async ({ body, id }) => {
  const target = await Clients.findById(id)
  return await Object.assign(target, body).save()
}
