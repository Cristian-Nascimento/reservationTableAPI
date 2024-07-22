import Clients from '../schemas'

export const showClientsUseCase = async ({ query, select, cursor }) => {
  const count = await Clients.countDocuments(query)
  const rows = await Clients.find(query, select, cursor)
    .then(docs => docs.map(doc => doc.view()))

  return { count, rows }
}
