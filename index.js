const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello from DevOps!'));

app.listen(port, () => console.log(`App listening on port ${port}`));
// This is a simple Express.js application that listens on port 3000 and responds with "Hello from DevOps!" when accessed at the root URL.
// It is a basic setup for a web server that can be used in a DevOps project to demonstrate deployment and infrastructure management.
// The application can be containerized using Docker, deployed to cloud platforms like AWS or Azure, and managed using Terraform for infrastructure as code.
// This code can be extended with additional routes, middleware, and error handling as needed for a more complex application.
// The application can also be integrated with CI/CD pipelines to automate testing and deployment processes.
// This code is a starting point for a DevOps project and can be modified to suit specific requirements and use cases.
// The application can be further enhanced with features like logging, monitoring, and security best practices.
// It can also be connected to a database for data storage and retrieval, and integrated with other services and APIs as needed.
// The application can be tested using tools like Postman or curl to ensure it is functioning correctly.
// The code can be version controlled using Git, and the deployment process can be automated using tools like Jenkins, GitHub Actions, or GitLab CI/CD.