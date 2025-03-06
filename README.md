# National Weather Service UI

This project is a user interface for the National Weather Service built using Next.js and TypeScript with Mantine.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/seanbailey28/national-weather-service-ui.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd national-weather-service-ui
    ```

3. **Install the dependencies:**
    ```bash
    # Using pnpm (recommended)
    pnpm i

    # Or using npm
    npm install
    ```

4. **Run the development server:**
    ```bash
    # Using pnpm (recommended)
    pnpm dev

    # Or using npm
    npm run dev
    ```

The application should now be running on [http://localhost:3000](http://localhost:3000).

## API Usage

This project uses the National Weather Service API to fetch weather data. Documentation for this API can be found [here](https://www.weather.gov/documentation/services-web-api)

To regenerate the types, run the following command:
```bash
pnpm run generate-types

# Or using npm
npm run generate-types
```

`openapi-typescript` has been used to generate TypeScript types from the OpenAPI document.

## Technologies Used
- **Next.js**: A React framework for server-side rendering and static site generation.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Mantine**: A fully featured React components library.
- **TanStack React Query**: A powerful data-fetching library for React that simplifies data synchronization and caching.

## License

This project is licensed under the MIT License.