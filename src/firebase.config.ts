// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCzwLeKmmkUIpRJ8C4JewJBr8ZWFaA4ZK4',
  authDomain: 'house-marketplace-app-7ba1d.firebaseapp.com',
  projectId: 'house-marketplace-app-7ba1d',
  storageBucket: 'house-marketplace-app-7ba1d.appspot.com',
  messagingSenderId: '1048140059778',
  appId: '1:1048140059778:web:2d593cca3dd693cc2a509b',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
