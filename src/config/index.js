//This would contain some configuration details
const env = process.env.REACT_APP_ENV;
//Environment Variables are variables that is used by the application itself
//Details such as secret keys/environment are part of the environment varialbes
//In react, environment variables start with REACT_APP_
let config = {
    baseURL: "https://localhost/"
}

switch (env.toUpperCase()) {
    case "STAGE":
        config.baseURL="https://stage.skillsunion.com"
        break;
    case "PRODUCTION":
        config.baseURL="https://skillsunion.com"
        break;
        default:
            config.baseURL="This is default"
}

export default config;