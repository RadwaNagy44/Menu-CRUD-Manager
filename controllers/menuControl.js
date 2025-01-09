const express = require('express');
const app = express();
const {validationResult} = require('express-validator');
app.use(express.json());

let menuItems = require('../data/menu');


const getAllMenuItems = (req, res) => {
    res.json(menuItems);
};

const getSingleMenuItem = (req, res) => {
    const itemId = parseInt(req.params.itemId);
    const menu = menuItems.find((item) => item.id === itemId);
    if(!menu){
        return res.status(404).json({message: 'Item not found'});
    }
    res.json(menu);
};

const addMenuItem = (req, res) => {
    const newItem = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    newItem.id = menuItems.length + 1;
    menuItems.push(newItem);
    const reorderedItem = {
        id: newItem.id,
        name: newItem.name,
        price: newItem.price
    };

    res.status(201).send(reorderedItem);
};

const updateMenuItem = (req, res) => {
    const itemId = parseInt(req.params.itemId);
    const updatedItem = req.body;
    const menu = menuItems.find((item) => item.id === itemId);
    if(!menu){
        return res.status(404).json({message: 'Item not found'});
    }
    menu.name = updatedItem.name || menu.name;
    menu.price = updatedItem.price || menu.price;
    res.json(menu);
};

const deleteMenuItem = (req,res) => {
    const itemId = parseInt(req.params.itemId);
    const menu = menuItems.find((item) => item.id === itemId);
    if(!menu){
        return res.status(404).json({message: 'Item not found'});
    }
    const index = menuItems.indexOf(menu);
    menuItems.splice(index, 1);
    res.json({message: 'Item deleted successfully'});
};

module.exports = {
    getAllMenuItems,
    getSingleMenuItem,
    addMenuItem,
    updateMenuItem,
    deleteMenuItem
};