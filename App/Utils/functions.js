export const simulateApi = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 2000)
  })
}
