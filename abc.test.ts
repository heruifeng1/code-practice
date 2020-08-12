function sum(a:number,b:number){
  return a+b
}
class Dollar {
  amount:number
  constructor(num:number) {
    this.amount = num
  }
  times(num:number){
    this.amount = this.amount * num
  }
}
function testMultiplication(){
  const five = new Dollar(5);
  five.times(2);
  expect(five.amount).toEqual(10);
}

test('sadf',testMultiplication)

