import { generateSpec } from "@/lib/openapi/api-generator";
import APIReferencePageClient from "./page.client";

export default async function APIReferencePage() {
  const content = await generateSpec();
  return <APIReferencePageClient content={content} />
}