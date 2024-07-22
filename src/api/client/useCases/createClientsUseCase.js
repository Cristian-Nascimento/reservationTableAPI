import Client from '../schemas'
import Table from '../../table/schemas'

export const createClientsUseCase = async ({ body }) => {
  const { tableNumber, hourReservation, name } = body

  // Converter a hora da reserva para um objeto Date
  const reservationDate = new Date(hourReservation)

  // Calcular os intervalos de ±1 hora
  const oneHourBefore = new Date(reservationDate.getTime() - 60 * 60 * 1000)
  const oneHourAfter = new Date(reservationDate.getTime() + 60 * 60 * 1000)

  // Procurar por reservas existentes dentro do intervalo de ±1 hora
  const conflictingReservations = await Table.find({
    tableNumber: tableNumber,
    hourReservation: {
      $gte: oneHourBefore,
      $lte: oneHourAfter
    }
  })

  // Verificar se há conflitos
  if (conflictingReservations.length > 0) {
    throw new Error('Já existe uma reserva para esta mesa dentro de um intervalo de ±1 hora.')
  }

  // Se não houver conflitos, criar o cliente
  await Table.create({
    tableNumber: tableNumber,
    client: name,
    hourReservation: hourReservation
  })
  return await Client.create(body)
}
