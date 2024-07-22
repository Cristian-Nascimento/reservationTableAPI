import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from '../controllers/index'
import { schema } from '../schemas'

const router = new Router()
const { name, phoneNumber, tableNumber, hourReservation } = schema.tree

/**
 * @api {post} /clients Create client
 * @apiName CreateClient
 * @apiGroup Client
 * @apiParam name Client's name.
 * @apiParam phoneNumber Client's phoneNumber.
 * @apiParam tableNumber Client's tableNumber.
 * @apiSuccess {Object} client Client's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Client not found.
 */
router.post('/',
  body({ name, phoneNumber, tableNumber, hourReservation }),
  create)

/**
 * @api {get} /clients Retrieve clients
 * @apiName RetrieveClients
 * @apiGroup Client
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of clients.
 * @apiSuccess {Object[]} rows List of clients.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /clients/:id Retrieve client
 * @apiName RetrieveClient
 * @apiGroup Client
 * @apiSuccess {Object} client Client's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Client not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /clients/:id Update client
 * @apiName UpdateClient
 * @apiGroup Client
 * @apiParam name Client's name.
 * @apiParam phoneNumber Client's phoneNumber.
 * @apiParam tableNumber Client's tableNumber.
 * @apiSuccess {Object} client Client's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Client not found.
 */
router.put('/:id',
  body({ name, phoneNumber, tableNumber }),
  update)

/**
 * @api {delete} /clients/:id Delete client
 * @apiName DeleteClient
 * @apiGroup Client
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Client not found.
 */
router.delete('/:id',
  destroy)

export default router
