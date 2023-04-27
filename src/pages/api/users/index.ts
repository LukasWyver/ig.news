import { NextApiRequest, NextApiResponse } from 'next';

// JWT (Storage)
// Next Auth (Social)
// Cognito, Auth0

export default function handler (request: NextApiRequest, response: NextApiResponse) {
  const users = [
    { id: 1, name: 'Diego' },
    { id: 2, name: 'Lucas' },
    { id: 3, name: 'Tiago' },
  ];

  return response.json(users);
};

// Serverless
