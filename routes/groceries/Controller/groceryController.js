const Grocery = require('../Model/Grocery')

async function getAllGroceries(req, res){
    try{
        const payload = await Grocery.find({});
        res.json({message: "success", payload: payload})
    }catch(e){
        console.log(e)
    }
}

async function createGrocery(req, res){
    try{
        const newGrocery = new Grocery({
            grocery: req.body.grocery,
        });
        const createdGrocery = await createGrocery.save();
        res.json({message: success, payload: createdGrocery})
    }catch(e){
        console.log(e)
    }
}

async function updateGrocery(req, res){
    try{
        const updatedGrocery = Grocery.findByIdAndUpdate((req.params.id), req.body, {new: true})
        res.json({message: "success", payload: updatedGrocery})
    }catch(e){
        console.log(e)
    }
}

async function deleteGrocery(req, res){
    try{
        const deletedGrocery = Grocery.findByIdAndRemove((req.params.id), req.body, {new: true})
        res.json({message: "grocery deleted", payload: deletedGrocery})
    }catch(e){
        console.log(e)
    }
}

module.exports = {
    getAllGroceries,
    createGrocery,
    updateGrocery,
    deleteGrocery
}