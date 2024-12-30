const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(//Designing the task structure
    {
        title:{
            type: String,
            required: [true, "Please enter a task"]
        },
        description:{
            type: String,
            required: false
        },
        completed:{
            type: Boolean,
            default: false
        },
        priority:{
            type: Number,
            required: true,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

const Task = mongoose.model("Task", taskSchema);//Database model based on the taskSchema 

module.exports = Task;