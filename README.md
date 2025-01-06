# Rohit Bedse Portfolio Demo

This repository contains the source code for Rohit Bedse's portfolio website, designed to showcase projects, blogs, and activities in a modern, responsive, and visually appealing way. Built using Astro, TailwindCSS, and TypeScript, it provides an optimized and performant user experience.

---

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Astro Framework**: Utilized for fast and lightweight static site generation.
- **Responsive Design**: Fully responsive and optimized for all devices.
- **TailwindCSS**: Simplifies styling with utility-first classes.
- **Dynamic Blog Content**: Supports Markdown/MDX for blog posts.
- **TypeScript Support**: Ensures code reliability and type safety.
- **Custom Components**: Modular and reusable components for flexibility.

---

## Getting Started

Follow these steps to run the project locally:

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or above)
- [pnpm](https://pnpm.io/) package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rohitbedse/Portfolio-Demo.git
   cd Portfolio-Demo
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the site.

### Build for Production
To generate optimized static files for production, run:
```bash
pnpm build
```

The output will be in the `dist/` directory.

---

## Project Structure

The project is organized as follows:

```
rohitbedse-Portfolio-Demo/
├── README.md                # Documentation for the project
├── CODE_OF_CONDUCT.md       # Guidelines for contributors
├── CONTRIBUTING.md          # Contribution process
├── LICENSE                  # License for the repository
├── astro.config.mjs         # Astro configuration file
├── markdown.config.ts       # Markdown/MDX configuration
├── package.json             # Project metadata and scripts
├── pnpm-lock.yaml           # Lock file for pnpm dependencies
├── tailwind.config.cjs      # TailwindCSS configuration
├── tsconfig.json            # TypeScript configuration
├── public/                  # Static assets (e.g., images, HTML files)
│   └── activity/            # Additional activity files
├── src/                     # Source code for the website
│   ├── assets/              # Images and other assets
│   ├── components/          # Reusable UI components
│   ├── content/             # Blog content and configuration
│   ├── layouts/             # Page layouts
│   ├── pages/               # Website pages
│   └── utils/               # Utility scripts
└── dist/                    # Production build output (generated after build)
```

---

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request.

Please read the [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before submitting.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

If you have any questions, suggestions, or feedback, feel free to reach out:

- **GitHub**: [Rohit Bedse](https://github.com/rohitbedse)

---

Enjoy exploring and improving the portfolio! 🚀
