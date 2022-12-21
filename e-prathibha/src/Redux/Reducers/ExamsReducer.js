const initialState =  {
    freeExam : [],
    premiumExam : [], 
    examQuestions: [],
    submitExam: {},
    finishExam:{},
    packageExam:{},
    payment:{}
}

export const ExamsReducer = (state= initialState, action) => {
  switch (action.type) {
    case "FREE_EXAM":
        return {...state, freeExam: action.payload}
    
    case "PREMIUM_EXAM":
        return {...state, premiumExam: action.payload}
    
    case "START_EXAM":
        return {...state, examQuestions: action.payload}
    
    case "EXAM_SUBMIT":
        return{...state, submitExam: action.payload}

    case "EXAM_FINISH":
        return {...state, finishExam:action.payload}
    
    case "PACKAGE_EXAM":
        return{...state, packageExam: action.payload}

    case "PAYMENT_GATEWAY":
        return{...state, payment:action.payload}
    
    case "REMOVE_QUESTION_PAPER":
        return {}
    default:
        return state
  }
}
