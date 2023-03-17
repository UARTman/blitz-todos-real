import Head from "next/head"
import React, { FC } from "react"
import { BlitzLayout } from "@blitzjs/next"

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "blitz-todos-real"}</title>
        <link rel="icon" href="/favicon.ico" />
        <style>
          {`.todo-list {
  display: flex;
  flex-direction: column;
}

.task-line {
  display: flex;
  max-width: 834px;
  margin: auto;
}

.task-edit {
  flex-grow: 1;
  min-width: min-content;
}`}
        </style>
      </Head>

      {children}
    </>
  )
}

export default Layout
