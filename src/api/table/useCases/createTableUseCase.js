import Table from '../schemas'

export const createTableUseCase = async ({ body }) => {
  const verify = await Table.findOne({ tableNumber: body.tableNumber })
  if (!verify) return await Table.create(body)
  throw new Error(`Mesa ${body.tableNumber} Já existe`)
}
