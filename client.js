'use strict'

$(document).ready( () => {
  console.log('Client side be like:')
  wow()
})


class Demo {
  constructor(param1, param2) {
    this.p1 = param1 || "banana"
    this.p2 = param2 || "cool stuff brah"
  }

  get outputParams() {
    console.log(`${this.p1} AND ${this.p2}`)
  }
  outputStuff() {
    this.outputParams
  }
}

const shit = new Demo
 shit.outputParams
 shit.outputStuff()

const wow = () => {
  return console.log('wow')
}

$('#welcome').on('click', function (e) {
  console.log(this)
  console.log(e.toElement.textContent)
})
