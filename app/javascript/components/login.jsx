import * as React from "react";
import { Input } from '@/components/input'
import { Field, FieldGroup, Label } from '@/components/fieldset'
import { Button } from '@/components/button'
import Layout from './layout'

const Login = ({ action, emailAddress, otp, backgroundImageUrl }) => {
  return (
    <div>
      <img src={backgroundImageUrl} className="absolute inset-0 object-cover w-full h-full"/>
      <div class="flex items-center justify-center min-h-screen px-6 py-12 lg:px-8">
        <div class="relative h-full w-full rounded-xl bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline">
          <div className="grid h-full w-full justify-items-center overflow-hidden place-items-start justify-items-center p-6 py-8 sm:p-8 lg:p-12">
            <form action={action} className="w-full max-w-sm space-y-8" method="post">
              <h3 class="text-lg/7 font-semibold tracking-[-0.015em] text-zinc-950 sm:text-base/7 dark:text-white">Sign in</h3>
              <FieldGroup>
                <Field>
                  <Label>Email</Label>
                  <Input type="email" name="email_address" defaultValue={emailAddress} />
                </Field>
                {otp && <Field>
                  <Label>One time password</Label>
                  <Input type="text" name="otp_code" placeholder="Enter your OTP Code" maxlength={6}/>
                </Field>}
                <Button type="submit">Getting started</Button>
              </FieldGroup>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
