import dotenv from 'dotenv'

dotenv.config()


/* 
 this file should contain important keys and envs for throughout the project
*/

interface SettingsObject {
    PORT: Number,
}

export const Settings: SettingsObject = { 
    PORT: 3000 || process.env.PORT
}