const  mongoose  = require("mongoose");
const Schema = mongoose.Schema;

const tasksSchema = new Schema({
    task : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        required : true
    },
    category : {
        type : String,
        required : true
    }
    });

const Tasks = mongoose.model('Tasks', tasksSchema);

module.exports = Tasks;