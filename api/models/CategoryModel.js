import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    }
});

const model = mongoose.model("categories", schema);

export default model;