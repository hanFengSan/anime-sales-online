# 动画销量在线/anime-sales
这个是``动画销量在线``网站的前端部分，使用了webpack+vue+sass进行构建。目前还在开发中:)

# 界面预览
<img src="https://github.com/hanFengSan/anime-sales/blob/master/app/assets/img/preview.jpg"/>

# 一些个人觉得有意思的地方
1. 实现上考虑了多语言切换。项目中将所有将使用到的字符串单独抽取到了json文件里，json文件分为``string-cn``、``string-jp``、``string-en``三个。项目中将读取出的字符串定义用的json放在了``vuex``的``state``中，当切换语言时，直接触发相关的``mutation``修改``state``，即可无缝实现语言切换！完全即时响应，无需刷新，代码精简。
2. 项目是通通使用``vue``的单文件组件进行开发的，维护、重用等非常方便，逻辑清晰。


# 开发进度
目前进度大概20%的样子，开工并没几天...我会加油的= =。由于还没有开始写后台，所以前端的数据部分都是随意写了些预览、测试性数据。多语言支持上，日语是全机翻，英文随手写的，后面开发完成后会专门找人进行相应的修订的，请放心。



# License

    Copyright (C) 2016 hanFengSan

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
