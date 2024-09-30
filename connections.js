import mongoose from 'mongoose'
const URL = 'mongodb+srv://yashgaur:a7udG6e0kqzL9iYC@cluster0.jl3lb.mongodb.net/discorddata?retryWrites=true&w=majority&appName=Cluster0';
const promise = mongoose.connect(URL);
promise.then(data=>{
    console.log('DB Connection Done...');
}).catch(err=>{
    console.log('Error in DB Connection ', err);
})

export default mongoose;