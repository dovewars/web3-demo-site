# Web 3 Demo Application

This project demonstrates the integration of Web 3 technologies such as **MetaMask** and **Web3.js**, combined with **React.js**, **Next.js**, and **Three.js** for 3D model visualization. The project showcases a sample e-commerce layout where users can view products, interact with 3D models, and simulate purchases using the **Sepolia Test Net**.

**It is still a work in progress! I have spent just over a day on this (13th Sept - 14th Sept) and will be updating it again in the following week**

## Features

- **React.js & Next.js**: Provides the framework for building a responsive, modern web application.
- **Web3.js Integration**: Allows users to connect with MetaMask to perform Ethereum-based transactions.
- **Three.js**: 3D model rendering for enhanced product visualization.
- **MetaMask Wallet Support**: Users can connect their MetaMask wallets to simulate purchasing products using cryptocurrency on the Sepolia Test Network.
- **Sepolia Test Net**: All transactions are processed on the Ethereum Sepolia Test Network, ensuring no real money is involved.

## Upcoming Features & Improvements

- **Login**: A fully integrated authentication system with either Supabase or Firebase.
- **Payment Form**: A more formal way to transition the user from the buy button to having a user account to purchase.
- **NFT Management**: A way for admins to set up NFT's for sale in the backend.
- **Non MetaMask Payment**: A way for those who do not have MetaMask to pay.
- **Integration with IPFS**: For delivery of assets
- **Improved error handling**
- **Refactoring of the code**: Hey, I only spent just over a day on it :P

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [MetaMask Setup](#metamask-setup)
4. [Sepolia Test Network](#sepolia-test-network)
5. [3D Model Support](#3d-model-support)
6. [Contributing](#contributing)
7. [License](#license)

## Installation

To get started, clone the repository and install the necessary dependencies:

`git clone https://github.com/yourusername/web3-demo-app.git`

`cd web3-demo-app`

`npm install`

## Usage

The application relies on two environment variables:

ACCOUNT - the account to where the Sepolia ETH will be sent.

PASSWORD - the secret password to allow the user into the app.

**Be sure to set up a .env file in the root of the project.**

To run the application locally, use the following command:

`npm run dev`

The app will be accessible at `http://localhost:3000`.

1.  Click on any image to see it larger model window.
2.  Click on items marked 3D to see it in a larger modal window. The 3D model may animate and can be interacted with using the mouse.
3.  Click buy to initiate a transaction on the Sepolia Network.

## MetaMask Setup

1.  Install the [MetaMask extension](https://metamask.io/) for your browser.
2.  Connect your MetaMask wallet.
3.  Switch the network to **Sepolia Test Net** in MetaMask.
4.  Request some Sepolia Test ETH from Sepolia Faucet.

## Sepolia Test Network

All transactions in this demo are conducted on the **Sepolia Test Network**. This ensures that **no real funds are involved**.

**Note**: The Ethereum address used in the demo (`0x53B52297140B3a73e0B983723D080cb9641Bc04e`) should be replaced with your own address for actual testing.

## 3D Model Support

For products that include a 3D model, the application uses **Three.js** to display them in an interactive viewer. Products without a 3D model
will display a standard image.

## Attributions

The 3D Drone used is "Buster Drone" (https://skfb.ly/TBnX) by LaVADraGoN is licensed under Creative Commons Attribution-NonCommercial (http://creativecommons.org/licenses/by-nc/4.0/). Thank you LaVADraGoN!

## License

This project is licensed under the MIT License - see the LICENSE file for details.
