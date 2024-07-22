import Table from '../schemas'

export const showTablesUseCase = async () => {
  const rows = await Table.find()
    .then(docs => docs.map(doc => doc.view()))
  return rows
}
