## Overview

This portfolio project showcases an optimized 3D interactive experience, built using React, Tailwind, react-three-fiber and framer-motion.

Design was made using Figma.

## Getting Started

To get started with this project:

1. Clone the repository
2. Install the dependencies with `npm install`
3. Start the development server with `npm run dev`

## Optimization

I spent some time optimizing the starting code. Unfortunately the Threejs library is still huge and since I'm using it in the landing Hero component, the score is not perfect.

To get here I had to lazy load all components and make them load when inView, as all my content is on the same page.

I also had to manually code split the various libraries, convert all images to .avif and finally clean-up unused imports.

![Google lighthouse results](https://github.com/mttfiorio/3d-portfolio/blob/main/public/readme/lighthouse.png?raw=true)

## Acknowledgements

This project is a fork of the [3D Developer Portfolio](https://github.com/adrianhajdin/project_3D_developer_portfolio).
A huge thank you to [Adrian Hajdin](https://github.com/adrianhajdin) for the original project. His work provided a great starting point for further development and exploration.
