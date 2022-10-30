const axios = require('axios');

require('dotenv').config();

exports.handler = function instagram(event, context, callback) {
  const endpoint = 'https://graph.instagram.com';
  const fields = 'id,caption,media_url,permalink,timestamp';

  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const limit = 6;
  const url = `${endpoint}/me/media/?fields=${fields}&access_token=${token}&limit=${limit}`;

  // if dev environment then enable cors, otherwise do not add these to headers
  const headers = process.env.NODE_ENV === 'development' ? {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
  } : {
    'content-type': 'application/json'
  };

  axios
    .get(url)
    .then(({ data: { data: posts } }) => {
      callback(null, {
        statusCode: 200,
        headers,
        body: JSON.stringify(
          posts.map((i) => ({
            id: i.id,
            media_url: i.media_url,
            caption: i.caption,
            timestamp: i.timestamp,
            permalink: i.permalink,
          }))
        ),
      });
    })
    .catch((e) => {
      callback(e)
    })
}