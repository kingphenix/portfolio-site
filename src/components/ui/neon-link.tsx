import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '@/components/ui/neon-button'
import { cn } from '@/lib/utils'
import { VariantProps } from 'class-variance-authority'

type NeonLinkProps = Omit<React.ComponentProps<typeof Link>, 'href'> & {
  href: string | URL
  variant?: VariantProps<typeof buttonVariants>["variant"]
  size?: VariantProps<typeof buttonVariants>["size"]
  neon?: boolean
}

export function NeonLink({ href, children, className, variant = 'ghost', size = 'sm', neon = true, ...props }: NeonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size }), 'relative group inline-flex items-center justify-center', className)}
      {...props}
    >
      <span className={cn("absolute h-px opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out inset-x-0 inset-y-0 bg-gradient-to-r w-3/4 mx-auto from-transparent dark:via-blue-500 via-blue-600 to-transparent hidden", neon && "block")} />
      <span className="relative z-10">{children}</span>
      <span className={cn("absolute group-hover:opacity-30 transition-all duration-500 ease-in-out inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent dark:via-blue-500 via-blue-600 to-transparent hidden", neon && "block")} />
    </Link>
  )
}


