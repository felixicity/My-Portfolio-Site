// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    
    res.status(200).json({
      "name": "a number can also be a string. Shey you dey whine me ni",
      "message": "black mamba"
    })
}
