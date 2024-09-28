import { Controller } from "@hotwired/stimulus"
import React from 'react'
import ReactDOM from 'react-dom/client'

import Hello from "../components/Hello.jsx"
const modules = { Hello }

export default class extends Controller {
  static values = {
    component: String,
    props: Object
  }

  connect() {
    console.log('ReactController connected')
    console.log(this.propsValue)
    const module = modules[this.componentValue]
    if (module) {
      this.root = ReactDOM.createRoot(this.element)
      this.root.render(
        React.createElement(module, this.propsValue)
      )
    } else {
      console.error(`Could not find module ${this.componentValue}`)
    }
  }

  disconnect() {
    this.root.unmount()
  }
}
