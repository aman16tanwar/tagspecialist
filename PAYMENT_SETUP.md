# Payment Integration Setup Guide

## Overview
The product buttons are now functional:
- **DIY Script Package**: Opens Stripe payment link in a new tab
- **Guided Implementation & Done-For-You**: Opens contact form for consultation

## Configuration
Edit `src/config/products.config.js` to customize your payment and booking links.

### Option 1: Stripe (Recommended)
1. Create a Stripe account at https://stripe.com
2. Create a Payment Link for your DIY package
3. Replace the URL in products.config.js:
   ```javascript
   'DIY Script Package': {
     type: 'direct_payment',
     url: 'https://buy.stripe.com/your-actual-link-here'
   }
   ```

### Option 2: Gumroad
1. Create a Gumroad account at https://gumroad.com
2. Add your product
3. Update the URL:
   ```javascript
   url: 'https://gumroad.com/l/your-product-id'
   ```

### Option 3: PayPal
1. Create a PayPal Buy Now button
2. Use the generated link:
   ```javascript
   url: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YOUR_ID'
   ```

## Calendar Integration (Optional)
For "Book Setup Call" functionality, you can use Calendly:

1. Update the bookingLinks in products.config.js:
   ```javascript
   bookingLinks: {
     'Guided Implementation': 'https://calendly.com/your-username/setup-call',
     'Done-For-You': 'https://calendly.com/your-username/strategy-call'
   }
   ```

## How It Works
- **DIY Package**: Opens payment link in new tab
- **Guided/Done-For-You**: Opens contact form with pre-filled message
- **Fallback**: If no configuration found, opens contact form

## Testing
1. Click each button to ensure they work correctly
2. Test the contact form submission
3. Verify payment links open properly
4. Check that package details are pre-filled in contact form