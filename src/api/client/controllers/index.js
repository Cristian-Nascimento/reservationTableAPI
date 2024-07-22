import { createClientsUseCase } from '../useCases/createClientsUseCase'
import { deleteClientsUseCase } from '../useCases/deleteClientsUseCase'
import { editClientsUseCase } from '../useCases/editClientsUseCase'
import { showClientsUseCase } from '../useCases/showClientsUseCase'
import { showClientUseCase } from '../useCases/showClientUseCase'

export const create = async ({ bodymen: body }, response, next) => {
  try {
    const created = await createClientsUseCase(body)
    response.status(201).json(created)
  } catch (error) {
    next(error)
  }
}

export const index = async ({ querymen }, response, next) => {
  try {
    const indexes = await showClientsUseCase(querymen)
    response.status(200).json(indexes)
  } catch (error) {
    next(error)
  }
}

export const show = async ({ params }, response, next) => {
  try {
    const target = await showClientUseCase(params.id)
    response.status(200).json(target)
  } catch (error) {
    next(error)
  }
}

export const update = async ({ bodymen, params }, response, next) => {
  try {
    const updated = await editClientsUseCase({
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
    await deleteClientsUseCase(id)
    response.status(204).json()
  } catch (error) {
    next(error)
  }
}
