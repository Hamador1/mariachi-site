import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore";


const app = firebase.initializeApp({
    apiKey: "AIzaSyC4K9AzmWDmt2JiReYU2PRBCmljZ2wOTS0",
    authDomain: "mariachitierraazteca-15b25.firebaseapp.com",
    projectId: "mariachitierraazteca-15b25",
    storageBucket: "mariachitierraazteca-15b25.appspot.com",
    messagingSenderId: "222296384487",
    appId: "1:222296384487:web:0fc7c201fc2b79774b5342"
})
export const createBookingRequestDocument = async (BookingRequest) =>  {
    const allBookingsCollectionRef = firestore.collection("allBookingRequests");
    console.log(allBookingsCollectionRef);
    const newBookingRef = allBookingsCollectionRef.doc()
    return await  newBookingRef.set(BookingRequest);

}

export const deleteBookingDocument = async (docId, userId) => {
    await firestore.collection("allBookingRequests").doc(docId).delete().then(() => {
        window.alert("Document Deleted in allBookingRequests  docId/UserId", docId, userId);
    }).catch((error)=>{
        window.alert("Error Removing Document: " , error);
    })

   await firestore.collection(`users/${userId}/bookingRequests/`).doc(docId).delete().then(()=>{
        window.alert("Document Deleted in users Booking Requests docId/UserId");
       window.alert( docId);
       window.alert(  userId);

    }).catch((error)=>{
        window.alert("Error Removing Document: " , error);
    })

}

export const createUserBookingDocument = async ( userId, BookingRequest) => {
    const collectionRef = firestore.collection(`users/${userId}/bookingRequests`);
    console.log("Create Booking Collection Ref Below");
    console.log(collectionRef);


    const allBookingsCollectionRef = firestore.collection("allBookingRequests");
    console.log("All Bookings Ref Below");
    console.log(allBookingsCollectionRef);
    // const newBookingRef = allBookingsCollectionRef.doc();
//    const newDocRef = collectionRef.doc();
    // await newBookingRef.set({userId: userId, ...BookingRequest});

    await firestore.collection("allBookingRequests").add(BookingRequest)
        .then((docRef) => {
            console.log("Document added with ID: ", docRef.id)
            allBookingsCollectionRef.doc(docRef.id).set({docId: docRef.id, ...BookingRequest})
            return collectionRef.doc(docRef.id).set({docId: docRef.id, ...BookingRequest});
        })
    // return await newDocRef.set(BookingRequest);


}

export const getBookingRequests = async (userId) => {
    const userBookingRequestsRef = firestore.collection(`users/${userId}/bookingRequests`)



    console.log("Booking req below");
    console.log(userBookingRequestsRef);
    const snapShot = await userBookingRequestsRef.get();
    if(!snapShot.exists) {
        console.log("SnapShot Below");
        console.log(snapShot);
        console.log({Bookings: snapShot.docs.map(async doc => {
                doc.data()


            })})

        return snapShot;
    }else {
        console.log("No Booking requests Snapshot Exists")
        return  userBookingRequestsRef
    }


}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }
    return userRef;
};

export const auth = app.auth()
export const firestore = app.firestore();

export default app