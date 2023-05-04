import Product from "../models/ProductModel.js";

export const getProducts = async(req, res) => {
    try {
        const products = await Product.findAll()
        res.json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const createProducts = async(req, res) => {
    const {Product_name, Price} = req.body
    try{
        const products = await Product.create({Product_name: Product_name, Price: Price})
        res.json({msg: 'Add Product Successfully'})
    } catch (error){
        console.log(error)
    }
}

export const updateProducts = async(req, res) => {
    try{
       const products = await Product.update(req.body, {
        where: {id:req.params.id}
       })
       res.status(200).json({msg: "Updated Successfully"})
    } catch (error){
        console.log(error)
    }
}



export const deletedProducts = async(req, res) => {
    try{
        const products = await Product.destroy({where: {id: req.params.id}})
        res.json({msg: 'Delete Product Successfully'})
    } catch (error){
        console.log(error)
    }
}
