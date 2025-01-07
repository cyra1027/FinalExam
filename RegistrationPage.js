import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore();

document.getElementById("register-btn").addEventListener("click", async () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = {
    id: email, // You can use email or any unique identifier
    name,
    email,
    password, // Ideally, hash the password before saving
  };

  try {
    await setDoc(doc(db, "users", user.id), user);
    alert("User registered successfully!");
  } catch (error) {
    console.error(error);
    alert("Error registering user");
  }
});
