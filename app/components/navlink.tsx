'use client';

import { Typography, Link as MuiLink } from "@mui/material";
import Image from "next/image";
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

export function NavLink({ linkPath, linkName }: { linkPath: string, linkName: string }) {
  const clientPath = usePathname();

  console.log(clientPath)
  console.log(linkPath)

  return (
    <Typography component='span' sx={{
      margin: 'auto',
      padding: '12px',
      textAlign: 'center',
    }}>
      <MuiLink
        component={NextLink}
        href={linkPath}
        sx={{
          display: 'block',
          transform: 'skew(-20deg)',
          fontFamily: 'inherit',
          fontSize: '1.6rem',
          color: 'white',
          fontWeight: '400',
          textDecoration: (linkPath !== '/' && clientPath.includes(linkPath.toLowerCase())) ? 'underline' : 'none',
          overflow: 'hidden',
          '&:hover': {
            color: '#ffcb18',
          },
        }}
      >
        {linkName === 'owl' ? (
          <Image
            src="/assets/icons/owl.svg"
            alt="owl icon"
            height={75}
            width={75}
          />
        ) : (<>{linkName}</>)
        }
      </MuiLink>
    </Typography>
  )

}