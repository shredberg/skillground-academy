# frozen_string_literal: true

module ReactHelper
  def react_component(component_name, props = {})
    tag.div(data: {
      controller: "react",
      react_component_value: component_name,
      react_props_value: props,
      turbo: false
    })
  end
end
