import { createTableUseCase } from '../useCases/createTableUseCase'
import { deleteTableUseCase } from '../useCases/deleteTableUseCase'
import { editTableUseCase } from '../useCases/editTableUseCase'
import { showTableUseCase } from '../useCases/showTableUseCase'
import { showTablesUseCase } from '../useCases/showTablesUseCase'

export const create = async ({ bodymen: body }, response, next) => {
  try {
    const created = await createTableUseCase(body)
    response.status(201).json(created)
  } catch (error) {
    next(error)
  }
}

export const index = async ({ querymen }, response, next) => {
  try {
    const indexes = await showTablesUseCase(querymen)
    response.status(200).json(indexes)
  } catch (error) {
    next(error)
  }
}

export const show = async ({ params }, response, next) => {
  try {
    const target = await showTableUseCase(params.id)
    response.status(200).json(target)
  } catch (error) {
    next(error)
  }
}

export const update = async ({ bodymen, params }, response, next) => {
  try {
    const updated = await editTableUseCase({
      body: bodymen.body,
      id: params.id
    })

    response.status(200).json(updated)
  } catch (error) {
    next(error)
  }
}

export const destroy = async ({ params: { id } }, response, next) => {
  try {
    await deleteTableUseCase(id)
    response.status(204).json()
  } catch (error) {
    next(error)
  }
}
