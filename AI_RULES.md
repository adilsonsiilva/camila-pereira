# AI Rules for Camila Pereira - Dynamic Portfolio

This document outlines the technical stack and specific library usage guidelines for developing and maintaining the "Camila Pereira - Dynamic Portfolio" application.

## Tech Stack Overview

1.  **Frontend Framework:** React with TypeScript for building interactive user interfaces.
2.  **Styling:** Tailwind CSS is used exclusively for all styling, leveraging its utility-first approach. A custom theme is defined in `index.html`.
3.  **UI Components:** shadcn/ui components are available and should be prioritized for common UI elements.
4.  **Icons:** Lucide React is the designated library for all icons used throughout the application.
5.  **Routing:** React Router is available for managing client-side navigation and routes.
6.  **PDF Viewing:** The `@react-pdf-viewer/core` and `@react-pdf-viewer/default-layout` libraries are used for displaying PDF documents.
7.  **Video Playback:** YouTube videos are embedded using native HTML `iframe` elements.
8.  **Audio Playback:** Audio files are handled using native HTML `audio` elements.
9.  **Build Tool:** Vite is used for development and bundling the application for production.

## Library Usage Rules

*   **React & TypeScript:** All new components and application logic must be written using React and TypeScript to ensure type safety and maintainability.
*   **Tailwind CSS:**
    *   **Mandatory:** All styling must be implemented using Tailwind CSS utility classes.
    *   **No Custom CSS Files:** Avoid creating separate `.css` or `.scss` files for component-specific styles.
    *   **Responsive Design:** Always ensure designs are responsive using Tailwind's responsive prefixes (e.g., `md:`, `lg:`).
*   **shadcn/ui:**
    *   **Preference:** When a suitable component exists in shadcn/ui, use it.
    *   **Customization:** If a shadcn/ui component requires significant visual or functional changes, create a new custom component instead of modifying the original shadcn/ui files.
*   **Lucide React:**
    *   **Exclusive:** Use Lucide React for all icon needs.
    *   **Import:** Import icons directly from `lucide-react` or from the `components/icons` directory if they are custom wrappers.
*   **React Router:**
    *   **Routing:** If the application requires multi-page navigation, implement it using React Router. Keep route definitions in `src/App.tsx`.
*   **`@react-pdf-viewer`:**
    *   **PDF Display:** Use this library for embedding and displaying PDF files within modals or dedicated viewer components.
*   **Native HTML Media:**
    *   **YouTube:** Embed YouTube videos using `iframe` elements as demonstrated in `VideoModal.tsx`.
    *   **Audio:** Use the `<audio>` HTML element for playing audio files, as seen in `AudioModal.tsx` and `GlobalAudioPlayer.tsx`.
*   **File Structure:**
    *   **Pages:** Place main application views in `src/pages/`.
    *   **Components:** Store reusable UI components in `src/components/`.
    *   **Hooks:** Custom React hooks should reside in `src/hooks/`.
    *   **Data:** Static data, like `portfolioData.ts`, should be in `src/data/`.
    *   **Types:** Global TypeScript interfaces and types should be defined in `types.ts`.