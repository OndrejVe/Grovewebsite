# Overview

This is a modern multilingual (Czech/English) corporate website for Grove Tech AI, built as a full-stack web application using React with TypeScript on the frontend and Express.js on the backend. The application showcases AI services including AI Concierge for hotels, AI Knowledge Assistant for businesses, AI E-commerce Guide, and AI Sommelier. The site features a responsive design with dark/light theme support, contact form functionality, and comprehensive UI components built with shadcn/ui and Tailwind CSS.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite as the build tool
- **Routing**: Client-side routing implemented with Wouter for lightweight navigation
- **UI Framework**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens for branding (brand-blue, brand-green)
- **State Management**: React Context for theme and language management, TanStack Query for server state
- **Animation**: Framer Motion for smooth transitions and page animations
- **Internationalization**: Custom translation system supporting Czech and English languages

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints with structured error handling
- **Validation**: Zod schemas for request/response validation
- **Storage**: Abstract storage interface with in-memory implementation (IStorage pattern)
- **Development**: Hot module replacement with Vite integration in development mode

## Data Storage Solutions
- **Database**: PostgreSQL configured via Drizzle ORM
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Tables**: Contact submissions and users with UUID primary keys
- **Connection**: Neon Database serverless connection for PostgreSQL
- **Fallback**: In-memory storage implementation for development/testing

## External Dependencies

### Core Frontend Dependencies
- React ecosystem (React 18, React DOM, React Query)
- Radix UI component primitives for accessible UI components
- Tailwind CSS for utility-first styling
- Framer Motion for animations
- Wouter for lightweight client-side routing

### Core Backend Dependencies
- Express.js for server framework
- Drizzle ORM for database operations
- Zod for schema validation and type safety
- Neon Database serverless driver for PostgreSQL

### Development Tools
- Vite for build tooling and development server
- TypeScript for type safety across the stack
- ESBuild for production server bundling
- PostCSS and Autoprefixer for CSS processing

### UI Component System
- shadcn/ui for pre-built accessible components
- Radix UI primitives for low-level component building blocks
- Lucide React for consistent iconography
- Class Variance Authority for component variant management

### Planned Integrations
- Email functionality via Cloudflare Email Routing (referenced but not implemented)
- Contact form submission with email notifications
- Potential analytics integration (Plausible mentioned in assets)