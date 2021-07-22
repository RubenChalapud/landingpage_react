import { db } from "../../App";

export async function createData(data){
    return await db
    .collection('data')
    .doc()
    .set(data);
}

export async function deleteData(id){
    return await db
    .collection('data')
    .doc(id)
    .delete();
}

export async function createData(id, data){
    return await db
    .collection('data')
    .doc(id)
    .update(data);
}