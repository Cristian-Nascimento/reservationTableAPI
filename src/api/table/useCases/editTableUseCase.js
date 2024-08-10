import Table from '../schemas'

export const editTableUseCase = async ({ body, id }) => {
  const { tableNumber, hourReservation } = body

  const reservationDate = new Date(hourReservation.getTime())

  const oneHourBefore = new Date(reservationDate.getTime() - 60 * 60 * 1000)
  const oneHourAfter = new Date(reservationDate.getTime() + 60 * 60 * 1000)

  const target = await Table.findById(id)

  const conflictingReservations = await Table.find({
    tableNumber: tableNumber,
    hourReservation: {
      $gte: oneHourBefore,
      $lte: oneHourAfter
    },
    _id: { $ne: id }
  })

  if (conflictingReservations.length > 0) {
    throw new Error('Já existe uma reserva para esta mesa dentro de um intervalo de ±1 hora.')
  }

  Object.assign(target, body)
  return await target.save()
}
