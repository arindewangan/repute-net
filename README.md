# ReputeNet - Decentralized AI-Powered Reputation System

ReputeNet is a decentralized, AI-powered reputation system designed to establish trust and accountability across Web3 ecosystems. By analyzing on-chain activities, ReputeNet generates a tamper-proof reputation score securely stored on-chain. This score is accessible to Web3 platforms, ensuring transparency and secure interactions within decentralized environments.

## Table of Contents

- [Inspiration](#inspiration)
- [What ReputeNet Does](#what-reputenet-does)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [How to Run the Project](#how-to-run-the-project)
- [Frontend - Pages and Components](#frontend---pages-and-components)
- [Backend - APIs and Services](#backend---apis-and-services)
- [Accomplishments](#accomplishments)
- [Contributing](#contributing)
- [License](#license)

---

## Inspiration

As the Web3 ecosystem grows, establishing trust is critical. Users interacting on DeFi, DAOs, and dApps need a transparent way to build and check reputations across multiple chains. ReputeNet was inspired by the need for a decentralized reputation system that promotes security, reliability, and trustworthiness in Web3.

## What ReputeNet Does

ReputeNet aggregates user behavior across different blockchains to generate a reputation score. This score, stored on-chain, can be accessed by any Web3 platform to evaluate a user’s credibility, helping ensure safer interactions.

### Key Features

- **Cross-Chain Compatibility**: Works across multiple blockchain networks, creating a unified reputation layer.
- **AI-Powered Analysis**: Leverages machine learning to evaluate and score user activities on-chain.
- **Decentralized Storage**: Reputation scores are stored on-chain, making them tamper-proof and accessible to authorized platforms.

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Next.js API routes
- **Blockchain**: Ethereum, NEAR
- **Storage**: IPFS
- **AI/ML**: Custom models for scoring user behavior
- **APIs**: Chainlink for data feeds, The Graph for data querying
- **Database**: MongoDB (for metadata storage)

---

## Architecture

ReputeNet’s architecture consists of three main layers:

1. **Frontend**: Next.js app with an interface for users to view scores and for dApps to fetch reputations.
2. **Backend**: API endpoints for AI model scoring, blockchain querying, and on-chain score storage.
3. **Blockchain Layer**: Decentralized layer for storing user scores immutably using smart contracts.

---

## How to Run the Project

1. **Clone the Repository**
   ```bash
   git clone https://github.com/username/ReputeNet.git
   cd ReputeNet
   ```
2. **Install Dependencies**

```bash
npm install
```

3. **Set Up Environment Variables Create a .env.local file in the root directory with the following variables:**

```bash
MONGODB_URI=<your_mongodb_uri>
NEXT_PUBLIC_INFURA_PROJECT_ID=<your_infura_project_id>
NEXT_PUBLIC_CHAINLINK_API_KEY=<your_chainlink_api_key>
```

4. **Run the Development Server**

```bash
npm run dev
```

5. **Access the Application Open your browser and go to http://localhost:3000.**

## Frontend - Pages and Components

-   **Home Page (`pages/index.js`)**: Overview of ReputeNet, explaining the reputation system and inviting users to check their scores.
-   **User Dashboard (`pages/dashboard.js`)**: Displays a logged-in user’s reputation score, behavior insights, and analytics.
-   **Admin Panel (`pages/admin.js`)**: For admins to manage user data and control access.
-   **Score Check (`components/ScoreCheck.js`)**: Allows users to enter wallet addresses and view reputation scores.
-   **Score History (`components/ScoreHistory.js`)**: Shows a history of score changes over time.

----------

## Backend - APIs and Services

1.  **Reputation Scoring API (`/api/score`)**
    
    -   Endpoint: `/api/score`
    -   Method: `POST`
    -   Function: Accepts on-chain activity data, runs it through the AI model, and returns a calculated score.
2.  **Score Storage API (`/api/storeScore`)**
    
    -   Endpoint: `/api/storeScore`
    -   Method: `POST`
    -   Function: Stores the calculated score on-chain and IPFS for permanent storage.
3.  **Score Retrieval API (`/api/getScore`)**
    
    -   Endpoint: `/api/getScore`
    -   Method: `GET`
    -   Function: Fetches the stored score for a given wallet address.
4.  **User Data Query API (`/api/userData`)**
    
    -   Endpoint: `/api/userData`
    -   Method: `GET`
    -   Function: Retrieves user data from MongoDB for profile display and reputation history.

----------

## Accomplishments

-   Developed a cross-chain reputation system compatible with multiple blockchains.
-   Successfully integrated AI and blockchain to produce reliable and verifiable reputation scores.
-   Built a seamless frontend with real-time updates and score visualizations.

----------

## Contributing

Contributions are welcome to help improve ReputeNet. To contribute:

1.  Fork the repository.
2.  Create a feature branch (`git checkout -b feature-branch`).
3.  Commit your changes (`git commit -m "Add feature"`).
4.  Push to the branch (`git push origin feature-branch`).
5.  Open a pull request with a clear description of your changes.

## License
ReputeNet is open-source and available under the MIT License.
