# Razor Pay Integration

## Introduction

This project demonstrates the integration of Razorpay for online payments. It includes a simple HTML file with a Razorpay button and corresponding server-side code to handle order creation.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Responsive Design](#responsive-design)

## Prerequisites

Before you begin, make sure you have the following:

- [Node.js](https://nodejs.org/) installed
- [Razorpay API Key](https://dashboard.razorpay.com/app/dashboard) (replace 'YOUR_KEY' in app.js with your actual key)
  Ngrok Setup

## Sign Up for Ngrok:
Visit Ngrok and sign up for a free account.
Retrieve the authentication token.
Download Ngrok:
Download the Ngrok executable for your OS from Ngrok Download Page.
Authenticate Your Account:
Open a terminal in the Ngrok directory.
Run: ./ngrok authtoken YOUR_AUTH_TOKEN (replace YOUR_AUTH_TOKEN).
Exposing Local Server

## Start Your Local Server:
Ensure your Node.js server (Razor Pay Integration) is running on port 3000.
Expose Your Server Using Ngrok:
In Ngrok directory, run: ./ngrok http 3000.
Note the provided "Forwarding" URL.
Update Razorpay Webhook:
Go to Razorpay Dashboard.
Update the webhook configuration to use the Ngrok URL.
Note: Ngrok provides a temporary public URL, and it changes on restart. Update Razorpay webhook each time you restart Ngrok.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/razor-pay-integration.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd razor-pay-integration
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

## Usage

1. **Replace 'YOUR_KEY' in `app.js` with your Razorpay API Key.**

2. **Start the server:**

    ```bash
    npm start
    ```

3. **Open `incd.html` in your web browser.**

4. **Click on the "Pay with Razorpay" button to test the payment integration.**

## Responsive Design

The project includes responsive design for smaller screens using CSS media queries. The button adapts to different screen sizes for a better user experience.

