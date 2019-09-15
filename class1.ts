var content = `aa
bb
ccc`;
// 多行字符串

var myName = 'ni';
var getName = function () {
  return 'ni hao';
}
console.log(`hi ${myName}`);
console.log(`hi ${getName()}`);
// 字符串模版

function test(template, name, age){
  console.log(template);
  console.log(name);
  console.log(age);
}

var theName = 'a';
var getAge = function () {
  return 22;
}

test `hello my name is ${theName}, I'm ${getAge()}`;
// 自动拆分字符串


var name1: string = "name one";
name1 = '123';

var alias: any = 'haha';
// any 任何类型
// number
// boolean
// void function没有返回值

class Person {
  name: string;
  age: number;
}
var zhangsan: Person = new Person();
zhangsan.name = 'zhangsan';
zhangsan.age = 10;

// 自定义类型

var name3: string = 'wang wu';

function test22(a: string, b:string, c: string){
  console.log(a);
  console.log(b);
  console.log(c);
}
test22('123','456','789');
// 默认参数

function test33(a: string, b?:string, c: string = 'doggie'){
  console.log(a);
  console.log(b);
  console.log(c);
}
test33('123');
// 可选参数 b 为可选参数，c 有默认参数 

/************************/
// 字符串：
// 1. 多行字符串 ``
// 2. 字符串模版 ``
// 3. 自动拆分字符串

// 参数类型：
//     在参数名称后面使用冒号来指定参数的类型 (string; number; boolean; any; void) + 自定义类型

// 默认参数：
//     在参数声明后面用等号来指定参数的默认值

// 可选参数：
//     在方法的参数声明后面用问号来表明此参数为可选参数

