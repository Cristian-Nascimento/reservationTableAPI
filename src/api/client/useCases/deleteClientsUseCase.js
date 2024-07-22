import Client from '../schemas'

export const deleteClientsUseCase = async (_id) => {
  return await Client.deleteOne({ _id })
}
