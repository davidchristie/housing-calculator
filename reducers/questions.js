const initialState = [
  {
    answer: null,
    description: 'The first question.',
    id: 1,
    possibleAnswers: [
      {
        text: 'Answer A',
        value: 'A'
      },
      {
        text: 'Answer B',
        value: 'B'
      },
      {
        text: 'Answer C',
        value: 'C'
      },
      {
        text: 'Answer D',
        value: 'D'
      }
    ],
    title: 'Question 1'
  },
  {
    answer: null,
    description: 'The second question.',
    id: 2,
    possibleAnswers: [
      {
        text: 'Answer A',
        value: 'A'
      },
      {
        text: 'Answer B',
        value: 'B'
      },
      {
        text: 'Answer C',
        value: 'C'
      },
      {
        text: 'Answer D',
        value: 'D'
      }
    ],
    title: 'Question 2'
  },
  {
    answer: null,
    description: 'The third question.',
    id: 3,
    possibleAnswers: [
      {
        text: 'Answer A',
        value: 'A'
      },
      {
        text: 'Answer B',
        value: 'B'
      },
      {
        text: 'Answer C',
        value: 'C'
      },
      {
        text: 'Answer D',
        value: 'D'
      }
    ],
    title: 'Question 3'
  }
]

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case 'SET_ANSWER':
      return state.map(question => {
        if (question.id === payload.questionId) {
          return Object.assign(
            {},
            question,
            {answer: payload.answer}
          )
        }
        return question
      })

    default:
      return state
  }
}
