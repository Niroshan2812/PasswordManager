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
    await db.runAsync('INSERT INTO userDetails (nameOfit,catogary,enadUser,password) VALUES (?,?,?,?) ',
      [nameOfit,catogary,enadUser,password]
    );
    console.log("Data Inserted");
  } catch (error) {
    console.log("Error when insering data", error);
  }
  
}
// to get all value
export const getValuefromDB = async () =>{
  const db = await openDataBace();
  try {
    const result = await db.getAllAsync("SELECT * FROM userDetails", []);
    const data = result.map(row => ({
      id: row.id,
      nameOfit: row.nameOfit,
      catogary: row.catogary,
      enadUser: row.enadUser,
      password: row.password
    }))
    
    return data;
  } catch (error) {
    console.log("Error when getting value in DB", error);
    return [];
  }
}

//to get catogaries value 
export const getCatogaryFromDB = async ()=>{
  const db = await openDataBace();
  try {
      const resultfromDB = await db.getAllAsync("SELECT DISTINCT catogary FROM  userDetails", []);
      return resultfromDB.map(row => row.catogary);
  } catch (error) {
    console.log("Error when getting catogary from DB", error );
    return[];
  }
}
//to get catogary and name of the site 
export const getDashbordDetailsFromDB = async ()=>{
  const db = await openDataBace();
  try {
      const resultForDahsbord  =  await db.getAllAsync("SELECT * FROM userDetails ", []);
      const dashbrdData = resultForDahsbord.map(row=>({
        id:row.id,
        nameOfit: row.nameOfit,
        catogary:row.catogary
      }));
     
      return dashbrdData;
      
  } catch (error) {
    console.log("Error when getting Dahbord details from db ", error );
    return[];
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