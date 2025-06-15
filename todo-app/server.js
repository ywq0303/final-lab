const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

let tasks = ["Buy milk", "Learn Docker", "Finish Lab 12"];

app.get('/', (req, res) => {
    res.render('todo', { tasks: tasks });
});

app.post('/add', (req, res) => {
    const newTask = req.body.task;
    if (newTask) {
        tasks.push(newTask);
    }
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Todo app listening at http://localhost:${port}`);
});