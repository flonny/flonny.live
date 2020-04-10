# 面向对象

## 起源

从 [*wiki OOP*](https://en.wikipedia.org/wiki/Object-oriented_programming#cite_ref-11) 开始

子 *OOP* 的历史中发现，对象的最初概念来自与 *LISP* 中的原子 。

> 用各种方法翻译的，可能不是很准确，[*原文在这*](https://web.archive.org/web/20100717111134/http://history.siam.org/sup/Fox_1960_LISP.pdf)

> 当应用运算符评估 `atomic` 函数时，即由 `atomic symbol` 表示，它将在 `atomic symbol` 的关联列表中搜索 `SUBR`  或  `EXPR` 。如果找到任何一个，则分别指向一个子例程或一个`S-expression`的函数描述, 用于评估x的`atomic`函数（参数列表）。 如果在该函数的关联列表中未找到`SUBR` 或 `EXPR`，则在 `p-list` 中搜索该函数的，该符号与该符号配对的表达式用于评估原子函数

> in the simplest case the **p-list** is null  and is whitten ()
>
> 最简单的情况下 p-list 是 null 或者是 空

根据 *Alan Kay* 给 *Stefan Ram* 的邮件中得知，在 *Alan Kay* 创造面向对象编程的过程中收到了 *LISP* 给他的灵感。

> 邮件在这 [*Alan Kay Emial*](http://userpage.fu-berlin.de/~ram/pub/pub_jf47ht81Ht/doc_kay_oop_en)
>
> 里面有关于面向对象编程的最开始的概念

> OOP to me means only messaging, local retention and protection and  
>
> hiding of state-process, and extreme late-binding of all things. It  
>
> can be done in Smalltalk and in LISP.

> Alan Kay 所认为的 OOP 是  只是消息传送、本地保存和本地保护(私有) 以及 隐藏状态过程，以及所有事物的极端后期绑定。

## 追溯

然后我突然想到 *Alan Kay* 应该还活着，他会不会有一个 [*quora.com*](https://www.quora.com/profile/Alan-Kay-11) 的账号

搜索了一下，确实有，而且异常活跃，并且多才多艺

他的答案列表中从各种方面解释了 *OOP*， 并且在他的回答中找到了一篇关于 *smalltalk* 的发展文章：

文章在这 [*EarlyHistoryOfSmalltalk*](http://worrydream.com/EarlyHistoryOfSmalltalk/#p4)

在文章中有关于 *smalltalk*  语言 *OOP* 的设计

> 1. Everything is an object
> 2. Objects communicate by sending and receiving *messages* (in terms of objects)
> 3. Objects have their *own memory* (in terms of objects)
> 4. Every object is an instance of a *class* (which must be an object)
> 5. The class holds the shared *behavior* for its instances (in the form of objects in a program list)
> 6. To eval a program list, control is passed to the first object and the remainder is treated as its message

> 1. 所有东西都是对象，对象说——一切皆我，我即世界
> 2. 对象通过发送和接收“消息”（就对象而言）进行通信
> 3. 对象拥有他们自己的内存（就对象而言）
> 4. 每一个对象都是class实例（必须是一个对象）
> 5. 类为其实例保留共享 *behavior* （以程序列表中的对象的形式）
> 6. 要引用程序列表，控件将传递给第一个对象，其余对象将被视为其消息

在 *[Alan Kay Emial](http://userpage.fu-berlin.de/~ram/pub/pub_jf47ht81Ht/doc_kay_oop_en)* 中下方有一系列链接，其中 在 *other page of this site* 的 *[objektorientierte Programmierung](http://userpage.fu-berlin.de/~ram/pub/pub_jf47ht81Ht/begriff_objektorientierte_programmierung_de)* 文章中，列出了ISO标准中的OOP(ps: ISO 也搜过，但是需要付费看，所以放弃了). 这是一篇更好的追溯文

> ### Bedeutung nach ISO
>
> Auch von der Internationalen Organisation für Normierung (ISO) gibt es eine Definition des Begriffs, die schon deutlich von der zuvor genannten abweicht:
>
> **object-oriented**
>
> Pertaining to a technique or a programming language that supports *objects*, *classes*, and *inheritance*.
>
> ISO/IEC 2382-15 (1998)
>
> (**objektorientiert**Eine Technik oder Programmiersprache betreffend, die *Objekte*, *Klassen* und *Vererbung* unterstützt.)
>
> Demnach ist **objektorientierte Programmierung** also Programmierung mit *Objekten*, *Klassen* und *Vererbung*. Eine **objektorientierte Programmiersprache** ist eine Programmiersprache, die Objekte, Klassen und Vererbung unterstützt. Ein Objekt ist nach der ISO eine Menge von Operationen und Daten. Kapselung, Nachrichten oder späte Bindung werden von der ISO also nicht verlangt. Allerdings gibt es eine Anmerkung in ISO/IEC 2382-15 (1998), die erwähnt, daß „einige Autoritäten“ *Informationsschutz*, *Kapselung*, *Datenabstraktion*, *Nachrichtenvermittlung*, *Polymorphie*, *dynamische Bindung* oder *Vererbung* verlangen.

> 国际标准
>
> 面向对象（**object-oriented**）
>
> 与支持*对象*，*类*和*继承*的技术或编程语言有关。
>
> ISO/IEC 2382-15 (1998)
>
> （面向对象的支持对象、类和继承的技术或编程语言)
>
> 因此，面向对象的编程就是使用*对象*，*类*和*继承*进行编程。 **面向对象编程语言**是支持对象，类和继承的编程语言。 根据ISO，对象是一组操作和数据。 因此，ISO不需要封装，消息或后期绑定。 但是，ISO / IEC 2382-15（1998）中有一条注释提到“某些权威” *信息保护*，*封装*，*数据抽象*，*消息传递*，*多态*，*动态绑定*或 *请求继承*。

## 戛然而止

> 看了各种资料，怪自己才疏学浅，看完各种答案后对 *OOP* 的理解并 **没有** 质的飞跃

# 引用

[wiki OPP]: https://en.wikipedia.org/wiki/Object-oriented_programming#cite_ref-11
[LISP 实现]: https://web.archive.org/web/20100717111134/http://history.siam.org/sup/Fox_1960_LISP.pdf
[Dr. Alan Kay on the Meaning of “Object-Oriented Programming”]: http://www.purl.org/stefan_ram/pub/doc_kay_oop_en
[Alan Kay's quora account]: https://www.quora.com/profile/Alan-Kay-11
[The Early History Of Smalltalk]: http://worrydream.com/EarlyHistoryOfSmalltalk/#p4
[Was ist objektorientierte Programmierung?]: http://userpage.fu-berlin.de/~ram/pub/pub_jf47ht81Ht/begriff_objektorientierte_programmierung_de