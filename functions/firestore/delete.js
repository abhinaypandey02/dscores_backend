import { getFirestore } from "firebase-admin/firestore";

export function deleteCollection(path) {
  getFirestore().collection(path).listDocuments().then(val => {
    val.map((val) => {
      val.delete()
    })
  })
}
