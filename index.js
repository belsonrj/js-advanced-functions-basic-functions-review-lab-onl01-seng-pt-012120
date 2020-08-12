function saturdayFun(activity= "roller-skate") {
  return(`This Saturday, I want to ${activity}!`)
}

function mondayWork(activity="go to the office") {
  return(`This Monday, I will ${activity}.`)
}

function wrapAdjective(first="*") {
  return function(second="special") {
    return `You are ${second} ${first}.`
  }
  let encouragingPromptFunction = wrapAdjective("!!!")
}
