import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({req});
  console.log("session in API :", session);
  if (!session) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  return res.status(200).json({ message: "Authorized", session });
}
