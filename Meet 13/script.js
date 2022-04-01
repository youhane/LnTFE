const firebaseConfig = {
    apiKey: "AIzaSyAKwxqyrga6-Aqy7fwZs0IVh4wYur_HQq8",
    authDomain: "lntmeet13.firebaseapp.com",
    projectId: "lntmeet13",
    storageBucket: "lntmeet13.appspot.com",
    messagingSenderId: "553997604797",
    appId: "1:553997604797:web:57a203fb3f8ffcff77a4d4",
    measurementId: "G-JLZXH01H5D"
};

// Object Oriented
// Saklar ON/OFF
firebase.initializeApp(firebaseConfig)

// Bikin databasenya
const db = firebase.firestore()

let rakMessages = db.collection("messages")

let newMessage = {
    message: "Ini Pesan Baru",
    nama: "ini Nama Saya",
    telpon: "12345678"
}

// JSON, Javscript Object Notation
// Object Javascript

let messageResponses = []

// rakMessages.add(newMessage).then((response) => response.get()).then((response) => {
//     messageResponses.push(response)
//     console.log(response)
// })

$(document).ready(() => {
    // $("#btn-submit").click(() => {
    //     event.preventDefault()
    //     newMessage = {
    //         nama: $("#fullName").val(),
    //         telpon: $("#phone").val(),
    //         message: $("#message").val(),
    //     }
    //     rakMessages.add(newMessage).then((response) => response.get()).then((response) => {
    //         console.log(response)
    //     })
    // })

    $("#formMessage").submit(() => {
        event.preventDefault()
        newMessage = {
            nama: $("#fullName").val(),
            telpon: $("#phone").val(),
            message: $("#message").val(),
        }
        rakMessages.add(newMessage).then((response) => response.get()).then((response) => {
            console.log(response)
        })
    })
})