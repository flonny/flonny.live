# 笔记
## 2020/3/29
self fulfilling prophecy in unintended consequences  --- Robert K. Merton

社会行动意外结果中的自证预言

由于人们很相信一个谣言作出的行为导致这个谣言成真

## 2020/3/30

数据中台

数据中台用作与 数据复用的问题

大数据平台 将数据加工处理

数据是否真正可以依靠谁中台的能力

数据中台的建设需要丰富经验,需要了解数据痛点.

数据中台项目失败:没有目标,落地场景,数据质量没法保证

数据从零到一的过程

解决数据建设的痛点和难点,让数据更好的支持业务



数据中台是一个基于大数据平台,给各种繁复的业务线提供统一的数据,实现平台之间的数据共享.

数据的统一,可以有效的集中资源保障数据的准确性,可维护性,减少数据冗余,控制企业成本

数据平台面向数据研发,提供各种数据的处理工具.

数据中台与业务的结合更加紧密

## 2020/04/08 oop

### 起源

要明白什么事 **面向对象编程 **首先要首先去探寻几个概念

- 对象
- 面向对象

对象这个概念最早出现在19世纪50年代末60年代初的麻省理工, 约翰·麦卡锡(John McCarthy) 在MIT的人工智能小组的环境下发明了LISP, 其中“对象”就可以指具有属性（属性）的已识别项目([LISP](https://en.wikipedia.org/wiki/Lisp_(programming_language)) atoms)



kay said :

 http://userpage.fu-berlin.de/~ram/pub/pub_jf47ht81Ht/doc_kay_oop_en

```
OOP to me means only messaging, local retention and protection and 

hiding of state-process, and extreme late-binding of all things.
```









1958 年 john McCarthy 创造了编程语言 lisp ,对象的概念首次被提出, 而在那时是指 lisp 的 atoms



[In object-oriented programming, why is it bad practice to make data members public when the get() & set() public members modify it anyway?](https://www.quora.com/In-object-oriented-programming-why-is-it-bad-practice-to-make-data-members-public-when-the-get-set-public-members-modify-it-anyway)

If you use setters, you are not really working with objects, but glorified data structures. This use of objects as “Abstract Data Types” is not in the spirit of Object Oriented Programming and Design. This misuse is one of the biggest misconceptions about what OOP is all about — and it also removes much of the power of organizing modules whose contents are sealed off from the outside.One way to think about “objects” is that each is an *idea* that holds possibly useful behaviors that can be *requested* (not ordered). So they are like servers with differential privileges. Since there are almost always many more ways to accomplish concepts than there are concepts — think of the *idea* of “sorting” vs the many ways to do sorting — it makes great sense to separate the “language of concepts/behaviors” from the ways to accomplish the concepts/behaviors.This allows many kinds of scaling and reformulations to be done both safely, and while the larger system is running (hint: your systems design is poor if you have to stop it to fix it or change it).Another way to look at this is that “data” in most imperative and static senses of the word needs to go away — it is much too fragile and exposed.You can request services, and some of these might be as simple as asking for a particular value. If the server is representing a “person” then you might request “date of birth” and get a date object as a reply. If you request “age”, you would expect to get a duration object back. In the first case the date object might be held directly internally (probably not), and in the second case, the duration object is the result of an on the fly calculation (and which might be “continuous”).A more sophisticated use of objects would be to have a “goal pool” of things the larger system needs done, and the server objects could be constantly looking at the goal pool to find things to do. (This is a kind of “Publish and Subscribe” — or Linda — type process.)Etc.



Why not argue? You are doing it “nicely”.

I was dealing in “shoulds” and “oughts”, but you can also find lots of “data style programming” in many of the early Smalltalks. Some of this was because we hadn’t figured out good ways to be more object-oriented, and some of it was done in the heat of the moment (that fire in which kludges are forged).

You should edit your comment to pick a better example than “integer” (they are immutable objects in Smalltalk). But your point has some value. Still, what happens externally is an *idea* and what happens internally is *a particular realization of an idea.* They are really two very different things. For example, the *idea* in Smalltalk is *magnitudes* and a little more narrowly *numbers* but in almost all cases the only semantic differences are between *exact* and *nonexact,* and the subclasses are only there for pragmatic tradeoffs.

In the very beginning, one thought we had about objects was that at least we could seal up kludges inside objects to make things prettier and safer on the outside (this is still a good ploy).

And you are right that sometimes it makes some sense to tell an object what one of its properties should be. This starts to verge on having to know internal details of modules in order to use them, which we thought was not a good direction. On the other hand, a setter method at least allows one level of indirection internally if needed later.

This leads to a much larger set of issues — which we grappled with but didn’t resolve — which is that pound for pound, imperative programming doesn’t scale well, even if you do it within a “worldlines” semantics. So: finding ways to not command other objects in one’s design is generally a very good direction to take.



o: my advice is try to avoid “learning OOP” via a language. “Real OOP” is not about making abstract data types, setters, or most of the things that are typically done in them. “Real OOP” is about dynamic systems, and the way to learn it is to start designing and building them and gradually build up a feeling for scaling, modularization, intercommunications, etc. Then you will be able to choose how to use the (too many) degrees of freedom available in almost all programming languages.



So: both OOP and functional computation can be completely compatible (and should be!). There is no reason to munge state in objects, and there is no reason to invent “monads” in FP. We just have to realize that “computers are simulators” and figure out what to simulate.

https://www.quora.com/Do-I-lose-something-when-learning-OOP-in-Ruby-instead-of-C-Java

http://worrydream.com/EarlyHistoryOfSmalltalk/

https://www.quora.com/Can-someone-link-me-to-the-original-white-paper-discussing-what-was-eventually-coined-OOP-I-believe-it-was-by-Alan-Kay-but-Im-not-able-to-find-it-simply-in-a-Google-search-Im-finding-it-referenced-but-not-linked-to

https://www.youtube.com/watch?v=AnrlSqtpOkw&t=135s



https://www.ecma-international.org/

https://developer.mozilla.org/en-US/docs/Web

https://whatwg.org/