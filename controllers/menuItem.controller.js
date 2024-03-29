const MenuItem = require('../model/menuItem.model');


// create menu item
const createMenu = async (req, res) =>{
    try{
        const data = req.body;
        const newMenu = new MenuItem(data);
        const response = await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
}

// get all the menu items
const getAllMenu = async (req, res) =>{
    try{
        const data = await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
}

// get menu by taste
const getManuByTaste = async (req, res) =>{
    try{
        const tasteType = req.params.taste; // // Extract the taste type from the URL parameter
        if(tasteType == 'sweet' || tasteType == 'sour' || tasteType == 'spicy' ){
            const response = await MenuItem.find({taste: tasteType});
            console.log('response fetched');
            res.status(200).json(response);
        }else{
            res.status(404).json({error: 'Invalid Taste type'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
}

// update menu item
const updateMenuItem = async (req, res)=>{
    try{
        const menuId = req.params.id; // Extract the id of Menu Item from the URL parameter
        const updatedMenuData = req.body; // Updated data for the Menu Item

        const response = await MenuItem.findByIdAndUpdate(menuId, updatedMenuData, {
            new: true, // Return the updated document
            runValidators: true, // Run Mongoose validation
        })

        if (!response) {
            return res.status(404).json({ error: 'Menu Item not found' });
        }

        console.log('data updated');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
}


// delete menu item
const deleteMenuItem = async (req, res) => {
    try{
        const menuId = req.params.id; // Extract the Menu's ID from the URL parameter
        
        // Assuming you have a MenuItem model
        const response = await MenuItem.findByIdAndRemove(menuId);
        if (!response) {
            return res.status(404).json({ error: 'Menu Item not found' });
        }
        console.log('data delete');
        res.status(200).json({message: 'Menu Deleted Successfully'});
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
}


module.exports = {createMenu,getAllMenu,getManuByTaste,updateMenuItem,deleteMenuItem};