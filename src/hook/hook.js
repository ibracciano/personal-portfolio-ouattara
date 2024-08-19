import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebaseConfig/firebase"

export const getAllPosts = async () => {
    const postsRef = collection(db, "posts");

    try {
        const postsSnap = await getDocs(postsRef)
        const posts = postsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        return posts;
    } catch (error) {
        console.log(error.message)
    }
}