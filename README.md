# 🤖 AI Education Assistant

A modern, full-stack AI education application built with React, Node.js, and OpenAI's GPT API. This app provides an intuitive interface for asking educational questions and receiving AI-powered responses.

## ✨ Features

### Frontend (React)
- **Modern UI/UX**: Beautiful gradient design with smooth animations
- **Comprehensive Error Handling**: 
  - Network connectivity checks
  - API error handling with user-friendly messages
  - Input validation (character limits, empty input checks)
  - React Error Boundaries for unexpected errors
- **Loading States**: Visual feedback during API calls
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Real-time Character Counter**: Shows input length with 500 character limit
- **Connection Status**: Automatically detects server connectivity

### Backend (Node.js/Express)
- **OpenAI Integration**: Powered by GPT-3.5-turbo
- **Health Check Endpoint**: For monitoring server status
- **CORS Enabled**: Cross-origin resource sharing for development
- **Environment Variables**: Secure API key management
- **Error Handling**: Proper error responses with meaningful messages

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- OpenAI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd App
   ```

2. **Set up the backend**
   ```bash
   cd server
   npm install
   ```

3. **Create environment file**
   ```bash
   # Create .env file in server directory
   echo "OPENAI_API_KEY=your_openai_api_key_here" > .env
   ```

4. **Set up the frontend**
   ```bash
   cd ../client
   npm install
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd server
   node index.js
   ```
   Server will run on `http://localhost:5000`

2. **Start the React development server**
   ```bash
   cd client
   npm start
   ```
   App will open on `http://localhost:3000`

## 🔧 Error Handling

### Frontend Error Handling
- **Network Errors**: Detects when server is unreachable
- **API Errors**: Handles various HTTP status codes
- **Input Validation**: Prevents empty or overly long questions
- **Timeout Handling**: 30-second timeout for API requests
- **Error Boundaries**: Catches unexpected React errors

### Backend Error Handling
- **OpenAI API Errors**: Proper error messages for API failures
- **Request Validation**: Validates incoming request data
- **Server Errors**: Graceful handling of unexpected errors

## 📁 Project Structure

```
App/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── AskQuestion.js    # Main AI interaction component
│   │   │   └── ErrorBoundary.js  # React error boundary
│   │   ├── App.js               # Main app component
│   │   ├── App.css              # Styling
│   │   └── index.js             # App entry point
│   └── package.json
├── server/                 # Node.js backend
│   ├── routes/
│   │   └── ask.js             # AI endpoint
│   ├── index.js              # Server entry point
│   └── package.json
└── README.md
```

## 🎨 UI Features

- **Gradient Background**: Beautiful purple-blue gradient
- **Glass Morphism**: Backdrop blur effects
- **Smooth Animations**: Hover effects and transitions
- **Loading Spinner**: Animated spinner during API calls
- **Responsive Layout**: Adapts to different screen sizes
- **Modern Typography**: Clean, readable fonts

## 🔒 Security

- **Environment Variables**: API keys stored securely
- **Input Sanitization**: Prevents malicious input
- **CORS Configuration**: Proper cross-origin handling
- **Request Validation**: Validates all incoming requests

## 🛠️ Development

### Available Scripts

**Frontend (client directory)**
```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
npm run eject      # Eject from Create React App
```

**Backend (server directory)**
```bash
node index.js      # Start server
```

### Environment Variables

Create a `.env` file in the server directory:
```env
OPENAI_API_KEY=your_openai_api_key_here
```

## 🐛 Troubleshooting

### Common Issues

1. **Server Connection Error**
   - Ensure the backend server is running on port 5000
   - Check if the health endpoint responds: `http://localhost:5000/api/health`

2. **OpenAI API Errors**
   - Verify your API key is correct
   - Check your OpenAI account has sufficient credits
   - Ensure the API key has proper permissions

3. **CORS Errors**
   - Backend has CORS enabled for development
   - If issues persist, check browser console for specific errors

4. **Port Conflicts**
   - Frontend: Change port in `client/package.json` if 3000 is busy
   - Backend: Change port in `server/index.js` if 5000 is busy

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- OpenAI for providing the GPT API
- React team for the amazing framework
- Create React App for the development setup 