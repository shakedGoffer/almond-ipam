import AboutPage from '@/pages/AboutPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/about')({
  component: AboutPage,
})

