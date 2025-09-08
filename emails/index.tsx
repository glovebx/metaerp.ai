import { Button } from '@react-email/button'
import { Html } from '@react-email/html'
import * as React from 'react'

export default function Email() {
  return (
    <Html>
      <Button
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 12,
            paddingBottom: 12,
            background: '#000', 
            color: '#fff'
          }}    
        href="https://example.com"
      >
        Click me
      </Button>
    </Html>
  )
}
