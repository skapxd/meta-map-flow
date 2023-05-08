const { getAuth } = require("./getAuth")
const { getValidation } = require("./getValidation")

async function main() {
  const {access_token} = await getAuth()
  const validation = await getValidation({
    token: access_token, 
    idValidation: "YOUR_ID_VALIDATION"
  })

  const data = JSON.stringify(validation, null, 2)

  console.log(data)
}

main()