import SubnetsPage from '@/pages/SubnetsPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/subnets/')({
  component: SubnetsPage,
})

