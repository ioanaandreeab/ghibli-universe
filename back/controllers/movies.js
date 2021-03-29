const db = require("../config/firebase");
const axios = require("axios");

const uploadMovies = async(req,res) => {
    try {
        let movies = await axios.get("https://ghibliapi.herokuapp.com/films").then(res => res.data.map(({id, people, vehicles, species, url, locations, ...keepAttrs}) => keepAttrs));
        for(let i=0;i<movies.length;i++)  {
            let poster = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=${movies[i].title}`).then(res=> 'http://image.tmdb.org/t/p/w1280'+res.data.results[0].backdrop_path);
            movies[i].poster = poster;
            await db.collection("movies").add(movies[i]);
        }
        res.status(201).json({message:"Movies added"});
    } catch (e){
        res.status(500).json({message:e.message});
    }
};

const getAllMovies = async(req, res) => {
    let movies = [];    
    db.collection("movies").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let currentDoc = {...doc.data()};
            currentDoc.id = doc.id;
            movies.push(currentDoc);
        });
    }).then(()=>{
        if(movies.length !== 0) {
            res.status(200).json({movies:movies});
        } else {
            res.status(404).json({message: "No movies found"})
        }
    }).catch((e)=>{
        res.status(500).json({message:"Server error"});
    });
};

const getMovieById = async(req,res) => {
    let id = req.params.id;
    let movie;
    db.collection("movies").doc(id).get().then((docRef) => {
        movie = {...docRef.data()};
        movie.id = docRef.id;
    }).then(()=>{
        res.status(200).json({movie:movie});
    }).catch((e)=>{
        res.status(500).json({message:"Server error"});
    });
}

module.exports = {uploadMovies, getAllMovies, getMovieById};