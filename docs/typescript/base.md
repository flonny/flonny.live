## 基础类型

typescirpt 类型的声明

类型注解，对变量进行类型声明

(变量/函数):type

### number

所有数字都是浮点数，并支持二进制、8进制、16进制

```typescript
let num:number = 1 // 10
let hex:number = 0xf00d // 16
let binary:number = 0b0101 // 2
let octal:number = 0o744 // 8
```

### string

```typescript
let str:string = 'abcd'
```

### boolean

```typescript
let boo:boolean = true
```

### array

type script 的array 需要指定array 元素的类型

```typescript
let arr:number[]= [1,2,3,4,5] // 只能是number 的数组
let numberArr:Array<number> = [1,3,4,4,5,6] // 第二种声明方法
let arr:any[] = [1,'str','boo'] //any 为任意类型
```

