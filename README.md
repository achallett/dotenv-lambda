# dotenv-lambda

Dotenv-lambda is a module that loads secret variables from AWS Secrets Manager into Lambda functions with a single line of code. Inspired by dotenv. Uses AWS-SDK.

# Installation

```javascript
npm install dotenv-lambda
```

# Usage

Require and configure `dotenv-lambda` for each function that requires secrets held in AWS Secrets Manager.

```javascript
require('dotenv-lambda').config({ secret: '/backend/develop' });
```

# Configuration

In the configruation object, there are a number of parameters;

```
secret: (string, required) - The name of the secret in AWS Secrets Manager

error: (string, optional) - How the package handles errors; `silent`, `quiet` or `loud` (default). A `silent` error will catch the error and allow lambda to continue. A `quiet` error will catch the error, but log it out and allow lambda to continue. A `loud` error causes the lambda function to crash as it does not catch the error.
```
