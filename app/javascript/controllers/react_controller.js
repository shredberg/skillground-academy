import { Controller } from "@hotwired/stimulus"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "../components/app"
import Login from "../components/login"

const modules = { App, Login }

export default class extends Controller {
  static values = {
    component: String,
    props: Object
  }

  connect() {
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
