# Development Instructions

## 🚀 Quick Start Guide

### 1. Install Dependencies
```bash
npm run install-all
```

### 2. Configure Environment
Copy `/server/.env.example` to `/server/.env` and fill in your email credentials:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### 3. Start Development
```bash
npm run dev
```

This will start:
- React frontend on http://localhost:3000
- Express backend on http://localhost:5000

## 🔧 Development Features

### Hot Reload
- Frontend: Automatic reload on file changes
- Backend: Nodemon for automatic server restart

### API Testing
Test the contact form API:
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "Test message content"
  }'
```

### Available Routes
- Frontend: http://localhost:3000
- Backend Health: http://localhost:5000/api/health
- Projects API: http://localhost:5000/api/projects

## 📱 Mobile Development
The app is responsive and works on all devices. Test on:
- Chrome DevTools device emulation
- Real devices via network IP

## 🎨 Customization

### Adding New Sections
1. Create component in `/client/src/components/`
2. Import and add to App.js
3. Add navigation link in Navbar

### Modifying Colors
Update theme in `/client/src/index.js`:
```javascript
const theme = createTheme({
  palette: {
    primary: { main: '#667eea' },
    secondary: { main: '#764ba2' },
  },
});
```

### Adding New Projects
Edit `/server/routes/projects.js` and add to the projects array.

## 🚀 Production Build

### Build Frontend
```bash
cd client
npm run build
```

### Start Production Server
```bash
npm start
```

## 📦 Deployment Options

### Vercel (Frontend)
1. Connect GitHub repo
2. Set build command: `cd client && npm run build`
3. Set output directory: `client/build`

### Railway (Full-Stack)
1. Connect GitHub repo
2. Set start command: `npm start`
3. Add environment variables

### Heroku (Backend)
1. Deploy server folder
2. Set PORT environment variable
3. Configure email credentials

## 🔍 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   lsof -ti:3000 | xargs kill -9
   lsof -ti:5000 | xargs kill -9
   ```

2. **Email not sending**
   - Check email credentials in .env
   - Enable "Less secure app access" for Gmail
   - Use App Password for Gmail

3. **Images not loading**
   - Ensure images are in `/client/public/`
   - Check image paths in components

### Debug Mode
Set NODE_ENV=development for detailed error messages.

## 📊 Performance

### Bundle Analysis
```bash
cd client
npm run build
npx serve -s build
```

### Lighthouse Testing
Run Lighthouse in Chrome DevTools for performance metrics.

---

Happy coding! 🚀
