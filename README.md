# Aakash Jawle - Full-Stack Portfolio

A modern, responsive portfolio website built with React, Express, and Node.js featuring stunning animations, particle effects, and a complete backend API.

## � Recent Updates (Dec 2024)
- Fixed ESLint errors for successful Vercel deployment
- Optimized build configuration with CI environment settings
- Enhanced TypeScript support and dependency management

## �🚀 Features

- **Modern React Frontend** with Material-UI and Framer Motion animations
- **Express.js Backend** with contact form and project API
- **Interactive Particle Background** using TSParticles
- **Responsive Design** optimized for all devices
- **Contact Form** with email functionality using Nodemailer
- **Project Gallery** with dynamic filtering and modal views
- **Smooth Animations** with AOS and Framer Motion
- **Type Safety** with modern JavaScript practices
- **Professional Design** with gradient themes and glass effects

## 🛠️ Tech Stack

### Frontend
- React 18
- Material-UI (MUI)
- Framer Motion
- React Router
- Axios
- AOS (Animate On Scroll)
- TSParticles
- React Typed
- React CountUp

### Backend
- Node.js
- Express.js
- Nodemailer
- CORS
- Helmet (Security)
- Rate Limiting
- JWT Authentication
- Joi Validation

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aakashjawle/portfolio-fullstack.git
   cd portfolio-fullstack
   ```

2. **Install all dependencies**
   ```bash
   npm run install-all
   ```

3. **Set up environment variables**
   ```bash
   cp server/.env.example server/.env
   ```
   
   Edit `server/.env` with your configuration:
   ```env
   NODE_ENV=development
   PORT=5000
   CLIENT_URL=http://localhost:3000
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ADMIN_EMAIL=admin@example.com
   ADMIN_PASSWORD=your-admin-password
   JWT_SECRET=your-jwt-secret
   ```

4. **Start development servers**
   ```bash
   npm run dev
   ```

   This will start both the React development server (port 3000) and Express server (port 5000).

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd client
npm run build
```

### Backend (Heroku/Railway/Render)
```bash
cd server
npm start
```

## 📁 Project Structure

```
portfolio-fullstack/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.js        # Main App component
│   │   └── index.js      # Entry point
│   └── package.json
├── server/                # Express backend
│   ├── routes/           # API routes
│   │   ├── contact.js    # Contact form handling
│   │   ├── projects.js   # Projects API
│   │   └── admin.js      # Admin authentication
│   ├── index.js         # Server entry point
│   └── package.json
├── package.json         # Root package.json
└── README.md
```

## 🎨 Components

### Frontend Components
- **Hero** - Landing section with animated typing and particle effects
- **About** - Personal information with animated stats
- **Projects** - Portfolio gallery with filtering and modals
- **Skills** - Technology skills with animated progress bars
- **Contact** - Contact form with backend integration
- **Navbar** - Responsive navigation with smooth scrolling
- **Footer** - Social links and additional information

### Backend Routes
- `POST /api/contact` - Handle contact form submissions
- `GET /api/projects` - Fetch projects data
- `GET /api/projects/:id` - Get single project
- `POST /api/admin/login` - Admin authentication
- `GET /api/health` - Health check endpoint

## 🔧 Configuration

### Email Setup (Gmail)
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password: Google Account > Security > App passwords
3. Use your Gmail address as `EMAIL_USER` and the app password as `EMAIL_PASS`

### Rate Limiting
- Contact form: 5 requests per hour per IP
- Global API: 100 requests per 15 minutes per IP

## 🎯 Features in Detail

### Animations
- Smooth page transitions with Framer Motion
- Scroll-triggered animations with AOS
- Interactive hover effects and micro-interactions
- Particle background with mouse interaction

### Contact Form
- Client-side validation with real-time feedback
- Server-side validation with Joi
- Email sending with auto-reply functionality
- Rate limiting to prevent spam

### Projects Gallery
- Dynamic project loading from API
- Category-based filtering
- Modal view with detailed project information
- Responsive grid layout

### Performance
- Optimized bundle size with code splitting
- Lazy loading of components
- Compressed assets and images
- CDN-ready static files

## 🔒 Security Features

- Helmet.js for security headers
- CORS configuration
- Rate limiting on sensitive endpoints
- Input validation and sanitization
- JWT-based authentication for admin routes

## 📱 Responsive Design

- Mobile-first approach
- Flexible grid system with Material-UI
- Touch-friendly interactions
- Optimized typography and spacing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Aakash Jawle**
- Portfolio: [aakashjawle.com](https://aakashjawle.com)
- LinkedIn: [linkedin.com/in/aakash-jawle](https://linkedin.com/in/aakash-jawle)
- GitHub: [github.com/aakashjawle](https://github.com/aakashjawle)
- Email: aakashjawle1010@gmail.com

## 🙏 Acknowledgments

- Material-UI for the beautiful component library
- Framer Motion for smooth animations
- React community for the amazing ecosystem
- All the open-source contributors

---

⭐ **Star this repository if you found it helpful!**
