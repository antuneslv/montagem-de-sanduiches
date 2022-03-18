export const nameValidator = (value) => {
  const errors = []

  if(!value){
    errors.push('Insira um nome!')
  }

  if (/[^A-Za-z ãáéóô]/.test(value)) {
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
    errors.push('Número inválido.')
  }

  return errors
}

export const expirationDateValidator = value => {
  const errors = []

  return errors
}

export const cvvValidator = value => {
  const errors = []

  return errors
}

export const cpfValidator = value => {
  const errors = []

  return errors
}