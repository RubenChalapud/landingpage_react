import { db } from "../../App";

export async function createData(data, uid){
    return await db
    .collection('data')
    .doc(uid)
    .collection('favoritos')
    .doc()
    .set(data);
}

export async function deleteData(uid, id){
    return await db
    .collection('data')
    .doc(uid)
    .collection('favoritos')
    .doc(id)
    .delete();
}

export async function updateData(id, data){
    return await db
    .collection('data')
    .doc(id)
    .update(data);
}

