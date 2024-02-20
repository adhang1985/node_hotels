const Person = require('../model/person.model');

// get all the persons
const getAllPerson = async(req,res) => {
    try {
        const allPersons = await Person.find();
        res.status(200).json(allPersons);
    } catch (error) {
        res.status(500).send('Internal server error');
    }
}

// get person by id
const getOnePerson = async(req,res) => {
    try {
        const personId = req.params.id;
        const selectedPerson = await Person.findOne({_id:personId});
        res.status(200).json({
            message : 'Single person found',
            data: selectedPerson,
            success : true
        })
    } catch (error) {
        res.status(500).send('Internal server error');
    }
}

// create person
const createPerson = async (req,res) => {
    try {
        const newPerson = new Person(req.body);
        await newPerson.save();
        res.status(201).json({
            success : true,
            data : newPerson
        })
    } catch (error) {
        res.status(500).send('Internal server error');
    }
}

// update person
const updatePerson = async(req,res) => {
    try {
        const personId = req.params.id;
        const updatedPerson = await Person.updateOne({_id:personId},{
            $set:{
                name: req.body.name,
                age: req.body.age,
                role: req.body.role,
                mobileNum: req.body.mobileNum,
                address : req.body.address,
                email : req.body.email,
                salary : req.body.salary
            }
        });
        if(updatedPerson){
            res.status(200).send({
                message : "user updated",
                success : true,
                data: updatedPerson
            })
        }
        else{
            res.status(404).send({
                success : false,
                message : 'product not found'
            })
        }
    } catch (error) {
        res.status(500).send('Internal server error');
    }
}

// delete person
const deletePerson = async(req,res) => {
    try {
        const personId = req.params.id;
        await Person.deleteOne({_id:personId});
        res.status(200).json({ message: "person is deleted" });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {getAllPerson,createPerson,getOnePerson,updatePerson,deletePerson};