"use client";
import { ApiReferenceReact } from '@scalar/api-reference-react'

export default function APIReferencePageClient({ content }: { content: Record<string, any> }) {
  return <ApiReferenceReact configuration={{ spec: { content } }}/>
}