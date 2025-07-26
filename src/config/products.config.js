// Product configuration for payment and booking links
export const productConfig = {
  paymentLinks: {
    // Starter Package - Direct payment link
    'Starter Package': {
      type: 'direct_payment',
      url: 'https://buy.stripe.com/fZu14o0xZ9EU0hkbaW83C01',
      // Alternative: Use contact form if payment link has issues
      // type: 'contact_form',
      // message: 'I want to purchase the Starter Package ($497)'
    },
    
    // Professional Package - Direct booking
    'Professional Package': {
      type: 'direct_booking',
      url: 'https://calendly.com/aman16tanwar/30min',
      message: 'Schedule a setup call for guided implementation'
    },
    
    // Enterprise Package - Direct booking
    'Enterprise Package': {
      type: 'direct_booking',
      url: 'https://calendly.com/aman16tanwar/30min',
      message: 'Get started with our white-glove service'
    }
  },
  
  // Calendly link for booking calls (optional)
  calendlyLink: 'https://calendly.com/your-username/30min',
  
  // Optional: Different calendar links for different packages
  bookingLinks: {
    // Uncomment and add your actual Calendly links if you want direct booking
    // 'Guided Implementation': 'https://calendly.com/your-username/setup-call',
    // 'Done-For-You': 'https://calendly.com/your-username/strategy-call'
  }
};