import * as SQLite from 'expo-sqlite';

export const openDataBace = async () =>{
  const db = SQLite.openDatabaseAsync("UserDetails.db");
  return db;
}
 export const initializeDatabace = async () =>{
  const db = await openDataBace();

  try {
    await db.execAsync(
    
   
      `CREATE TABLE IF NOT EXISTS userDetails (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nameOfit TEXT,
        catogary TEXT,
        enadUser TEXT,
        password TEXT
      );`
    );
    console.log("Table created");
  } catch (error) {
    console.log("Unable to create a Tables");
  }


};



export const insertValueIntoDb =async (nameOfit,catogary,enadUser,password)=>{
  const db = await openDataBace();
  try {
    await db.execAsync('INSERT INTO userDetails (nameOfit,catogary,enadUser,password) VALUES (?,?,?,?) ',
      [nameOfit,catogary,enadUser,password]
    );
    console.log("Data Inserted");
  } catch (error) {
    console.log("Error when insering data", error);
  }
  
}

export const dropTable = async () =>{
  const db = await openDataBace();
  try {
    await db.execAsync('DROP TABLE userDetails');
  console.log("Table drop successfully ")
  } catch (error) {
    console.log("Error Dropping table", error);
  }
  
};