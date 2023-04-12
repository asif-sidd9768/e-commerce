export const checkout = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        status: 200,
        data: "done"
      })
    }, 1500)
  })
}