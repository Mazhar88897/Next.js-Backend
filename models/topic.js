import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    
    name: String,
    number: String,
  }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;
