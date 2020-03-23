# vue-next
## reactive.ts
```javascript
/**引入两个方法 isObject 判断变量是否为对象， toRawType 得到变量类型*/
import { isObject, toRawType } from '@vue/shared'
import {
  mutableHandlers,
  readonlyHandlers,
  shallowReadonlyHandlers,
  shallowReactiveHandlers
} from './baseHandlers'
import {
  mutableCollectionHandlers,
  readonlyCollectionHandlers
} from './collectionHandlers'
import { UnwrapRef, Ref, isRef } from './ref'
import { makeMap } from '@vue/shared'

// WeakMaps that store {raw <-> observed} pairs.
const rawToReactive = new WeakMap<any, any>() // 用原始对象做key proxy 对象作为值
const reactiveToRaw = new WeakMap<any, any>() // proxy 对象做为键 原始对象作为值 判断isReactive
const rawToReadonly = new WeakMap<any, any>() // 用 原始对象做key proxy 为值 
const readonlyToRaw = new WeakMap<any, any>() // 用 proxy 为key 原始对象为值 判断 isReadonly

// WeakSets for values that are marked readonly or non-reactive during
// observable creation.
const readonlyValues = new WeakSet<any>() // 标记为 readonly 或无效的值 值的集合
const nonReactiveValues = new WeakSet<any>() // 声明 没有 reactive 的集合

const collectionTypes = new Set<Function>([Set, Map, WeakMap, WeakSet]) // 收集的类型
const isObservableType = /*#__PURE__*/ makeMap(
  'Object,Array,Map,Set,WeakMap,WeakSet'
) // 可观测变量类型的集合 共六种

/**
 * 判断变量是否可监测
 * 变量不能是vue 根对象
 * 不能是虚拟dom
 * 是可观测类型
 * 已经 转换为 proxy对象
 * @param value 
 */
const canObserve = (value: any): boolean => {
  return (
    !value._isVue &&
    !value._isVNode &&
    isObservableType(toRawType(value)) &&
    !nonReactiveValues.has(value)
  )
}

// only unwrap nested ref
type UnwrapNestedRefs<T> = T extends Ref ? T : UnwrapRef<T> // 声明类型

/**
 * 声明重合
 */
export function reactive<T extends object>(target: T): UnwrapNestedRefs<T> 
export function reactive(target: object) {
  // if trying to observe a readonly proxy, return the readonly version.
  // 如果 只读 proxy 的对象包含对象 那么 就返回这个对象
  if (readonlyToRaw.has(target)) {
    return target
  }
  // target is explicitly marked as readonly by user
// 如果proxy对象被用户标记为只读 返回 readonly(target)
  if (readonlyValues.has(target)) {
    return readonly(target)
  }
  // 如果是ref 对象 返回 target
  if (isRef(target)) {
    return target
  }
  // 返回target 的 proxy 对象
  return createReactiveObject(
    target,
    rawToReactive,
    reactiveToRaw,
    mutableHandlers,
    mutableCollectionHandlers
  )
}

export function readonly<T extends object>(
  target: T
): Readonly<UnwrapNestedRefs<T>> {
  // 值是可变的可观察到的，检索其原始值并返回
  // 只读版本
  // value is a mutable observable, retrieve its original and return
  // a readonly version.
  // 如果 proxy 对象可读写 包含变量 将target 赋值为 原始对象
  if (reactiveToRaw.has(target)) {
    target = reactiveToRaw.get(target)
  }
  return createReactiveObject(
    target,
    rawToReadonly,
    readonlyToRaw,
    readonlyHandlers,
    readonlyCollectionHandlers
  )
}

// Return a reactive-copy of the original object, where only the root level
// properties are readonly, and does NOT unwrap refs nor recursively convert
// returned properties.
// This is used for creating the props proxy object for stateful components.
export function shallowReadonly<T extends object>(
  target: T
): Readonly<{ [K in keyof T]: UnwrapNestedRefs<T[K]> }> {
  return createReactiveObject(
    target,
    rawToReadonly,
    readonlyToRaw,
    shallowReadonlyHandlers,
    readonlyCollectionHandlers
  )
}

// Return a reactive-copy of the original object, where only the root level
// properties are reactive, and does NOT unwrap refs nor recursively convert
// returned properties.
export function shallowReactive<T extends object>(target: T): T {
  return createReactiveObject(
    target,
    rawToReactive,
    reactiveToRaw,
    shallowReactiveHandlers,
    mutableCollectionHandlers
  )
}

function createReactiveObject(
  target: unknown,
  toProxy: WeakMap<any, any>,
  toRaw: WeakMap<any, any>,
  baseHandlers: ProxyHandler<any>,
  collectionHandlers: ProxyHandler<any>
) {
  // 如果target 不是 obj 类型 警告
  if (!isObject(target)) {
    if (__DEV__) {
      console.warn(`value cannot be made reactive: ${String(target)}`)
    }
    return target
  }
  // target already has corresponding Proxy
  // 如果  target 已经被代理 返回target的代理对象 toProxy(rawToReactive)
  let observed = toProxy.get(target)
  if (observed !== void 0) {
    return observed
  }
  // toRaw(reactiveToRaw) target 已经是代理对象 直接返回
  // target is already a Proxy
  if (toRaw.has(target)) {
    return target
  }
  // only a whitelist of value types can be observed.
  // 只有在值类型白名单中的变量才能内监测，如果不在白名单，直接返回
  if (!canObserve(target)) {
    return target
  }
  const handlers = collectionTypes.has(target.constructor) //判断类型集合又没有target的构造函数
    ? collectionHandlers
    : baseHandlers
  observed = new Proxy(target, handlers)
  toProxy.set(target, observed)
  toRaw.set(observed, target)
  return observed
}

export function isReactive(value: unknown): boolean {
  return reactiveToRaw.has(value) || readonlyToRaw.has(value)
}

export function isReadonly(value: unknown): boolean {
  return readonlyToRaw.has(value)
}

export function toRaw<T>(observed: T): T {
  return reactiveToRaw.get(observed) || readonlyToRaw.get(observed) || observed
}

export function markReadonly<T>(value: T): T {
  readonlyValues.add(value)
  return value
}

export function markNonReactive<T>(value: T): T {
  nonReactiveValues.add(value)
  return value
}

```