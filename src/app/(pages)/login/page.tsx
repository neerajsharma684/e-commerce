import React from 'react'
import { Metadata } from 'next'

import { RenderParams } from '../../_components/RenderParams'
import { getMeUser } from '../../_utilities/getMeUser'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import LoginForm from './LoginForm'
import Image from 'next/image'

import classes from './index.module.scss'
import Link from 'next/link'

export default async function Login() {
  await getMeUser({
    validUserRedirect: `/account?warning=${encodeURIComponent('You are already logged in.')}`,
  })

  return (
    <section className={classes.login}>
      <div className={classes.heroImg}>
        <Link href='/'>
          <Image 
          src='/logo-black.svg' alt='Logo' 
          width={250} height={23} 
          className={classes.logo}/>
        </Link>
      </div>
      <div className={classes.formWrapper}>
        <div className={classes.formContainer}>
          <RenderParams className={classes.params}/>
          <div className={classes.formTitle}>
            <h3>Welcome</h3>
            <Image
            src='/assets/icons/hand.png' alt='Hand'
            width={30} height={30}/>
            <p>Please Login Here</p>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login or create an account to get started.',
  openGraph: mergeOpenGraph({
    title: 'Login',
    url: '/login',
  }),
}
