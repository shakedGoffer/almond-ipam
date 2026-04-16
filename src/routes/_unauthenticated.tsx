import BaseLayout from '@/layouts/BaseLayout'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_unauthenticated')({
  component: () => {
    return <BaseLayout><Outlet/></BaseLayout>;
  },
})

