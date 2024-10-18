## Recipe Finder App

Live Version [https://fridge-to-table-ai.vercel.app](https://fridge-to-table-ai.vercel.app)

## Overview

Find recipes based from avaiable ingredients

## Features

- 'Filter Options' to filter recipe based on dietary restrictions and meal type

## Tech Stack

- **Next.JS 14**
- **TypeScript** for typesafe developing
- **TailwindCSS** for styling
- **Edamam API** for recipe data

## Getting Started

1. Create an Edamam API account [https://developer.edamam.com](https://developer.edamam.com)
2. Copy the API id and key to env below.

### Create .env.local File

```
NEXT_PUBLIC_EDAMAM_API_KEY = ''
NEXT_PUBLIC_EDAMAM_APP_ID=''
```

### Run scripts

````bash
npm install

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
