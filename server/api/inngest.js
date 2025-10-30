import { serve } from "inngest/next";
import { inngest, functions } from "../inngest/inde.js";

export default serve(inngest, functions);