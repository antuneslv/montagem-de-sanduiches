export const nameValidator = (value) => {
  const errors = []

  if(!value){
    errors.push('Insira um nome!')
  } else if (/[^A-Za-z ãáâéêíõóôúüçñ]/.test(value)) {
    errors.push('Nome inválido.')
  }

  return errors
}

export const cardNumberValidator = value => {
  const errors = []

  if (!value) {
    errors.push('Insira o número do cartão!')
  } else if (/[^\d]/.test(value)) {
    errors.push('Somente números.')
  } else if (!/^[\d]{12}$/.test(value)) {
    errors.push('Número do cartão inválido.')
  }

  return errors
}

export const expirationDateValidator = value => {
  const errors = []
  let dateNow = new Date()
  let dayValue = value.substr(0, 2)
  let monthValue = value.substr(2, 2)
  let yearValue = value.substr(4, 4)
  let dateValue = `${monthValue}/${dayValue}/${yearValue}`
  let newDateValue = new Date(dateValue)

  if (!value) {
    errors.push('Insira a data de validade!')
  } else if (/[^\d]/.test(value)) {
    errors.push('Somente números.')
  } else if (!/^(0[1-9]|1\d|2\d|3[01])(0[1-9]|1[0-2])([\d]{4})$/.test(value)) {
    errors.push('Data Inválida. Digite ddmmaaaa')
  } else if (newDateValue < dateNow) {
    errors.push('A data de validade é anterior a data atual.')
  }

  return errors
}

export const cvvValidator = value => {
  const errors = []

  if (!value) {
    errors.push('Insira o número do cvv!')
  } else if (/[^\d]/.test(value)) {
    errors.push('Somente números.')
  } else if (!/^[\d]{3}$/.test(value)) {
    errors.push('Número do cvv inválido.')
  }

  return errors
}

export const cpfValidator = value => {
  const errors = []

  if (!value) {
    errors.push('Insira o número do cpf!')
  } else if (/[^\d]/.test(value)) {
    errors.push('Somente números.')
  } else if (!/^[\d]{11}$/.test(value)) {
    errors.push('Número do cpf inválido.')
  }

  return errors
}
