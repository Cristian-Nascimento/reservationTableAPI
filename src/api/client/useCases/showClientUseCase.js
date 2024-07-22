import Clients from '../schemas'

export const showClientUseCase = async (id) => {
  const target = await Clients.findById(id)
  return target.view(true)
}
