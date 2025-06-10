import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import CircularProgress from '@mui/material/CircularProgress'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Divider from '@mui/material/Divider'
import Alert from '@mui/material/Alert'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import SendIcon from '@mui/icons-material/Send'
import ClearIcon from '@mui/icons-material/Clear'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

// Configure axios timeout
axios.defaults.timeout = 30000 // 30 seconds


function App() {
  const [emailContent, setEmailContent] = useState('')
  const [tone, setTone] = useState('')
  const [generatedReply, setGeneratedReply] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Environment variable for API URL
  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080'

  const handleSubmit = async (e) => { 
    e.preventDefault()
    setLoading(true)
    setError('')
    
    // Input validation
    if (!emailContent.trim()) {
      toast.error('Please enter email content')
      setLoading(false)
      return
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/api/email/generate`, {
        emailContent: emailContent.trim(), 
        tone
      }, {
        timeout: 30000, // 30 seconds timeout
        headers: {
          'Content-Type': 'application/json'
        }
      })
      
      setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data))
      toast.success('Email reply generated successfully!')
      
    } catch (error) {
      let errorMessage = 'Failed to generate reply. Please try again.'
      
      if (error.code === 'ECONNABORTED') {
        errorMessage = 'Request timed out. Please try again.'
      } else if (error.response?.status === 500) {
        errorMessage = 'Server error. Please try again later.'
      } else if (error.response?.status === 429) {
        errorMessage = 'Too many requests. Please wait a moment and try again.'
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message
      }
      
      setError(errorMessage)
      toast.error(errorMessage)
      console.error('API Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedReply)
      toast.success('Copied to clipboard!')
    } catch (error) {
      toast.error('Failed to copy to clipboard')
      console.error('Copy error:', error)
    }
  }

  const handleClearAll = () => {
    setEmailContent('')
    setTone('')
    setGeneratedReply('')
    setError('')
    toast.success('All fields cleared!')
  }

  return (
    <>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Paper elevation={2} sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="h3" component="h1" gutterBottom align="center" color="primary">
            Email Reply Generator
          </Typography>
          <Typography variant="subtitle1" gutterBottom align="center" color="text.secondary" sx={{ mb: 4 }}>
            Generate professional email replies with AI assistance
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Box component="form" onSubmit={handleSubmit}>
            <TextField 
              fullWidth 
              multiline 
              rows={6} 
              label="Email Content" 
              value={emailContent || ''} 
              onChange={(e) => setEmailContent(e.target.value)} 
              sx={{ mb: 1 }} 
              variant='outlined'
              placeholder="Paste the email you want to reply to..."
              required
            />
            <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
              {emailContent.length} characters
            </Typography>
            
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel id="tone-select-label">Tone</InputLabel>
              <Select
                value={tone || ''}
                label="Tone"
                onChange={(e) => setTone(e.target.value)}
              >
                <MenuItem value="professional">Professional</MenuItem>
                <MenuItem value="friendly">Friendly</MenuItem>
                <MenuItem value="casual">Casual</MenuItem>
                <MenuItem value="formal">Formal</MenuItem>
              </Select>
            </FormControl>

            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={handleSubmit} 
                disabled={!emailContent.trim() || loading}
                startIcon={loading ? <CircularProgress size={20} /> : <SendIcon />}
                sx={{ flex: 1 }}
              > 
                {loading ? 'Generating...' : 'Generate Reply'}
              </Button>
              
              <Button 
                variant="outlined" 
                color="secondary" 
                onClick={handleClearAll}
                disabled={loading}
                startIcon={<ClearIcon />}
              >
                Clear All
              </Button>
            </Box>
          </Box>

          {error && (
            <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError('')}>
              {error}
            </Alert>
          )}

          {generatedReply && (
            <Box sx={{ mt: 3 }}>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="h6" gutterBottom color="primary">
                Generated Reply:
              </Typography>
              <Paper variant="outlined" sx={{ p: 2, mb: 2, backgroundColor: '#f8f9fa' }}>
                <TextField 
                  fullWidth 
                  multiline 
                  rows={8} 
                  value={generatedReply || ''} 
                  variant='outlined' 
                  InputProps={{ readOnly: true }}
                  sx={{ 
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'white'
                    }
                  }}
                />
              </Paper>
              <Button 
                variant='contained' 
                color="success"
                startIcon={<ContentCopyIcon />}
                onClick={handleCopyToClipboard}
                sx={{ mt: 1 }}
              >
                Copy to Clipboard
              </Button>
            </Box>
          )}
        </Paper>
      </Container>
    </>
  )
}

export default App
