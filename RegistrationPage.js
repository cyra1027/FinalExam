import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore();

async function registerUser(user) {
  try {
    await setDoc(doc(db, "users", user.id), user);
    alert("User registered successfully!");
  } catch (error) {
    console.error(error);
    alert("Error registering user");
  }
}
