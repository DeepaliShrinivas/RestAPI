const express = require('express');
const app = express();


//create user data
const userInfoData = [

    {
        id : 1,
        firstname: 'Deepali',
        lastname: 'Kulkarni',
        phone: 12345
    },
    {
        id : 2,
        firstname: 'Radhika',
        lastname: 'Kulkarni',
        phone: 123456

    },
    {
        id : 3,
        firstname: 'Ramaa',
        lastname: 'Kulkarni',
        phone: 123457
    },

    {
        id : 4,
        firstname: 'Ronav',
        lastname: 'Kulkarni',
        phone: 123458

    },
{
    id : 5,
    firstname: 'Girija',
    lastname: 'Kulkarni',
    phone: 123459
},       
    
];
//create end points

app.get('/api/info', function(req,res){
    res.send('My First Node API try...')
})

app.get('/api/users', function(req, res){
    res.json(userInfoData);
})

app.get('/api/users/:id', function(req, res){
    const id = req.params.id;
    const user = userInfoData.find(user => user.id == id);
    if(user){
        res.json(user)
    }
    else{
        res.send('This user is not available')
    }
})

//start the node server
const PORT = 3000;
app.listen(PORT, function(){
    console.log('Server is started.. ready to for your APIs');

})