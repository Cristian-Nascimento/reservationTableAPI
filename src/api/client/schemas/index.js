import mongoose, { Schema } from 'mongoose'

const clientSchema = new Schema({
  name: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  tableNumber: {
    type: Number
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

clientSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      phoneNumber: this.phoneNumber,
      tableNumber: this.tableNumber,
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

const model = mongoose.model('Client', clientSchema)

export const schema = model.schema
export default model
