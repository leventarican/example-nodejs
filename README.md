
An next.js app which is AI generated in replit.

The app can be deployed as __static__ in replit environment.
For that we need to configure our next.js for static.
When run `next build` the static files are created at folder `out/`. 

This project uses the Next.js framework, which is a popular framework for building React applications.

Configuration for Nix `.replit`
```toml
[deployment]
build = ["next", "build"]
deploymentTarget = "static"
publicDir = "out"
```

Configuration for `.next.config.js`
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
};

module.exports = nextConfig;
```

Note that API routes wont work for `static` projects.
* https://nextjs.org/docs/pages/building-your-application/deploying/static-exports

# Code with AI
You have two option to code with AI:
1. select tool AI and chat with your code. You can select the files as __context__. You can insert the code generate in chat to your file.
2. insert generate code while editing your file with shortcut `CTRL+i`. Then you can enter your __prompt__.

# Run
In replit press `run`. This will build and run code in the cloud.

# Deployment
Select `Deployments` and deploy as static app.

# Application Structure Overview
_DISCLAIMER_ this doc is AI generated. 

Pages Directory (/pages)
* index.tsx: This is the homepage of your application. It includes a main page layout with links to other pages within the application like "Credit", "Credit v2", "Upload", and "Debug". It uses Next.js's `<Link>` component for navigation. The page is styled using a CSS module named.
* credit.tsx: This page implements a simple credit calculator. Users can input the loan amount, annual interest rate, and loan term (in months), and the calculator will provide the total credit, interest, and monthly payment details. It makes use of React state for managing input and output data.
* creditextended.tsx: Similar to but with more detailed calculations. It considers additional parameters such as annual acquittance (repayment in percentage) and term length in years. It calculates and displays a detailed term overview, including monthly interest, repayment, annuity, and remaining credit. This page involves more complex state management to handle the calculated term overviews.
* upload.tsx: Provides functionality to upload a file. It captures the file details such as name, size, type, and last modified date and displays this information in a table format once a file is uploaded.
* api/hello.ts: A simple API route that responds with a JSON object containing the name "John Doe". This demonstrates how to create API endpoints in a Next.js application.

Non-Page Files:
* README.md: Describes how to deploy the Next.js app as a static project on Replit. It includes configurations for and files.
* next-env.d.ts: A TypeScript declaration file that Next.js automatically generates and manages. It ensures that TypeScript types are available for Next.js features.
* _app.tsx: The custom App component that initializes pages. It enables global CSS and application-wide state management.

Configuration Files:
* .replit: Specifies the build command and deployment target for deploying the app on Replit as a static site.
* next.config.js: Here, the configuration is set for outputting the build as 'export', but based on your description, it seems there might be a mistake since Next.js uses exportPathMap instead of output for specifying export behavior. This might be an oversight or misunderstanding in the explanation.

Key Concepts and Jargon:
* Next.js: An open-source React front-end development web framework that enables functionalities like server-side rendering and generating static websites for React based web applications.
* React State: A way to preserve values between function calls in React. It's used here to manage form inputs and calculation results.
* TypeScript: A superset of JavaScript that adds static types, used throughout your project to ensure type safety.
* Static Site Generation (SSG): A method of building websites where pages are pre-rendered at build time, which can improve performance and SEO.
* Server-Side Rendering (SSR): In contrast to SSG, pages are rendered on the server for each request, useful for dynamic content.
* API Route: A server-side route used to handle API requests. Next.js allows these to be defined alongside pages for convenience.