# 📧 Email Reply Generator

<div align="center">

![Email Generator](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

**🚀 Generate professional email replies with AI assistance**

**🌐 [LIVE DEMO](https://emailreplygeneratorr.netlify.app/) • 🔗 [BACKEND API](https://email-generator-sb.onrender.com/) • 📱 [FRONTEND REPO](https://github.com/Dhiren507/email-generator-react)**

![Status](https://img.shields.io/website?url=https%3A//emailreplygeneratorr.netlify.app/&style=flat-square)
![API Status](https://img.shields.io/website?url=https%3A//email-generator-sb.onrender.com/api/email/health&style=flat-square&label=API)

</div>

---

## 🌟 Overview

Email Reply Generator is a **production-ready** full-stack web application that leverages **Google's Gemini AI** to help users craft professional email responses. Simply paste an email, choose a tone, and get an intelligent, contextual reply in seconds.

### ✨ Key Features

- 🤖 **AI-Powered Responses** - Utilizes Google Gemini 2.0 Flash for intelligent email generation
- 🎨 **Multiple Tone Options** - Professional, Friendly, Casual, or Formal responses
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Real-time Feedback** - Toast notifications and loading states for great UX
- 🔒 **Secure & Reliable** - Environment-based configuration and comprehensive error handling
- 📋 **One-Click Copy** - Easy clipboard integration for generated replies
- 🚀 **Production Deployed** - Live demo available with full functionality

---

## 🎯 Live Application

### 🌐 **Frontend**: [https://emailreplygeneratorr.netlify.app/](https://emailreplygeneratorr.netlify.app/)
- Deployed on **Netlify**
- Automatic deployments from GitHub
- Optimized build with Vite

### 🔗 **Backend API**: [https://email-generator-sb.onrender.com/](https://email-generator-sb.onrender.com/)
- Deployed on **Render** with Docker
- RESTful API endpoints
- Health monitoring enabled

### 📊 **API Health Check**: [https://email-generator-sb.onrender.com/api/email/health](https://email-generator-sb.onrender.com/api/email/health)

---

## 🛠️ Tech Stack

### Backend (Spring Boot)
- **Framework**: Spring Boot 3.3.0
- **Language**: Java 17
- **Dependencies**: Spring Web, WebFlux, Lombok
- **AI Integration**: Google Gemini 2.0 Flash API
- **Build Tool**: Maven
- **Deployment**: Docker container on Render

### Frontend (React)
- **Framework**: React 18 with Vite
- **UI Library**: Material-UI (MUI)
- **HTTP Client**: Axios
- **Notifications**: React Hot Toast
- **Styling**: CSS with Material-UI theming
- **Deployment**: Netlify with automatic builds

### DevOps & Deployment
- **Backend**: Dockerized Spring Boot on Render
- **Frontend**: Static build on Netlify
- **CI/CD**: GitHub integration with auto-deployment
- **Monitoring**: Health checks and logging

---

## 🚀 Quick Start

### Prerequisites
- Java 17 or higher
- Node.js 16+ and npm
- Google Gemini API key

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Dhiren507/email-generator-sb.git
   cd email-generator-sb
   ```

2. **Set environment variables**
   ```bash
   export GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent
   export GEMINI_API_KEY=your_gemini_api_key_here
   ```

3. **Run the application**
   ```bash
   ./mvnw spring-boot:run
   ```

4. **Verify it's running**
   ```bash
   curl http://localhost:8080/api/email/health
   ```

### Frontend Setup

1. **Clone the frontend repository**
   ```bash
   git clone https://github.com/Dhiren507/email-generator-react.git
   cd email-generator-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set environment variables**
   ```bash
   # Create .env file
   echo "VITE_API_URL=http://localhost:8080" > .env
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:5173
   ```

---

## 📁 Project Structure

```
email-generator-backend/
├── src/
│   ├── main/
│   │   ├── java/com/myprojects/email/
│   │   │   ├── app/
│   │   │   │   ├── EmailGeneratorController.java
│   │   │   │   └── EmailGeneratorService.java
│   │   │   ├── EmailRequest.java
│   │   │   └── EmailGeneratorApplication.java
│   │   └── resources/
│   │       └── application.properties
├── Dockerfile
├── pom.xml
└── README.md
```

---

## 🔧 API Documentation

### Base URL
**Production**: `https://email-generator-sb.onrender.com`  
**Local Development**: `http://localhost:8080`

### Generate Email Reply

**Endpoint**: `POST /api/email/generate`

**Request Body**:
```json
{
  "emailContent": "Thank you for your interest in our product. We'd love to schedule a demo.",
  "tone": "professional"
}
```

**Response**:
```json
"Thank you for reaching out! I'd be delighted to schedule a demo of our product. Please let me know your availability, and I'll coordinate a time that works best for you. Looking forward to showing you what we can offer."
```

**Available Tones**:
- `professional` - Business-appropriate language
- `friendly` - Warm and approachable tone
- `casual` - Relaxed, informal style
- `formal` - Very professional and structured

### Health Check

**Endpoint**: `GET /api/email/health`

**Response**: `"Email Generator Service is running!"`

### Root Endpoint

**Endpoint**: `GET /`

**Response**: `"Email Generator API is online! Use /api/email/health for health check."`

---

## 🧪 API Testing

### Test with cURL

```bash
# Health check
curl https://email-generator-sb.onrender.com/api/email/health

# Generate email reply
curl -X POST https://email-generator-sb.onrender.com/api/email/generate \
  -H "Content-Type: application/json" \
  -d '{"emailContent": "Hello, how are you?", "tone": "friendly"}'
```

### Test with Postman

1. **Import Collection**: Use the base URL `https://email-generator-sb.onrender.com`
2. **POST Request**: `/api/email/generate`
3. **Headers**: `Content-Type: application/json`
4. **Body**: JSON with `emailContent` and `tone`

---

## 🌐 Environment Variables

### Backend
| Variable | Description | Production Value |
|----------|-------------|------------------|
| `GEMINI_API_URL` | Google Gemini API endpoint | `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent` |
| `GEMINI_API_KEY` | Your Gemini API key | `your_api_key_here` |
| `PORT` | Server port | `8080` (auto-set by Render) |

### Frontend
| Variable | Description | Production Value |
|----------|-------------|------------------|
| `VITE_API_URL` | Backend API URL | `https://email-generator-sb.onrender.com` |

---

## 🚀 Deployment Architecture

```
┌─────────────────┐    HTTPS     ┌─────────────────┐
│   Netlify       │◄────────────►│   User Browser  │
│   (Frontend)    │              │                 │
│   React + Vite  │              └─────────────────┘
└─────────────────┘                       │
         │                                │
         │ API Calls                      │
         ▼                                ▼
┌─────────────────┐              ┌─────────────────┐
│   Render        │              │   Google        │
│   (Backend)     │◄────────────►│   Gemini AI     │
│   Docker +      │   API Calls  │                 │
│   Spring Boot   │              └─────────────────┘
└─────────────────┘
```

### Deployment Features
- ✅ **Auto-deployment** from GitHub pushes
- ✅ **HTTPS/SSL** enabled on both platforms
- ✅ **Health monitoring** with automatic restarts
- ✅ **Environment isolation** for secure configuration
- ✅ **CORS configuration** for cross-origin requests

---

## 🔮 Features Showcase

### 🎨 **Beautiful UI/UX**
- Material-UI components for professional look
- Responsive design works on all devices
- Loading states and error handling
- Toast notifications for user feedback

### 🤖 **AI Integration**
- Google Gemini 2.0 Flash model
- Context-aware response generation
- Multiple tone options
- Intelligent email analysis

### 🔧 **Production Ready**
- Comprehensive error handling
- Input validation and sanitization
- Request timeout management
- Health monitoring and logging

### 🚀 **Performance Optimized**
- Dockerized backend for consistency
- Optimized frontend builds
- Efficient API communication
- Fast response times

---

## 🔍 Development Features

### Backend
- **Spring Boot 3.3.0** with latest features
- **Java 17** LTS for stability
- **WebFlux** for reactive programming
- **Lombok** for clean code
- **Maven** for dependency management

### Frontend
- **React 18** with modern hooks
- **Vite** for fast development and builds
- **Material-UI v5** for consistent design
- **Axios** for HTTP requests
- **Hot Toast** for notifications

---

## 🧪 Testing

### Manual Testing
```bash
# Backend health check
curl https://email-generator-sb.onrender.com/api/email/health

# Frontend accessibility
curl -I https://emailreplygeneratorr.netlify.app/

# End-to-end API test
curl -X POST https://email-generator-sb.onrender.com/api/email/generate \
  -H "Content-Type: application/json" \
  -d '{"emailContent": "Test email content", "tone": "professional"}'
```

### Browser Testing
1. Visit [https://emailreplygeneratorr.netlify.app/](https://emailreplygeneratorr.netlify.app/)
2. Paste email content in the text area
3. Select desired tone
4. Click "Generate Reply"
5. Copy generated response

---

## 🔮 Future Enhancements

- [ ] **User Authentication** - Save and manage email templates
- [ ] **Template Library** - Pre-built response templates
- [ ] **Email Threading** - Context-aware multi-email conversations
- [ ] **Language Support** - Multi-language response generation
- [ ] **Analytics Dashboard** - Usage statistics and insights
- [ ] **Browser Extension** - Direct integration with email clients
- [ ] **API Rate Limiting** - Enhanced security and usage control
- [ ] **Caching Layer** - Improved performance for common requests

---

## 🏆 Technical Achievements

- ✅ **Full-Stack Development** - Complete end-to-end application
- ✅ **AI Integration** - Successfully integrated Google Gemini API
- ✅ **Production Deployment** - Live application with real users
- ✅ **Docker Containerization** - Modern deployment practices
- ✅ **CI/CD Pipeline** - Automated deployment from GitHub
- ✅ **Responsive Design** - Cross-platform compatibility
- ✅ **Error Handling** - Robust application stability
- ✅ **Security Best Practices** - Environment variables and CORS

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 👨‍💻 Author

**Dhiren Dantani**
- GitHub: [@Dhiren507](https://github.com/Dhiren507)
- Email: dantanidhiren4@gmail.com

---

## 🙏 Acknowledgments

- [Google Gemini AI](https://ai.google.dev/) for powerful language generation capabilities
- [Spring Boot](https://spring.io/projects/spring-boot) for robust backend framework
- [React](https://reactjs.org/) and [Material-UI](https://mui.com/) for modern frontend development
- [Render](https://render.com/) and [Netlify](https://netlify.com/) for seamless deployment platforms
- [Docker](https://docker.com/) for containerization technology

---

## 📊 Project Stats

- **Backend**: Java Spring Boot with Docker
- **Frontend**: React with Material-UI
- **Deployment**: Production-ready on cloud platforms
- **API**: RESTful with comprehensive error handling
- **Performance**: Fast response times and optimized builds

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

**🚀 [Try the Live Demo](https://emailreplygeneratorr.netlify.app/)**

Made with ❤️ by [Dhiren507](https://github.com/Dhiren507)

![Views](https://komarev.com/ghpvc/?username=dhiren507&repo=email-generator-backend&color=brightgreen)

</div>
