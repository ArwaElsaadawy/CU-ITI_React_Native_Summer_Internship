import { db } from './firebase';
import { collection, addDoc, doc, deleteDoc, getDocs, query, where } from 'firebase/firestore';

// Function to save a movie to favorites
export const saveFavoriteMovie = async (movie) => {
  try {
    // Add a new document with the movie details to the "favorites" collection
    const docRef = await addDoc(collection(db, "favorites"), {
      title: movie.title,
      id: movie.id,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      overview: movie.overview,
      isFavorite: true,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e; // Propagate the error for handling at the call site
  }
};

// Function to remove a movie from favorites
export const removeFavoriteMovie = async (movieId) => {
  try {
    // Query the "favorites" collection for a document with the corresponding movieId
    const movieQuery = query(collection(db, "favorites"), where("id", "==", movieId));
    const querySnapshot = await getDocs(movieQuery);
    const movieDoc = querySnapshot.docs[0]; // Since we're querying by ID, we expect only one document

    if (movieDoc) {
      await deleteDoc(doc(db, "favorites", movieDoc.id));
      console.log("Document successfully deleted!");
    } else {
      console.log("No document found with the provided movieId.");
    }
  } catch (e) {
    console.error("Error removing document: ", e);
    throw e; // Propagate the error for handling at the call site
  }
};

// Function to check if a movie is in the favorites
export const isMovieFavorite = async (movieId) => {
  try {
    // Query the "favorites" collection for a document with the corresponding movieId
    const movieQuery = query(collection(db, "favorites"), where("id", "==", movieId));
    const querySnapshot = await getDocs(movieQuery);
    
    return !querySnapshot.empty; // Return true if the document exists, otherwise false
  } catch (e) {
    console.error("Error checking favorite status: ", e);
    throw e; // Propagate the error for handling at the call site
  }
};

// Function to delete all favorite movies
export const deleteAll = async () => {
  try {
    const movieQuery = collection(db, "favorites");
    const querySnapshot = await getDocs(movieQuery);

    // Use Promise.all to wait for all delete operations to complete
    await Promise.all(querySnapshot.docs.map(async (doc) => {
      await deleteDoc(doc.ref);
    }));

    console.log("All documents deleted!");
  } catch (e) {
    console.error("Error deleting all documents: ", e);
    throw e;
  }
};
