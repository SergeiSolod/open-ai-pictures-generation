### Available scripts

`yarn install` - install dependencies

`yarn d` - run development server

`yarn b` - build distributor package

`yarn p` - run prettier formatting

`yarn t` - run type check

### About the project

You can view project here: http://ai-pictures-generation.vercel.app/

If OpenAI restricts my Open AI API key, the application will not be able to generate the image, sorry.

This project uses Open AI. This is a simple project that allows the user to generate any images he wants based on his request. This project will be useful to all companies that use images in their work. For example, you sell something online with a picture that the user uploads or selects. Now your user can play with AI and generate an image on their own and use it when designing your product.

### .env

`VITE_API` - backend url to which to make requests, it is https://api.openai.com/v1

`REACT_APP_STATUS` - PROD/DEV depending on whether it’s on dev or prod

`VITE_OPEN_AI_KEY` - your Open AI key

### Open AI key

Log in or sign up to the OpenAI platform - https://openai.com/

Click Create new secret key. You can check that your key is working by running a prompt in the playground. If your free trial is expired, inactive, or not working, you must set up a paid account in the billing dashboard.

Copy your key to your clipboard.

### Node version

The project is made on nodejs v21.6.1, yarn v1.22.21, any current version will do

### Stack

TypeScript, React, Redux, Saas, HTML5, Vite
