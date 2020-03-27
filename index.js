const SecretsManager = require('aws-sdk/clients/secretsmanager');
const region = process.env.AWS_REGION || 'eu-west-2';
const client = new SecretsManager({ region });

const load = async (config) => {
    try {
        if (!config.hasOwnProperty('secret')) throw new Error('secret key required')
        const data = client.getSecretValue({ SecretId: config.secret }).promise()
        if (data.hasOwnProperty('SecretString')) {
            const secrets = JSON.parse(data.SecretString)
            for (let [key, value] of Object.entries(secrets)) {
                process.env[key] = value
            }
        }
    } catch (err) {
        if (config.hasOwnProperty('error')) {
            const { error } = config;
            if (error === 'silent') return;
            else if (error === 'quiet') console.log('dotenv-lambda ERROR:', err)
            else throw err;
        } else throw err;
    }
}


module.exports = load;