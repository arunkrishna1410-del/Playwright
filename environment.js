import dotenv from 'dotenv'; //dotenv is an npm package. //It helps JavaScript read values from .env files.
//We import it because we want to read our environment configuration.

const env = process.env.ENV || 'qa'; //Represents the running Node.js process.Contains environment variables.The name of the environment variable we want to access 
//if we need to access dev in terminal we can give npx cross-env ENV=dev cucumber-js // and we storing that into a variable env
dotenv.config({
    path: `.env.${env}` //Loads the selected environment file. //ENV=qa → loads .env.qa
})

export const BASE_URL = process.env.BASE_URL; //Gets the URL from the selected file and makes it available to other files.