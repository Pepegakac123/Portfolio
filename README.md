# 3D Interactive Portfolio Website

[![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-0.168.0-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.12-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![i18next](https://img.shields.io/badge/i18next-24.2.2-green?style=for-the-badge)](https://www.i18next.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12.5-brightgreen?style=for-the-badge)](https://greensock.com/gsap/)
[![EmailJS](https://img.shields.io/badge/EmailJS-4.4.1-red?style=for-the-badge)](https://www.emailjs.com/)

## [Live Demo](https://kacperadamczyk.pl/)

![Portfolio Demo](https://github.com/yourusername/portfolio-website/blob/main/public/portfolio-preview.jpg)

## 📱 Project Overview

This is my personal portfolio website built with React 18 and Three.js, featuring interactive 3D elements and animations. The project showcases my frontend and fullstack development skills through a unique, engaging user experience that goes beyond traditional static portfolios.

The site combines modern web technologies with 3D graphics to create an immersive presentation of my projects, skills, and professional experience. By implementing interactive 3D models, I demonstrate my ability to work with complex frontend libraries while maintaining performance and responsiveness.

## 🚀 Key Features

- **Interactive 3D Elements**: Animated models and scenes created with Three.js and React Three Fiber
- **Responsive Design**: Fully adaptive layout for all device sizes (mobile, tablet, desktop)
- **Bilingual Support**: Complete language switching system (Polish/English) using i18next
- **Dynamic Project Showcase**: 3D computer model with screen displaying project videos
- **Animated Experience Timeline**: Interactive work history with 3D avatar animations
- **Contact Form Integration**: Functional contact form with EmailJS for direct communication
- **Performance Optimized**: Efficient rendering of 3D elements with proper resource management
- **Custom Animations**: GSAP animations for smooth transitions and enhanced user experience

## 🛠️ Tech Stack

### Frontend
- **React 18**: Modern component-based architecture with hooks
- **Three.js / React Three Fiber**: 3D rendering and model integration
- **TailwindCSS**: Utility-first styling for responsive design
- **GSAP**: Advanced animations and transitions
- **i18next**: Internationalization for multi-language support
- **EmailJS**: Contact form handling without backend
- **React Toastify**: User feedback notifications
- **React Responsive**: Adaptive layouts based on device size

### Build & Development
- **Vite**: Fast modern frontend build tool
- **ESLint**: Code quality and style enforcement

## ⚙️ Project Structure

```
portfolio-website/
├── public/              # Static assets and 3D models
│   ├── assets/          # Icons, images, and SVGs
│   ├── models/          # 3D models (GLB/GLTF files)
│   └── textures/        # Textures for 3D models
├── src/
│   ├── Components/      # Reusable UI components
│   │   ├── 3D/          # Three.js components
│   │   └── UI/          # Regular React components
│   ├── Constants/       # Static data and configurations
│   ├── locales/         # Translation files
│   └── styles/          # CSS and Tailwind utilities
├── i18n.js              # i18next configuration
└── main.jsx             # Application entry point
```

## 📋 Installation & Setup

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The website will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

## 🔍 Key Implementation Details

### 3D Model Integration

The portfolio incorporates various 3D models, including a desktop setup, avatar, and interactive elements. These models are loaded efficiently using React Three Fiber and enhanced with animations:

```jsx
// Example from HackerRoom.jsx
const HackerRoom = (props) => {
  const { nodes, materials } = useGLTF("/models/hacker-room.glb");
  const monitorTxt = useTexture("textures/desk/monitor.png");
  
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.screen_screens_0.geometry}>
        <meshMatcapMaterial map={screenTxt} toneMapped={false} />
      </mesh>
      {/* Additional mesh components */}
    </group>
  );
};
```

### Internationalization

The portfolio supports both Polish and English languages with a seamless switching mechanism:

```jsx
// Example from LanguageSwitcher.jsx
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "pl" ? "en" : "pl";
    i18n.changeLanguage(newLang);
  };

  return (
    <button onClick={toggleLanguage}>
      <span>{i18n.language.toUpperCase()}</span>
      <img src={`/assets/${i18n.language === "pl" ? "pl" : "gb"}.svg`} alt="language flag" />
    </button>
  );
};
```

### Contact Form Integration

The contact section implements EmailJS for sending messages directly from the frontend:

```jsx
// Example from Contact.jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    await emailjs.send(
      "service_id",
      "template_id",
      {
        from_name: form.name,
        to_name: "Kacper",
        from_email: form.email,
        message: form.message,
      },
      "public_key"
    );
    setLoading(false);
    toast.success(t("contact.toast.success"));
    // Reset form
  } catch (error) {
    toast.error(t("contact.toast.error"));
  }
};
```

## 💡 Why This Project Matters

This portfolio demonstrates several important technical skills and approaches:

1. **3D Web Development**: Implementation of complex 3D scenes in a web environment showcases advanced frontend capabilities beyond typical website development.

2. **Performance Optimization**: The project carefully balances visual richness with performance, showing an understanding of resource management and user experience priorities.

3. **Responsive Interactive Design**: Creating 3D experiences that work across devices requires thoughtful adaptation of UI and interaction models.

4. **Clean Component Architecture**: The codebase follows modern React patterns with reusable components, custom hooks, and effective state management.

5. **Internationalization**: Supporting multiple languages demonstrates awareness of accessibility and global user needs.

6. **Problem Solving**: Working with 3D models in a browser environment presents unique challenges around loading, rendering, and animation that required creative solutions.

One of the biggest challenges was optimizing the 3D models for web performance without sacrificing visual quality. This was addressed through careful model optimization, texture compression, and implementing proper loading strategies.


## 📄 License

MIT License

---

*This portfolio is continuously evolving as I learn new technologies and techniques. I welcome any feedback or suggestions for improvement!*