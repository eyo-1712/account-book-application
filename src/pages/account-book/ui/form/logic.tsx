import React from 'react'
import { IForm } from './type'

const init: IForm = {
  type: 'expenditure',
  money: '',
  category: '',
  datetime: '',
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer = (state: IForm, action: { type: string; value?: any }) => {
  switch (action.type) {
    case 'type':
      return { ...state, type: action.value }
    default:
      return init
  }
}

export const useLogic = () => {
  const [state, dispatch] = React.useReducer(reducer, init)

  return {
    value: state,
    handler: {
      type: (_: string) => () => dispatch({ type: 'type', value: _ }),
    },
  }
}
