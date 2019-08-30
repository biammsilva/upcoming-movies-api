# Upcoming Movies Api

## Architecture

As asked, I had two optins of backend of this application PHP and node.js. I've choose node.js for two reasons: the simplicity of the solution and the fact that I never have worked with it before, so, it would be a great gain of knowledge.

## My assumptions

I realized that's very important when I'm going to develop and API, to return all the children data that I can, making easier the work of who is going to consume it. I realized that because of the endpoint of the external API that returns the genres_ids instead of the genres as an object.

## Build Instructions

### Requirements:
* NodeJs >= 10;
* Npm >= 6;

### Install dependencies
```
npm install
```

### Run the application:
```
node start
```

## External Libs:
I used express.js to get up the server because is the only one I already had used in a small project.