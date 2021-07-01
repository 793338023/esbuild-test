
esbuild 和 babel 、tsc 对标，但又没有他们成熟，而且目前主要用在转译与压缩上

esbuild 更适合处理js内容

esbuild 也可以处理其他文件类型的内容，比如css，txt，json等

## onResolve

会对符合过滤或命名空间的路径进行路径处理，它的作用是返回路径内容如何让esbuild进行处理，比如改造路径，外部路径之类的

## onLoad

onLoad会根据路径或命名空间进行回调处理，在里面把内容获取到并进行处理，它的作用是返回模块的内容并告诉esbuild如何解释它

参数和返回值
https://esbuild.github.io/plugins/#load-arguments


## onStart

启动回调，所有的构建都会触发，没有过滤情况，在初始、增量、监听时都有效

## onEnd

结束回调，和上面启动回调的对称

## 总结

核心API就是onResolve和onLoad，在对应的API上进行逻辑处理

其实官网描述很清楚了，详细可以看官网

https://esbuild.github.io
