import { NextApiRequest, NextApiResponse } from 'next';

export default function handler (request: NextApiRequest, response: NextApiResponse) {
 const id = request.query;

  const user = [
    { id: 1, name: 'Diego' },
  ];

  return response.json(user);
};
