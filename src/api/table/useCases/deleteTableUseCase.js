import Table from '../schemas'

export const deleteTableUseCase = async (_id) => {
  return await Table.deleteOne({ _id })
}
