# Project Name

## EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new Email Service (Gmail, Outlook, etc.)
3. Create an Email Template with the following variables:
   - `name`
   - `email`
   - `mobile`
   - `college`
   - `projectType`
   - `documentationType`
   - `abstract`
4. Copy your Service ID, Template ID, and Public Key
5. Create a `.env` file in the root directory based on `.env.example`
6. Add your EmailJS credentials to the `.env` file:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Features

- Contact form with EmailJS integration
- Project type selection
- Documentation type selection
- Responsive design
- Form validation
- Success/error handling

## Technologies Used

- React
- TypeScript
- EmailJS
- Tailwind CSS "# gradgear" 
