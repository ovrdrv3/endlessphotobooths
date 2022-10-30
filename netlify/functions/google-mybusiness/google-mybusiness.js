const axios = require("axios");

require("dotenv").config();

//get google places api reviews from place id ChIJVZNiu6IP6YARIm6DNaQhHmY
exports.handler = function business_reviews(event, context, callback) {
  const place_id = "ChIJVZNiu6IP6YARIm6DNaQhHmY";
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=review&key=${key}&reviews_sort=newest`;

  // if dev environment then enable cors, otherwise do not add these to headers
  const headers =
    process.env.NODE_ENV === "development"
      ? {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        }
      : {
          "content-type": "application/json",
        };

  axios
    .get(url)
    .then((response) => {
      const reviews = response.data.result.reviews;
      callback(null, {
        statusCode: 200,
        headers,
        body: JSON.stringify(reviews),
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
