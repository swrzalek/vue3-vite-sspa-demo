# Micro Frontend Architecture with Single-SPA

![image](https://github.com/user-attachments/assets/7ef3a5b7-d838-4c49-8fa2-01e711805084)

## Overview

This project demonstrates a micro frontend architecture using Single-SPA as the framework for integrating multiple frontend applications. The project consists of a root application that serves as a container and various micro frontend applications that can be developed and deployed independently.

## Project Structure

- **root/**: The container application that hosts all micro frontends
- **app/**: A sample micro frontend application

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. Install dependencies for the root application:
   ```bash
   cd root
   npm install
   ```

3. Install dependencies for the micro frontend application:
   ```bash
   cd ../app
   npm install
   ```

### Development

1. Start the root application:
   ```bash
   cd root
   npm run dev
   ```

2. In a separate terminal, start the micro frontend application:
   ```bash
   cd app
   npm run dev:sspa
   ```

3. Access the application at `http://localhost:5173`

## Adding New Micro Frontends

To add a new micro frontend:

1. Create a new application using your preferred framework (Vue, React, Angular, etc.)
2. Configure it to work with Single-SPA
3. Register the new application in the root's `single-spa.setup.ts` file

## Deployment

Each micro frontend can be built and deployed independently:

```bash
cd <micro-frontend-directory>
npm run build
```


The root application needs to be configured to load the deployed micro frontends from their respective URLs.

## Technologies Used

- [Single-SPA](https://single-spa.js.org/): JavaScript framework for micro frontends
- [Vue.js](https://vuejs.org/): Progressive JavaScript framework
- [Vite](https://vitejs.dev/): Next generation frontend tooling

## License

[MIT](LICENSE)

