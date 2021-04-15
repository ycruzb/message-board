# Solution explanation

I've decided to use Nextjs because it's very useful, it includes not only the front-end but also the back-end using its API approach based in Node.js. I've selected a native graphql service in the cloud called Dgraph instead of using an in memory database because it's a most exciting solution. Finally I decided to use all this kind approach in order to achieve a complete and functional solution, including CI/CD with a very easy deployment process.

The only difference between an Express install and the Nextjs API approach is the way of generate the routes of the endpoints. I've to say that I can go forward with an Express install but this solution with Nextjs doesn't require a server to be deployed so this approach is very useful considering this kind of stuff and think that it's a better fit. 

I used more time in order to create a full demo with all requirements. The idea was to do my best and achieve a functional demo including certain level of UI/UX.
You can check it out at this url:

[https://message-board-demo.vercel.app/](https://message-board-demo.vercel.app/)

# Installation Guide

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Install locally

1. Clone the repo

2. Install dependencies

```bash
npm i
```

3. Create a .env.local file with this format:

`GRAPHQL_API_ENDPOINT=YOUR_GRAPHQL_ENDPOINT_URL`

4. Must have a GraphQL server running and accepting this schema:

`
type message {
id: ID!
text: String!
channel: channel @hasInverse(field:messages)
}

type channel {
id: ID!
name: String!
messages: [message]
}
`

5. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
