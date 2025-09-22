import { serve } from "inngest/vercel"; // or "inngest/vercel" if not Next.js
import { inngest, functions } from "../inngest/index.js"; 

export default serve({
  client: inngest,
  functions,
});