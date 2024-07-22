import mongoose, { Schema } from 'mongoose'

const tableSchema = new Schema({
  tableNumber: {
    type: Number
  },
  client: {
    type: String
  },
  hourReservation: {
    type: Date
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

tableSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      tableNumber: this.tableNumber,
      client: this.client,
      hourReservation: this.hourReservation,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Table', tableSchema)

export const schema = model.schema
export default model
