import { type PortableTextBlock } from '@portabletext/react'; 
import { type PortableTextComponentProps } from '@portabletext/react'
import React from 'react'

import { ClientOnly } from '~/components/ClientOnly'
import { Commentable } from '~/components/Commentable'

export function PortableTextBlocksNormal({
  value,
  children,
}: PortableTextComponentProps<PortableTextBlock>) {
  // const isEmpty = !Boolean(
  //   value.children
  //     // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  //     .map((child: any) => ('text' in child ? child.text : ''))
  //     .join('')
  // )
  const isEmpty = !value.children
    .map((child) => child.text as string)
    .join('');  

  return (
    <p
      data-blockid={isEmpty ? undefined : value._key}
      className="group relative pr-3 md:pr-0"
    >
      {!isEmpty && (
        <ClientOnly>
          <Commentable blockId={value._key} />
        </ClientOnly>
      )}
      {children}
    </p>
  )
}

export function PortableTextBlocksH1({
  value,
  children,
}: PortableTextComponentProps<PortableTextBlock>) {
  return (
    <h1
      data-blockid={value._key}
      className="group relative pr-3 after:pointer-events-none after:inline after:select-none after:opacity-0 after:transition-opacity after:will-change-[opacity] after:content-['_#'] hover:after:opacity-10 md:pr-0"
    >
      <ClientOnly>
        <Commentable blockId={value._key} />
      </ClientOnly>
      {children}
    </h1>
  )
}

export function PortableTextBlocksH2({
  value,
  children,
}: PortableTextComponentProps<PortableTextBlock>) {
  return (
    <h2
      id={value._key}
      data-blockid={value._key}
      className="group relative pr-3 after:pointer-events-none after:inline after:select-none after:opacity-0 after:transition-opacity after:will-change-[opacity] after:content-['_#'] hover:after:opacity-100 md:pr-0"
    >
      <a href={`#${value._key}`} className="absolute inset-0" />
      <ClientOnly>
        <Commentable blockId={value._key} />
      </ClientOnly>
      {children}
    </h2>
  )
}

export function PortableTextBlocksH3({
  value,
  children,
}: PortableTextComponentProps<PortableTextBlock>) {
  return (
    <h3
      id={value._key}
      data-blockid={value._key}
      className="group relative pr-3 after:pointer-events-none after:inline after:select-none after:opacity-0 after:transition-opacity after:will-change-[opacity] after:content-['_#'] hover:after:opacity-10 md:pr-0"
    >
      <a href={`#${value._key}`} className="absolute inset-0" />
      <ClientOnly>
        <Commentable blockId={value._key} />
      </ClientOnly>
      {children}
    </h3>
  )
}

export function PortableTextBlocksH4({
  value,
  children,
}: PortableTextComponentProps<PortableTextBlock>) {
  return (
    <h4
      id={value._key}
      data-blockid={value._key}
      className="group relative pr-3 after:pointer-events-none after:inline after:select-none after:opacity-0 after:transition-opacity after:will-change-[opacity] after:content-['_#'] hover:after:opacity-10 md:pr-0"
    >
      <a href={`#${value._key}`} className="absolute inset-0" />
      <ClientOnly>
        <Commentable blockId={value._key} />
      </ClientOnly>
      {children}
    </h4>
  )
}

export function PortableTextBlocksBlockquote({
  value,
  children,
}: PortableTextComponentProps<PortableTextBlock>) {
  return (
    <blockquote
      data-blockid={value._key}
      className="group relative pr-3 md:pr-0"
    >
      <ClientOnly>
        <Commentable blockId={value._key} />
      </ClientOnly>
      {children}
    </blockquote>
  )
}

export function PortableTextBlocksListItem({
  value,
  children,
}: PortableTextComponentProps<PortableTextBlock>) {
  return (
    <li data-blockid={value._key} className="group relative pr-3 md:pr-0">
      <ClientOnly>
        <Commentable className="mr-5" blockId={value._key} />
      </ClientOnly>
      {children}
    </li>
  )
}
