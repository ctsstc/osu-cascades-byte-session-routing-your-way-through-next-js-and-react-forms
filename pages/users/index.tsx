import { Field, Form, Formik } from 'formik';
import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';

import Navigation from '../../components/navigation';

import type { NextPage } from 'next'
interface User {
  firstName: string
  lastName: string
  email: string
  age: number
}

const Home: NextPage = () => {
  const [users, setUsers] = useState([] as User[])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1>Users</h1>

        <pre>{JSON.stringify(users, null, 2)}</pre>

        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            age: 0,
          }}
          onSubmit={(values) => {
            console.log(values)
            setUsers([...users, values])
          }}
        >
          <Form className="flex flex-col gap-4">
            <Field
              name="firstName"
              placeholder="First Name"
              className="border"
            />
            <Field name="lastName" placeholder="Last Name" className="border" />
            <Field
              name="email"
              placeholder="Email"
              type="email"
              className="border"
            />
            <Field
              name="age"
              placeholder="Age"
              type="number"
              className="border"
            />
            <button type="submit" className="border bg-blue-500 text-white">
              Submit
            </button>
          </Form>
        </Formik>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
