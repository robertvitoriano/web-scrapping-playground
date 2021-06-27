import { Document, Types } from 'mongoose'

export default interface IPost extends Document {
  description?: string,
  url:string
  updated?: boolean
  removed?: boolean
  createdAt: Date
  updatedAt: Date
  userlId: Types.ObjectId
}