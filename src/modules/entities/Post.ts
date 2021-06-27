import mongoose from 'mongoose'
import { IPost} from './../../Interfaces'

import aggregatePaginate from 'mongoose-aggregate-paginate-v2'

const { Schema, model } = mongoose
const { ObjectId } = Schema.Types

interface IPostModel extends mongoose.Model<IPost> {
  aggregatePaginate: any
}

const PostObject: mongoose.SchemaDefinition = {
 
  createdAt: {
    type: Schema.Types.Date,
  },

  updatedAt: {
    type: Schema.Types.Date
  },
  description: String,
  url:String,
  updated: Boolean,
  removed: Boolean,
  userlId: ObjectId
}

const Post: mongoose.Schema = new Schema(PostObject)

Post.pre('save', function(this: IPost) {
  this.updatedAt = new Date()
})

Post.plugin(aggregatePaginate)

export default model<IPost, IPostModel>('Post', Post)
