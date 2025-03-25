# Web Services Budget Calculator

## 📄 Description

An interactive web application that helps businesses calculate the cost of their web services needs. Built with React and TypeScript, it features a modern interface for selecting services, customizing options, and managing quotes with real-time price calculations.

## 💻 Technologies Used

-   **Core:**

    -   React 19
    -   TypeScript
    -   React Router v7
    -   CSS Modules

-   **Development Tools:**
    -   Vite
    -   ESLint
    -   GitHub Actions
    -   PostCSS

## 🌟 Features

### Service Selection

-   Choose from professional web services:
    -   SEO Optimization (€300/month)
    -   Advertising Campaigns (€400/month)
    -   Web Development (€500/month)

### Web Development Customization

-   Adjust number of web pages
-   Add multiple language support
-   Real-time price calculations

### Smart Pricing

-   Instant price updates
-   20% yearly subscription discount
-   Additional features cost calculation
-   Quote history management

### User Interface

-   Modern, responsive design
-   Mobile-first approach
-   Smooth transitions
-   Progress tracking

## 📋 Requirements

-   Node.js (v18 or higher)
-   npm (v8 or higher)

## 🛠️ Installation

1. Clone this repository:

    ```sh
    git clone https://github.com/alejandrolemamarques/6.-Budget.git
    ```

2. Navigate to the project directory:

    ```sh
    cd 6.-Budget
    ```

3. Install dependencies:

    ```sh
    npm install
    ```

4. Create `.env` file:
    ```env
    # Used by Vite for build configuration and GitHub Pages deployment
    # This should match your GitHub repository name
    VITE_REPO_NAME=6.-Budget
    ```

## ▶️ Running the Project

### Development Mode

```sh
npm run dev
```

This starts the development server at http://localhost:5173/

### Build for Production

```sh
npm run build
```

Generates a production-ready build in the `dist` directory.

### Preview Production Build

```sh
npm run preview
```

### Deploy to GitHub Pages

```sh
npm run deploy
```

Or push to main branch for automatic deployment via GitHub Actions.

## 📁 Project Structure

```
6.-Budget/
├── src/
│   ├── assets/         # Images and static assets
│   ├── components/     # Reusable React components
│   │   ├── NavBar/     # Navigation components
│   │   └── Todo/       # Service selection components
│   ├── context/       # React context providers
│   │   └── CalculatorContext.tsx  # State management
│   ├── data/          # Static data
│   │   └── catalog.json  # Services catalog
│   ├── hooks/         # Custom React hooks
│   ├── pages/         # Page components
│   │   ├── Home/      # Landing page
│   │   └── Calculator/ # Main calculator
│   ├── styles/        # Global styles
│   └── types/         # TypeScript definitions
├── public/            # Static files
└── ignore/            # Documentation
```

## 🧩 Component Architecture

### Calculator Component

The main feature component that includes:

-   Service selection checkboxes
-   Customization options
-   Price calculator
-   Quote form

### Quote Management

-   Save quotes with customer details
-   View quote history
-   Delete saved quotes

## 📱 Responsive Design

The application is fully responsive with:

-   Desktop: Full-featured layout with side-by-side components
-   Tablet: Adapted layout with reorganized sections
-   Mobile: Streamlined interface with collapsible sections

## 🛠️ Development

### Adding New Services

To add new services, edit `src/data/catalog.json`:

```json
{
    "services": [
        {
            "id": 4,
            "name": "New Service",
            "description": "Service description",
            "price": 600
        }
    ]
}
```

### Styling

The project uses CSS Modules with PostCSS features:

-   Component-scoped styles
-   CSS variables for theming
-   Nested selectors
-   Modern CSS features

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## ✨ Acknowledgments

-   Barcelona Activa for project requirements and guidance
-   All contributors and reviewers
-   Font Awesome for icons
