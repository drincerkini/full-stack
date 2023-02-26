import express, { json } from 'express';
import CategoryModel from '../models/CategoryModel';

const router = express.Router({ mergeParams: true });


router.get('/', async(req, res) => {
    const lista = await CategoryModel.find();
    return res.json(lista);
})

router.get('/:id', async(req, res) => {
    try{
        const cat = await CategoryModel.findOne({ _id: req.params.id });

        if(!cat) throw Error("Category not found!");

        return res.json(cat);
    }catch(error){
        res.status(404).json({error: error.message});
    }
})

router.post('/create', async(req, res) => {
    const category = new CategoryModel(req.body);
    try{
        const newCategory = await category.save();
        res.status(200).json(newCategory);
    }catch(err){
        res.status(400).json({ message: err.message});
    }
})

router.patch('/update/:id', async(req, res) => {
    // await CategoryModel.updateOne({ _id: req.params.id}, req.body);

    // const cateUp = await CategoryModel.findOne({ _id: req.params.id});
    // return res.json(cateUp)

    try{
        const updatedCategory = await CategoryModel.updateOne(
            { _id: req.params.id },
            {$set : {
                title: req.body.title,
                description: req.body.description
            }}
        )
        const result = updatedCategory.save();
        res.json( result );
    }catch(err){
        res.json({ msg: err});
    }
});


router.delete('/delete/:id', async(req, res) => {
    try{
        const removeCat = await CategoryModel.remove({ _id: req.params.id });
        removeCat.save();
        res.json(removeCat);
    }catch(err){
        res.json({ msg: true });
    }
})


export default router;