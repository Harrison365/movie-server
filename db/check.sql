\c hr_movies 

SELECT movie_reviews.review_id, movie_reviews.movie_id, movie_reviews.username, movie_reviews.score, movie_reviews.body, movie_reviews.created_at, users.display_name, users.profile_pic, users.bio
FROM movie_reviews
JOIN users ON movie_reviews.username = users.username;

-- run psql -f check.sql >output.txt 