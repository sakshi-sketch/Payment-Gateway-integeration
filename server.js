/*const express = require('express');
const app = express();

const port = 3000; // Change this port if needed

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const razorpay = require('razorpay');
app.use(require("body-parser").json());
var instance = new Razorpay({ 
    key_id: 'rzp_test_IxRdN1xszdP8CR', 
    key_secret: 'lDWbRj8xwLXfT8Bm2xmIW8Bq' 
});

app.get('/',(req,res)=>{
    res.sendFile("standard.html",{root:__dirname});
})

app.post('/create/orderId', async (req, res) => {
    console.log('Received POST request to /create-order');
    console.log('create order id', req.body);
  
    var options = {
      amount: req.body.amount, // amount in paise (equals 500 INR)
      currency: 'INR',
      receipt: 'rcpp11'
    };

    instance.orders.create(options,function(err,order){
        console.log(order);
        res.send({orderId:order.id});
    });
})  
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors'); // Import cors

// Enable CORS for all routes
app.use(cors());

const bodyParser = require('body-parser');
const razorpay = require('razorpay');

app.use(express.static(__dirname));
app.use(bodyParser.json());

const instance = new razorpay({
    key_id: 'rzp_test_IxRdN1xszdP8CR',
    key_secret: 'lDWbRj8xwLXfT8Bm2xmIW8Bq'
});

app.get('/', (req, res) => {
    res.sendFile("incd.html", { root: __dirname });
});

app.post('/create/orderId', async (req, res) => {
    console.log('Received POST request to /create/orderId');
    console.log('Request body:', req.body);

    // Assuming req.body.amount is passed from the client
    const options = {
        amount: req.body.amount,
        currency: 'INR',
        receipt: 'rcpp11'
    };

    instance.orders.create(options, function(err, order) {
        if (err) {
            console.error('Error creating order:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            // Log the order ID
            console.log('Order ID:', order.id);

            // Send the order ID back to the client
            res.json({ orderId: order.id });
        }
    });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});*/
const express = require('express');
const bodyParser = require('body-parser');
const Razorpay = require('razorpay');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS for all routes

const port = 3000;

app.use(bodyParser.json());

const razorpay = new Razorpay({
    key_id: 'rzp_test_IxRdN1xszdP8CR',
    key_secret: 'lDWbRj8xwLXfT8Bm2xmIW8Bq'
});

// Endpoint to handle Razorpay webhook events
app.post('/razorpay-webhook', (req, res) => {
  const signature = req.get('X-Razorpay-Signature');

  try {
    const event = razorpay.webhooks.utility.verifyWebhookSignature(
      req.rawBody,
      signature,
      '1234'
    );

    // Handle different events
    switch (event.payload.event) {
      case 'payment.captured':
        // Handle payment captured event
        console.log('Payment Captured:', event.payload);
        break;

      // Add more cases for other events as needed

      default:
        console.log('Unhandled event:', event.payload);
    }

    res.json({ received: true });
  } catch (error) {
    console.error('Error handling webhook:', error.message);
    res.status(400).json({ error: 'Invalid webhook signature' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
