const faker = require("faker");
const db = require("../config/firebase");

const generateFakeReviews = async(req,res)=> {
    try {
        const movies= [];
        const users = [];
        let no_records = req.params.no_records;

        let moviesCollection = await db.collection("movies").get();
        let usersCollection = await db.collection("users").get();
        moviesCollection.docs.map((item) => {
            movies.push(item.id);
        });
        usersCollection.docs.map((item) => {
            users.push(item.id);
        });

        for(let i=0;i<no_records;i++) {
            let userId = faker.random.arrayElement(users);
            let movieId = faker.random.arrayElement(movies);
            let stars = faker.random.number({min:1, max:5});
            let reviewText = faker.lorem.sentences(faker.random.number({min:1, max:5}));

            const fakeReview = {
                "reviewText": reviewText,
                "stars": stars,
                "movieId": movieId,
                "userId": userId
            };

            await db.collection("reviews").add(fakeReview);
        }

        res.status(201).json({message:"Reviews added"});
    } catch (e){
        res.status(500).json({message:e.message});
    }
};

const getReviewsPerMovie = async(req,res) => {
    try {
       const movieId = req.params.movieId;
       let reviews = [];
       await db.collection("reviews").where("movieId", "==", movieId).get()
        .then(function(querySnapshot) {
            let review;
            querySnapshot.forEach(function(doc) {
                review = doc.data();
                review.id = doc.id;
                reviews.push(review);
            });
        });
        res.status(200).json({message:"Reviews found", reviews:reviews});
    } catch (e){
        res.status(500).json({message:e.message});
    }
};

const getReviewsPerUser = async(req,res) => {
    try {
       const userId = req.params.userId;
       let reviews = [];
       await db.collection("reviews").where("userId", "==", userId).get()
        .then(function(querySnapshot) {
            let review;
            querySnapshot.forEach(function(doc) {
                review = doc.data();
                review.id = doc.id;
                reviews.push(review);
            });
        });
        for(let i=0;i<reviews.length;i++) {
            reviews[i].movie = await db.collection("movies").doc(reviews[i].movieId).get().then(
                docRef => docRef.data()
            ).catch(e=>console.log(e));
        }
        res.status(200).json({message:"Reviews found", reviews:reviews});
    } catch (e){
        res.status(500).json({message:e.message});
    }
};

const createReview = async(req, res) => {
    try {
       const movieId = req.params.movieId;
       const userId = req.params.userId;
       let review = {...req.body};
       review.userId = userId;
       review.movieId = movieId;
       await db.collection("reviews").add(review);
        res.status(201).json({message:"Review created"});
    } catch (e){
        res.status(500).json({message:e.message});
    }
};

const updateReview = async (req, res) => {
    try {
       const reviewId = req.params.reviewId;
       let review = {...req.body};
	   await db.collection("reviews").doc(reviewId).update(review);
       res.status(202).json({message:"Changes accepted"});
    } catch (e){
        res.status(500).json({message:e.message});
    }
};

const deleteReview = async (req, res) => {
    try {
       const reviewId = req.params.reviewId;
	   await db.collection("reviews").doc(reviewId).delete();
       res.status(202).json({message:"Review deleted"});
    } catch (e){
        res.status(500).json({message:e.message});
    }
};

module.exports = {generateFakeReviews, getReviewsPerMovie, createReview, updateReview, deleteReview, getReviewsPerUser};