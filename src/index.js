import Button from './packages/button'

const components = {
  hzButton: Button,
}

const install = function (Vue, options = {}) {

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });
}

export default install