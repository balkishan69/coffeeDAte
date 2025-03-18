# Coffee Date Invitation Website 💝

A beautiful, interactive website designed to ask someone special out for coffee in a cute and engaging way. The website features charming animations, thoughtful interactions, and a comfortable user experience.

![Coffee Date Invitation](<a href='https://postimages.org/' target='_blank'><img src='https://i.postimg.cc/X7MVQ2Js/Screenshot-2025-03-18-184707.png' border='0' alt='Screenshot-2025-03-18-184707'/></a>)

## ✨ Features

- **Interactive Question**: Beautifully animated main question with dynamic Yes/No buttons
- **Playful No Button**: The "No" button moves away when hovered, making it harder to reject
- **Growing Yes Button**: The "Yes" button grows larger with each "No" attempt
- **Date & Time Selection**: Clean and intuitive date/time picker for scheduling
- **Comfort Message**: Thoughtful message to ensure the invitee feels comfortable and unpressured
- **Email Notification**: Automatic email notification when a date is selected
- **Beautiful Animations**: Smooth transitions and playful animations using Framer Motion
- **Responsive Design**: Works perfectly on all device sizes
- **Random Compliments**: Sweet, rotating compliments to make someone feel special

## 🚀 Tech Stack

- **React**: Frontend framework
- **TypeScript**: Type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library
- **EmailJS**: Email service for notifications
- **React DatePicker**: Date and time selection
- **Lucide React**: Beautiful icons
- **Vite**: Build tool and development server

## 📦 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher)

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd coffee-date-invitation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## 🎮 Development

To start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 📱 Project Structure

```
coffee-date-invitation/
├── src/
│   ├── App.tsx           # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles and Tailwind imports
├── public/              # Static assets
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── tsconfig.json      # TypeScript configuration
├── vite.config.ts     # Vite configuration
└── README.md          # Project documentation
```

## 🎨 Customization

### Modifying Compliments
You can add or modify compliments in the `compliments` array in `App.tsx`:

```typescript
const compliments = [
  "Your smile brightens up my whole day ✨",
  // Add more compliments here
];
```

### Changing Colors
The color scheme can be modified in the Tailwind classes throughout `App.tsx`. The primary colors used are:
- Pink (`pink-500`, `pink-600`) for primary actions
- Gray (`gray-200`, `gray-800`) for secondary elements
- White (`white`) for backgrounds

### Email Template
The email notification uses EmailJS. You'll need to set up a template with the following variables:
- `to_email`: Recipient email address
- `date`: Selected date
- `time`: Selected time

## 🚀 Deployment

The project can be deployed to any static hosting service. Here are some options:

1. **Netlify**:
   - Connect your repository
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Vercel**:
   - Import your repository
   - The build settings will be automatically detected

3. **GitHub Pages**:
   - Update `vite.config.ts` with your base URL
   - Run `npm run build`
   - Deploy the `dist` folder


## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 💖 Acknowledgments

- Icons by [Lucide React](https://lucide.dev)
- Date picker by [React DatePicker](https://reactdatepicker.com)
- Animations powered by [Framer Motion](https://www.framer.com/motion)
- Styling with [Tailwind CSS](https://tailwindcss.com)
