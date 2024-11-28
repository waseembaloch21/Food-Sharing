import {
  addDoc,
  collection,
  db,
  ref,
  uploadBytes,
  getDownloadURL,
  storage,
  auth,
} from "../utils/utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const submit_food_form = document.getElementById("submit_food_form");

  submit_food_form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!auth.currentUser) {
      alert("User not authenticated. Please log in.");
      return;
    }

    const obj = {
      image: e.target[0].value,
      foodName: e.target[1].value,
      foodLocation: e.target[2].value,
      foodPrice: e.target[3].value,
      addByUid: auth.currentUser.uid,
      addByEmail: auth.currentUser.email,
    };

    console.log("Form Object:", obj);

    const imageRef = ref(storage, `food_images/${auth.currentUser.uid}/${new Date().getTime()}.jpeg`);

    uploadBytes(imageRef, obj.image)
      .then(() => {
        console.log("Image uploaded, getting URL...");
        return getDownloadURL(imageRef);
      })
      .then((url) => {
        console.log("Image URL obtained:", url);
        obj.image = url;

        console.log("Uploading document to Firestore...");
        return addDoc(collection(db, "foods"), obj);
      })
      .then(() => {
        console.log("Document uploaded successfully");
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Error occurred:", error);
        alert("An error occurred: " + error.message);
      });
  });
});
