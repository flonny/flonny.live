# 数据结构

## 栈

栈是一种遵循后进先出(LIFO)原则的有序集合。新增后删除的元素都保存在一段，称为栈顶，另一端为栈底。在栈里，新元素靠近栈顶，旧元素靠近栈底

一个简单的栈

	- 添加元素到栈顶
	- 从栈顶删除元素
	- 得到栈的元素个数
	- 清空栈
	- 得到栈顶的元素，不改变栈
	- 判断栈是否为空

```javascript
class Stack {
    items:any[]
    constructor() {
        this.items = []
    }
    push(item:any) {
        this.items.push(item)
    }
    pop() {
        this.items.pop
    }
    size() {
        return this.items.length
    }
    isEmpty() {
        return this.items.length === 0
    }
    peek() {
        return this.items[this.items.length-1]
    }
    clear() {
        this.items = []
    }
}
const stack = new Stack()
```



