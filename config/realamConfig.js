import Realm, { schemaVersion } from 'realm';

const PasswordSchema = {
    name :'Password',
    properties: {
        _id:'int',
        name:'string', 
        category: "string",
        emailOrUsername: "string",
        password: "string",
    },
    primaryKey : '_id',
};
const realmCongig ={
    schema : [PasswordSchema],
    schemaVersion : 1,
}

const openRealm = async ()=>{
    try {
            return await Realm.open(realmCongig);
    } catch (error) {
        console.log("Faild to open the relaim", error);
        throw error;
    }
};

export const addPasswordToRealm = async (passwordData) =>{
    const realm = await openRealm();
    try {
        realm.write(()=>{
            realm.create('Password', 
                {
                    _id:Date.now(),
                    ...passwordData,
                }
            );
        })
    } catch (error) {
        console.log("Error When Writing realm ", error);    
    }finally{
        realm.close();
    }
};

export default openRealm;