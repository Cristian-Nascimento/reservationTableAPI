import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from '../controllers'
import { schema } from '../schemas'

const router = new Router()
const { tableNumber, client, hourReservation } = schema.tree

/**
 * @api {post} /tables Create table
 * @apiName CreateTable
 * @apiGroup Table
 * @apiParam tableNumber Table's tableNumber.
 * @apiParam client Table's client.
 * @apiParam hourReservation Table's hourReservation.
 * @apiSuccess {Object} table Table's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Table not found.
 */
router.post('/',
  body({ tableNumber, client, hourReservation }),
  create)

/**
 * @api {get} /tables Retrieve tables
 * @apiName RetrieveTables
 * @apiGroup Table
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of tables.
 * @apiSuccess {Object[]} rows List of tables.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /tables/:id Retrieve table
 * @apiName RetrieveTable
 * @apiGroup Table
 * @apiSuccess {Object} table Table's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Table not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /tables/:id Update table
 * @apiName UpdateTable
 * @apiGroup Table
 * @apiParam tableNumber Table's tableNumber.
 * @apiParam client Table's client.
 * @apiParam hourReservation Table's hourReservation.
 * @apiSuccess {Object} table Table's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Table not found.
 */
router.put('/:id',
  body({ tableNumber, client, hourReservation }),
  update)

/**
 * @api {delete} /tables/:id Delete table
 * @apiName DeleteTable
 * @apiGroup Table
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Table not found.
 */
router.delete('/:id',
  destroy)

export default router
