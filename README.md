# Sunao 🌸

A beautiful, modern landing page built with React, TypeScript, and Vite. Originally designed in [Magicpath](https://magicpath.ai) and optimized for development.

## ✨ Features

- **🎨 Modern Design** - Clean, professional landing page with multiple sections
- **⚡ Lightning Fast** - Built with Vite for instant hot reloading
- **🔧 TypeScript** - Fully typed for better development experience
- **📱 Responsive** - Mobile-first design that works on all devices
- **🎯 Component-Based** - Modular architecture with reusable components
- **🌙 Theme Support** - Light/dark theme switching ready

## 🏗️ Project Structure

```
src/
├── components/
│   └── generated/          # Magicpath-generated components
│       ├── HeroSection.tsx        # Main hero section
│       ├── FeaturesSection.tsx    # Features showcase
│       ├── BenefitsSection.tsx    # Benefits highlight
│       ├── PricingSection.tsx     # Pricing plans
│       ├── FooterSection.tsx      # Footer content
│       └── FloatingNavbar.tsx     # Navigation bar
├── hooks/
│   └── use-mobile.ts       # Mobile detection hook
├── settings/
│   ├── theme.ts            # Theme configuration
│   └── types.d.ts          # TypeScript definitions
└── lib/
    └── utils.ts            # Utility functions
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- Yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sassy-skrzyp/sunao.git
   cd sunao
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start development server**
   ```bash
   yarn dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start development server with hot reload |
| `yarn build` | Build for production |
| `yarn preview` | Preview production build locally |
| `yarn lint` | Run ESLint for code quality |
| `yarn format` | Format code with Prettier |
| `yarn format:check` | Check code formatting |

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Code Quality:** ESLint + Prettier
- **UI Components:** Custom components with modern design
- **3D Graphics:** Three.js (via @react-three/fiber)
- **Animations:** Framer Motion ready

## 📦 Key Dependencies

- `react` & `react-dom` - Core React functionality
- `typescript` - Type safety and better DX
- `vite` - Fast build tool and dev server
- `tailwindcss` - Utility-first CSS framework
- `@react-three/fiber` - React renderer for Three.js
- `@react-three/drei` - Useful helpers for Three.js
- `@dnd-kit/*` - Drag and drop functionality
- `lucide-react` - Beautiful icon library

## 🎨 Customization

### Theme Configuration
Update theme settings in `src/settings/theme.ts` and `src/settings/types.d.ts`.

### Components
All generated components are in `src/components/generated/`. Each component is:
- Fully typed with TypeScript
- Responsive by default
- Easily customizable

### Styling
The project uses Tailwind CSS. To customize:
1. Edit `tailwind.config.js` for design tokens
2. Modify component classes directly
3. Add custom CSS in `src/index.css` if needed

## 🌐 Deployment

### Build for Production
```bash
yarn build
```

The built files will be in the `dist/` directory.

### Deploy Options
- **Vercel:** Connect your GitHub repo for automatic deployments
- **Netlify:** Drag and drop the `dist` folder
- **GitHub Pages:** Use GitHub Actions for automated deployment

## 🤝 Development Workflow

This project was initially created with Magicpath AI design tool and is now ready for:
- Feature additions
- Custom styling
- Component modifications
- Integration with backends
- Performance optimizations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Support

If you have any questions or need help:
- Open an issue on GitHub
- Check the documentation
- Review the component source code

---

**Built with ❤️ using Magicpath AI and optimized for modern development**
