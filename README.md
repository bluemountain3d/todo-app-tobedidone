# ToBeDiDone - Todo App

A modern todo application built with React, TypeScript, and Tailwind CSS for managing your daily tasks.

## 📚 About the Project

This project is a school assignment focused on creating a functional todo list using React. The assignment emphasizes using modern React concepts like components, state management, and localStorage to build a practical application.

### Assignment Goals
- Use React components and state to manage data
- Implement localStorage for data persistence between sessions
- Create a user-friendly interface for todo management
- Apply "Lifting State Up" principles for state management
- Use a CSS framework for modern styling

## 🚀 Features

### Basic Todo Management
- **Display todos** in a structured list with title, description, and creation date
- **Mark as complete** by clicking the checkbox
- **Delete todos** with confirmation via delete button
- **Auto-save** to localStorage so todos persist between sessions
- **Pre-filled examples** to get started immediately

### Create and Manage Todos
- **Add new todos** via a collapsible form
- **Validation** ensures both title and description are filled
- **Auto-clear** form after todo is created
- **Persistent form state** - remembers if form was open or closed

### Filtering and Sorting
- **Search functionality** - quickly find todos by searching title
- **Show/hide completed** - easy way to focus on active todos
- **Sorting** by title (A-Z/Z-A) or date (newest/oldest first)
- **Combine filters** - search and filter simultaneously for exactly what you need

### Design and User Experience
- **Dark theme** with modern gray color palette
- **Interactive elements** with hover effects and smooth transitions
- **Responsive design** that works on all screen sizes
- **Accessible** with keyboard navigation and screen reader support
- **Visual feedback** for completed todos with strikethrough text and opacity

## 🛠️ Technologies

- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **localStorage** - Local data storage

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── AddTodo.tsx      # Form for new todos
│   ├── CompletedVisibility.tsx  # Toggle for completed todos
│   ├── Header.tsx       # App header
│   ├── SearchBox.tsx    # Search functionality
│   ├── SortOption.tsx   # Sorting options
│   ├── TodoApp.tsx      # Main component with state
│   ├── TodoList.tsx     # List of todos
│   └── TodoPresentation.tsx     # Individual todo presentation
├── models/
│   └── Todo.ts          # Todo class with auto-ID
├── types/
│   └── TodoItem.ts      # TypeScript interface
├── utils/
│   └── localStorage.ts  # localStorage wrapper
├── App.tsx              # Root component
├── index.css            # Global styles and Tailwind
└── main.tsx             # Entry point
```

## 🎯 Component Architecture

The application is built with a component-based architecture:

1. **TodoApp** - Main component that handles all data and logic
   - Centralized state for todos, search term, filters, and sorting
   - CRUD operations (Create, Read, Update, Delete)
   - Passes data and functions to child components

2. **UI Components** - Specialized components for different parts
   - **Header** - App title and navigation
   - **SearchBox** - Search functionality 
   - **SortOption** - Dropdown for sorting
   - **CompletedVisibility** - Toggle to show/hide completed
   - **AddTodo** - Form to create new todos
   - **TodoList** - Container for the todo list
   - **TodoPresentation** - Displays a single todo

## 🚦 Installation and Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

## 💾 Data Persistence

- **Todos** are saved to localStorage as JSON
- **Todo objects** are correctly recreated with Date objects
- **Form state** (open/closed) is saved between sessions
- **Fallback** to pre-filled todos if localStorage is empty

## ♿ Accessibility

- **Screen reader support** with sr-only labels
- **Keyboard navigation** with tab-order and focus rings
- **Semantic HTML** with header, main, section, article
- **ARIA attributes** and tooltips for better context
- **Color contrast** follows WCAG guidelines

## 🎨 Design

- **Dark theme** with gray color palette
- **Smooth transitions** on all interactive elements
- **Hover and focus states** for better user experience
- **Responsive design** with Tailwind utilities
- **Consistent spacing** and typography

## 📋 Todo Format

Each todo contains:
```typescript
{
  id: number;           // Unique timestamp + random
  title: string;        // Main heading
  text: string;         // Description
  completed: boolean;   // Status
  createdAt: Date;      // Creation timestamp
}
```

## 🔮 Future Improvements

- [ ] Edit existing todos
- [ ] Categories/tags
- [ ] Deadline functionality  
- [ ] Export todos
- [ ] Drag & drop sorting
- [ ] Progressive Web App functionality

---

## 📝 Assignment Requirements

This project fulfills the following technical requirements:

**Basic Requirements:**
- ✅ Hard-coded list with pre-filled todos
- ✅ Structured presentation with component-based architecture  
- ✅ Click events to mark todos as complete/incomplete
- ✅ localStorage to preserve data between sessions
- ✅ At least one React component with state management

**Advanced Requirements:**
- ✅ Toggle functionality for completed status
- ✅ Form to create new todos
- ✅ Sorting functionality 
- ✅ CSS framework implementation (Tailwind CSS)
- ✅ Multiple components with "Lifting State Up" architecture

**Bonus Implementations:**
- 🔍 Search functionality
- ♿ Accessibility improvements  
- 🎨 Thoughtful UX/UI design
- 💾 Persistent UI state

---

Created to demonstrate React, TypeScript, and component-based development.