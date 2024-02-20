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

module.exports = {getAllPerson,createPerson,getOnePerson};