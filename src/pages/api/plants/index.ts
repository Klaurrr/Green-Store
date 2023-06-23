import type { NextApiRequest, NextApiResponse } from "next";

import { plants } from "@/../db.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
      res.status(200).json(plants);
}
