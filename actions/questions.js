import Router from 'next/router'

export const setAnswer = (questionId, answer) => {
  return (dispatch, getState) => {
    const nextUnanswered = getState().questions.find(question => {
      return question.id !== questionId && question.answer === null
    })
    if (nextUnanswered) {
      Router.push(`/question?id=${nextUnanswered.id}`)
    } else {
      Router.push('/report')
    }
    dispatch({
      payload: {
        answer,
        questionId
      },
      type: 'SET_ANSWER'
    })
  }
}
