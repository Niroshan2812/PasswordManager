import * as SQLite from 'expo-sqlite';
import { useState } from 'react';

let db;

export const initilizedb = async () => {
  try {
   const db = await SQLite.openDatabaseAsync("PasswordManager");
    createTables();
    console.log('Databae initialized Succesfully ')
  } catch (error) {
    console.log("error initializing databace", error);
  }
};


export const createTables = () => {

  if (!db){
    console.log('Databace is Not inilialized');
    return;
  }


  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS passwords (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nameOfit TEXT,
            category TEXT,
            enadUser TEXT,
            password TEXT
          )`,
      [],
      () => {
        console.log("Table created successfully");
      },
      (tx, error) => {
        console.log("Error creating table: ", error);
      }
    );
  });
};
export const insertPassword = (nameOfit, category, enadUser, password) => {

  if (!db){
    console.log('Databace is Not inilialized');
    return;

  }

  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO passwords (nameOfit, category, enadUser, password) VALUES (?, ?, ?, ?)`,
      [nameOfit, category, enadUser, password],
      (tx, result) => {
        console.log("Data inserted successfully");
      },
      (tx, error) => {
        console.log("Error inserting data: ", error);
      }
    );
  });
};

//retrive all details
export const getPasswords = (callback) => {
  if(!db){
    console.log('Databace is Not inilialized');
    return;
  }

  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM passwords`,
      [],
      (tx, results) => {
        const rows = results.rows;
        let passwords = [];
        for (let i = 0; i < rows.length; i++) {
          passwords.push(rows.item(i));
        }
        callback(passwords);
      },
      (tx, error) => {
        console.log("Error retrieving data: ", error);
      }
    );
  });
};
