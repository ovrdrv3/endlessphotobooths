const axios = require('axios');

require('dotenv').config();
console.log(process.env) // remove this after you've confirmed it is working

exports.handler = function instagram(event, context, callback) {
  const endpoint = 'https://graph.instagram.com';
  const fields = 'id,caption,media_url,permalink,timestamp';

  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const limit = 10;
  const url = `${endpoint}/me/media/?fields=${fields}&access_token=${token}&count=${limit}`;

  axios
    .get(url)
    .then(({ data: { data: posts } }) => {
      callback(null, {
        statusCode: 200,
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(
          posts.map(i => ({
            id: i.id,
            url: i.media_url,
            caption: i.caption,
          })),
        ),
      })
    })
    .catch((e) => {
      callback(e)
    })
}