import 'dotenv/config';

export default {
  "extra": {
    "apiUrl": process.env.EXPO_API_URL,
    "apiKey": process.env.EXPO_API_KEY,
    "imageUrl": process.env.EXPO_IMAGE_URL
  },
  "android": {
    "package": "com.movieapp.app"
  }
};