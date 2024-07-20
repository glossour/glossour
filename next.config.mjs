/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MONGO_URL: process.env.MONGO_URL,
        SECRET_KEY: process.env.SECRET_KEY,
        PASSWORD_SECRET: process.env.PASSWORD_SECRET,
        EMAIL_SECRET: process.env.EMAIL_SECRET,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
        REDIRECT_URI: process.env.REDIRECT_URI,
        GOOGLE_REFRESH_TOKEN: process.env.GOOGLE_REFRESH_TOKEN,
        GOOGLE_ACCESS_TOKEN: process.env.GOOGLE_ACCESS_TOKEN,
    },
};

export default nextConfig;
