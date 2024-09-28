import * as React from "react";
import { Input } from '@/components/input'
import { Field, FieldGroup, Label } from '@/components/fieldset'
import { Button } from '@/components/button'
import Layout from './layout'

const Settings = () => {
  return (
    <Layout>
      <form>
        <FieldGroup>
          <Field>
            <Label>Name</Label>
            <Input name="name" />
          </Field>
          <Field>
            <Label>Email</Label>
            <Input type="email" name="email" />
          </Field>
          <Button type="submit">Save changes</Button>
        </FieldGroup>
      </form>
    </Layout>
  )
}

export default Settings;
