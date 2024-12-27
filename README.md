# Apple Watch Studio Clone

This project is a replica of the Apple Watch Studio, built with **Next.js**, **TypeScript**, and **Tailwind CSS**. It provides an interactive UI for customizing Apple Watch models, including watch faces and case options. The project is optimized for performance, accessibility, and responsive design, ensuring a smooth experience on desktop, tablet, and mobile devices.

## Features

- **Pixel-Perfect Precision**: Replicates the Apple Watch Studio's aesthetic, including fonts, spacing, colors, and animations.
- **Interactive and Responsive**: Fully responsive design that works on desktop, tablet, and mobile devices.
- **High Performance**: Fast loading times and smooth interactions.
- **Accessibility**: Implements accessible design principles, such as ARIA roles and keyboard navigation.
- **Customizable Watch Studio**: Users can select different watch cases and watch faces, previewing their customizations in real time.

## Prerequisites

Before running the project locally, make sure you have the following installed:

- **Node.js** (version 16.x or higher)
- **npm** or **yarn**

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sivakumar1929/apple-watch-studio.git
   cd apple-watch-studio
2. Install dependencies:

bash
Copy code
npm install
# or
yarn install

3. Run the development server:

bash
Copy code
npm run dev
# or
yarn dev

4. Cofig
  module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'store.storeimages.cdn-apple.com',
        pathname: '/**',
      },
    ],
  },
};
