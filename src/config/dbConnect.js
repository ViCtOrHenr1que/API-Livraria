import mongoose from 'mongoose'

mongoose.connect(
  "mongodb+srv://root:root@cluster0.3a49tc6.mongodb.net/livraria-db"
);


let db = mongoose.connection;

export default db;