# StashAway FE assignment - 18 OCT 2022

**Tech stack**

- [Next.js](https://nextjs.org/) - Support routing, server-side rendering, and image optimization out of the box.
- [Tailwind CSS](https://tailwindcss.com/) - Prototype/write much rapidly. But code is much messier.
- [Highcharts](https://www.highcharts.com/) library with React wrapper - I find it much more enjoyable to use than Chart.js + react-chartjs-2. Very flexible with customization.
- Prettier & eslint - Code linting & formatter.

# Overview

- `components/*` - Layouts and reusable components.
- `pages/*` - General static pages.
- `hooks/*` - Directory for storing custom hooks.
- `public/*` - Static assets of favicon and images.
- `styles/*` - Global CSS styling with CSS.

![Outline](https://github.com/Johnmojo/stashaway/raw/highcharts/.github/demo.png)

# Quick start

Clone repository

```sh
git clone https://github.com/Johnmojo/stashaway.git
```

Navigate into the cloned directory and start it up. This application requires Node.js v16.13+.

```sh
cd stashaway
npm install
npm run dev
http://localhost:3000/
```

### Task

- [x] Layout
- [x] Graph
- [x] Graph - Data Type sorting
- [x] Graph - Time sorting
- [ ] Layout - Currency sorting

### How I do

1. Fetch API from a custom hook in the particular' parent component.
2. When the user selects a value from the dropdown, lifting state up & updates the parent - hence updating the custom hook.
3. Received data will then be passed down again to its graph component.
4. Adjust time range can be triggered by Highchart's onload function (addEventListener on button IDs)

### Project status

- For starters, I've used custom paths (e.g. @hooks) for short imports on my components and hooks.
- For APIs, I used a custom hook to fetch some stock data and pass it down as data props. There are 3 (IBM, TSCO.LON & SHOP.TRT) live API data and 1 (VTSMX) from the local directory.
- For some components like Pill and Dropdown, I retrieve and keep track of which ones are active by doing the pattern of lifting state up and back to the parent.
- Due to time constraints, I can't fix an error when selecting the graph's time range.

### Decisions

- I have never done any charting before and I spent quite a time on it. In the beginning, I used Chart.js but find it very limited in terms of customization. Halfway through the development, I then switched to Highstock which is much better in terms of functionality and clearer documentation.
- For this project, I've separated the logic into its functional components with a parent component to keep track of the states of its descendants.
- For buttons, I've also implemented button loops so I don't have to repeat myself when creating button components (DRY - Don't repeat yourself).
- If I have more time, perhaps I would implement Jest unit testing or jest-fetch-mock for API.
- Some Typescript object types that I am not familiar with, I tend to put "any" which I am aware should be avoided whenever possible.
- So far, I enjoyed this mini assignment and all the challenges that I've encountered. I also learned about charting the library in a short amount of time.

### If it was a bigger project

- I would not use TailWindCSS. I would instead focus on SASS or CSS modules.
- Proper planning and design system can save us a lot of headaches.
- Implement some Typescript validator like Joi or Validator.js.
- If this is a team project, dockerizing it would be a great idea.

# Endpoints

- https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&outputsize=full&apikey=demo
- https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSCO.LON&outputsize=full&apikey=demo
- https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SHOP.TRT&outputsize=full&apikey=demo
