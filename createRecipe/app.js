// import {
//     addDoc,
//     collection,
//     db,
//     ref,
//     uploadBytes,
//     getDownloadURL,
//     storage,
//     auth,
//   } from "../utils/utils.js";
  
//   const submit_food_form = document.getElementById("submit_food_form");
  
//   submit_food_form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const obj = {
//       image: e.target[0].files[0],
//       foodName: e.target[1].value,
//       foodLocation: e.target[2].value,
//       foodPrice: e.target[3].value,
//       addByUid: auth.currentUser.uid,
//       addByEmail: auth.currentUser.email,
//     };

//     console.log("obj==>", submit_food_form[0].value);
    
  
//     const imageRef = ref(storage, `food_images/${auth.currentUser.uid}/${new Date().getTime()}.jpeg`);
//     uploadBytes(imageRef, obj.image)
//     .then(() => getDownloadURL(imageRef))
//     .then((url) => {
//       obj.image = url;
//       return addDoc(collection(db, "foods"), obj);
//     })
//     .then(() => {
//       console.log("Document uploaded successfully");
//       window.location.href = "/";
//     })
//     .catch((error) => {
//       console.error("Error occurred:", error);
//     });
  
//   });



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

const submit_food_form = document.getElementById("submit_food_form");

submit_food_form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Check if user is authenticated
  if (!auth.currentUser) {
    console.error("User not logged in");
    return;
  }

  // Collect form data
  const obj = {
    image: e.target[0].files[0],
    foodName: e.target[1].value.trim(),
    foodLocation: e.target[2].value.trim(),
    foodPrice: e.target[3].value.trim(),
    addByUid: auth.currentUser.uid,
    addByEmail: auth.currentUser.email,
  };

  // Validation
  if (!obj.image || !obj.foodName || !obj.foodLocation || !obj.foodPrice) {
    console.error("All fields are required");
    return;
  }

  console.log("Uploading image...");
  
  try {
    // Upload file to Firebase Storage
    const imageRef = ref(
      storage,
      `food_images/${auth.currentUser.uid}/${new Date().getTime()}.jpeg`
    );
    await uploadBytes(imageRef, obj.image);
    const url = await getDownloadURL(imageRef);

    // Update image URL in the object
    obj.image = url;

    // Add document to Firestore
    console.log("Saving to Firestore...");
    await addDoc(collection(db, "foods"), obj);

    console.log("Document uploaded successfully");
    window.location.href = "/";
  } catch (error) {
    console.error("Error occurred:", error);
  }
});
