import admin  from "../models/adminModel";
import express from "express";

const signup = async (req:express.Request, res:express.Response) => {
    try {
        await admin.create({ name: "rahul" });
        res.send("hi");
    } catch (error) {
    }
}

const login = async (req:express.Request, res:express.Response) => {
    try {
        await admin.create({ name: "rahul" });
    } catch (error) {
        
    }
}

export = {
    signup,
    login
}