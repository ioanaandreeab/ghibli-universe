const faker = require("faker");
const db = require("../config/firebase");
const bcrypt = require("bcrypt");

const generateFakeUsers = async(req,res)=> {
    try {
        let no_records = req.params.no_records;
        for(let i=0;i<no_records;i++) {
            let firstName = faker.name.firstName();
            let lastName = faker.name.lastName();
            let email = faker.internet.email();
            let password = faker.internet.password();
            const salt = bcrypt.genSaltSync(10);
            let hashedPass = bcrypt.hashSync(password, salt);
            const fakePerson = { "firstName": firstName,
            "lastName":lastName,
            "email":email,
            "password":hashedPass
            };
            await db.collection("users").add(fakePerson);
        }
        res.status(201).json({message:"Users added"});
    } catch (e){
        res.status(500).json({message:"Server error"});
    }
};

const addMovieToWatchlist = async(req, res) => {
    try {
        let userId = req.params.userId;
        let movieId = req.body.movieId;
        db.collection("users").doc(userId).collection("watchlist").add({movieId:movieId}).then(()=> {
            res.status(201).json({message:"Movie added to watchlist"});
        }).catch(err =>
        res.status(500).json({message:err})
        );
       
    } catch (e){
        res.status(500).json({message:e.message});
    }
}

const getWatchlist = async(req, res) => {
    try {
        let userId = req.params.userId;
        let movieIds = [];
        let movies = [];
        await db.collection("users").doc(userId).collection("watchlist").get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                movieIds.push({movieId:doc.data().movieId,watchlistId:doc.id});
            });
        });
        for(let i=0;i<movieIds.length;i++) {
            let movie = await db.collection("movies").doc(movieIds[i].movieId).get().then(
                (docRef) => docRef.data()
            ).catch(e=>console.log(e));
            movie.watchlistId = movieIds[i].watchlistId;
            movies.push(movie);
        }
        res.status(200).json({message:"Watchlist",movies:movies});
    } catch (e){
        res.status(500).json({message:e.message});
    }
}

const removeMovieFromWatchlist = async (req, res) => { 
    try {
        let userId = req.params.userId;
        let watchlistId = req.params.movieWatchId;
        db.collection("users").doc(userId).collection("watchlist").doc(watchlistId).delete().then(()=> {
            res.status(202).json({message:"Movie removed from watchlist"});
        }).catch(err =>
        res.status(500).json({message:err})
        );
       
    } catch (e){
        res.status(500).json({message:e.message});
    }
}

module.exports = {generateFakeUsers, addMovieToWatchlist, getWatchlist, removeMovieFromWatchlist};