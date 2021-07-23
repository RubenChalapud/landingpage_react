import { auth, db } from "../../App";

export function watchUserChanges(callBack){
    const unsub = auth.onAuthStateChanged((user) => {
        if(user && !user.isAnonymous){
            console.log('logged in');
            callBack({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
            });
        }else{
            console.log('NOT logged in');
            callBack(null);
        }
    });

    return unsub;
}

export function watchChanges(callBack){
    const unsub = db.collection('data')
    .onSnapshot((snapshot) => {
        const docs = [];
        snapshot.forEach((doc)=>{
            const data = doc.data();

            docs.push({
                ...data,
                id: doc.id,
            });
        });

        callBack(docs);
    });

    return unsub;
}
