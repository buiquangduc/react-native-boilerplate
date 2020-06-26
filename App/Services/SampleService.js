import { simulateApi } from 'App/Utils/functions'

const getSampleData = () => {
  return simulateApi([
    'Hello World', 'Hello World 1', 'Hello World 2'
  ])
}

export default {
  getSampleData
}
