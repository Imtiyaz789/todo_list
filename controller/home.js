const Tasks = require("../model/tasks");

// var taskList = [
//     // {
//     //     name: "",
//     //     phone: ""
//     // }
// ];

// below module will display new tasks
module.exports.home = function(req, res){
    Tasks.find({}, function(err, tasks){
        if(err){
            console.log("Error while Displaying Tasks")
        }
        return res.render('home', {
            title : "Todo List App",
            todo_list : tasks
        });
    })
};


// below module will create new task
module.exports.createTask = function(req, res){
    // console.log(req.body);
    Tasks.create({
    task: req.body.task,
    date: req.body.date,
    category: req.body.category
    
    }, 
    function(err, newTask){
        if(err){
            console.log("Can't Create New Task", err);
            return;
        }
        // console.log('*******', newTask);
        // Task.push(res.body);
        return res.redirect('back');
    });
    
};
// Below code will delete task 
module.exports.deleteTask = function(req, res){
    // get the id from query
    let id = req.query;
    let count = Object.keys(id).length;

    for(let i=0; i < count ; i++){
        
        // finding and deleting tasks from the DB one by one using id
        Tasks.findByIdAndDelete(Object.keys(id)[i], function(err){
        if(err){
            console.log('Error while deleting contact!', err);
            }
        })
    }
    return res.redirect('back');
};