const { getAuth } = require("./getAuth")
const { getValidation } = require("./getValidation")

async function main() {
  const {access_token} = await getAuth()
  const validation = await getValidation({
    token: access_token, 
    idValidation: "644d982022b492001bcb9ff8"
  })

  const data = JSON.stringify(validation, null, 2)

  console.log(data)
}

main()