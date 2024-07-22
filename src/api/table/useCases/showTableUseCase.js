import Table from '../schemas'

export const showTableUseCase = async (id) => {
  const target = await Table.findById(id)
  return target.view(true)
}
