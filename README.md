# 大致说明 #
这是一个基于 HTML、CSS 和 JavaScript 制作的动态生日祝福网页。你可以用它来为朋友、家人或爱人送上一份特别的数字化生日惊喜！
本人并非学习计算机及其有关专业，只是单纯地对这些东西比较感兴趣，从而慢慢探索出来的。代码部分主要还是靠**gemini AI**来实现的，同时也从B站上爬了两个UP主**开心患者light**和**易燃的小兰**的视频，放到了开头和结尾，来进一步提升观感（不得不吐槽B站的画质压缩太厉害了，导致很多视频都很糊）
## 1.简要效果 ##
### 1.1第一幕 ###
内嵌了一个《疯狂动物城》的视频，配乐是*Try everything*。选择这个视频，主要是感觉生日时候应当给予些磅礴向上的力量，节奏应该要比较昂扬向上。同时还增加了**梦幻气泡**上浮的效果，第一行**姓名**和**祝你生日快乐**后续均可修改，整体登录框是**毛玻璃**效果。点击**点击进入**即可开启下一页面。
<img width="2560" height="1566" alt="image" src="https://github.com/user-attachments/assets/4e20718b-b79a-4619-972c-d39103c9ab8e" />
### 1.2第二幕 ###
背景是一张**雪树林**的图片，该幕主要是呈现一个**动态粒子**的效果。配乐是*Happy Birthday*。
<img width="2537" height="1394" alt="image" src="https://github.com/user-attachments/assets/6628664f-22ed-4ad5-ab86-40be07fb08cd" />
### 1.3第三幕 ###
背景比较梦幻，是一个渐变色背景。该幕主要是实现一个**蛋糕**的效果，点击**继续旅程**即可开启下一页面。音乐会延续上一个页面的*Happy Birthday*。
<img width="2560" height="1600" alt="image" src="https://github.com/user-attachments/assets/4c51a336-41d8-4958-8c7f-47a695aaa895" />
### 1.4第四幕 ###
背景刚开始是一个冷色调的窗户图片，中间是一个**复古风蓝色**的信封（至于为什么做成这样，因为我要送给的那个女生比较喜欢这类信封😁）配乐是*生日歌的纯钢琴*。
点击**点击开启**即可进入信封的内容部分（该代码所呈现的文字仅作示例，不涉及我写给那个女生的具体内容）。内容部分的背景图片做了**从中间到四周逐渐变暗**的效果，从而让字体看起来不费眼，更清晰。配乐是*月球下的人*（据我所知，那个女生挺喜欢这首歌的，就放在这最重要的内容部分）。文字内容会以打字的形式逐渐呈现出来，可以通过滚轮上下翻阅，全部呈现完之后就可以点击**继续旅程**开启下一页面。
<img width="2554" height="1401" alt="image" src="https://github.com/user-attachments/assets/b2d377d4-192f-4a77-b61f-e215339cc5f5" />
<img width="2551" height="1400" alt="image" src="https://github.com/user-attachments/assets/347d47ff-fc6e-4b31-b2a8-c6fe6128bbe9" />
### 1.5第五幕 ###
背景是一个偏向暖色调的渐变梦幻色彩，这一幕主要是呈现出一个**贺卡**的效果，可以写一些简短的话语与祝福。点击**点击拆开礼物**后，会出现一个**相片飘落**的效果。音乐部分会接着上一页面的*月球下的人*进行播放，经过大概*10*多秒会自动跳转到下一页面，同时对音乐做了一个**逐渐消失**的处理，可能不会显得那么突兀。
<img width="2560" height="1410" alt="image" src="https://github.com/user-attachments/assets/d6a01ee0-d331-4bbd-81d2-be7bd198d8ac" />
### 1.6第六幕 ###
这一幕也是我最喜欢的一幕：**星空背景、流星划落、烟花绽放**。最终会勾勒出**XX，生日快乐**的字样。点击**继续旅程**会跳转到最后一个页面。
<img width="2539" height="1399" alt="image" src="https://github.com/user-attachments/assets/8ea87d68-56bd-4cdf-8303-c81c4df733af" />
### 1.7第七幕 ###
这是最后一幕，背景是**月夜**图片，放上了关于《白日梦想家》的一个视频，该视频可以全屏播放，跟正常播放设置的差不多，基本三四个按钮都有，感觉放在最后能再次给人一种对于美好明天的期待感，同时也在不经意暗示”这一天的生日快过去了“，明天又是未知的一天，但请一定不要把自己束缚住，敢于打破局限，为自己的生活增添彩色！
<img width="2549" height="1403" alt="image" src="https://github.com/user-attachments/assets/ba5338cf-9801-403f-8fd8-be167aa64147" />
# 2.文件分布大致概述 #
**index.html**文件是开头登录文件；
**css文件夹**里均存放着css文件 ；
**html文件夹**里均存放着html文件；
**js文件夹**里均存放着js文件；
**img文件夹**里存放着所有的背景图片和修饰图片；
**music文件夹**里存放着所需的背景音乐；
**video文件夹**里存放着开头登录界面内嵌的视频和结尾内嵌的视频；
**字体文件夹**里存放着好看的字体文件。

<img width="622" height="425" alt="image" src="https://github.com/user-attachments/assets/a4e0e96e-5547-43db-be44-9d2305dffde4" />

# 3.代码简要说明和修改建议 #
## 3.1第一幕修改 ##
在**html文件夹**中的**登录.html**文件中，图中标红框的可以去修改文字内容；
<img width="2560" height="1528" alt="image" src="https://github.com/user-attachments/assets/f46124b8-0106-4638-9f6c-0f67796c46e2" />
在**index.html**文件中，修改图中标红框的部分可以修改开头的内嵌视频。
<img width="2560" height="1495" alt="image" src="https://github.com/user-attachments/assets/484eed5c-1bbc-496d-8ba6-cbd0d508dc42" />
## 3.2第二幕修改 ##
在**html文件夹**中的**index1.html**中，红色标框处可以修改成自己喜欢的音乐；
<img width="2556" height="1479" alt="image" src="https://github.com/user-attachments/assets/dce02167-e872-4aef-b0fc-6267085e4f44" />
同文件下，这一行可以修改背景图片；
<img width="2560" height="1500" alt="image" src="https://github.com/user-attachments/assets/79296d47-0a09-42e0-b096-09e14c123f02" />
在**js文件夹**中的**indexl.js**中，红色标框处可以修改想要的动态粒子文字（如果文字增多了几幕或者减少了几幕后，记得相应地修改*720*这个倒计时数字，方便文字播放完之后自动切换到下一幕，中间尽可能保证无空缺，否则影响观感）。
<img width="2560" height="1503" alt="image" src="https://github.com/user-attachments/assets/1dda20b3-f768-4747-add8-ba84cd5ccc36" />
## 3.3第三幕修改 ##
在**html文件夹**下的**生日蛋糕.html**中，如果第二幕修改了音乐，记得跟**第二幕的音乐**保持一致，这样衔接比较顺畅.
<img width="2560" height="1525" alt="image" src="https://github.com/user-attachments/assets/4abc4b5d-161b-4553-ad3c-7acb3f585a50" />
## 3.4第四幕修改 ##
在**html文件夹**下的**信封.html**文件下，此处可以修改**信封第一屏**的背景音乐、以及信封上的祝福语和提示语;
<img width="2560" height="1104" alt="image" src="https://github.com/user-attachments/assets/b2132ea5-09e8-40f8-bad3-f256eeeebb84" />
在**js文件夹**下的**信封.js**文件下，下面那处可以修改**信封内容部分**的背景音乐，上面红色框包含的部分定义了在内容中**插入图片**的方式（内容中要插入图片的部分使用~这个符号，要跟函数内部定义的图片的顺序保持一致）;
<img width="2560" height="1283" alt="image" src="https://github.com/user-attachments/assets/5b44a41c-461f-4b06-9104-15c14f3041db" />
同文件下，此处可以修改信封的内容（内容要用 ‘ ’ 包含住）：**<** 这个符号表示结束时换行、+ 这个符号表示上下文字连接、^ 这个符号表示该段内容右对齐;
<img width="2560" height="1212" alt="image" src="https://github.com/user-attachments/assets/066ae4f1-58bb-4132-b90d-25e92bed6d44" />
在**css文件夹**下的**信封.css**文件中，此处可以修改**信封第一屏**的背景图片。
<img width="2560" height="1199" alt="image" src="https://github.com/user-attachments/assets/5a385169-7017-478b-b6b8-2f42993e79c7" />
同文件夹下，此处可以修改**信封内容部分**的背景图片。
<img width="2560" height="1254" alt="image" src="https://github.com/user-attachments/assets/596b94de-c7dc-4d0a-9de5-3f6cbacd1fe1" />
## 3.5第五幕修改 ##
在**html文件夹**下的**贺卡.html**文件中，此处可以修改背景音乐（最好与上一幕**信封内容**部分的音乐同步修改，衔接更好）、贺卡的内容、至于**生日贺卡.jpg**也可以修改（记得把图片放在同文件夹下）；
<img width="2560" height="1409" alt="image" src="https://github.com/user-attachments/assets/78f753aa-8849-4347-9586-e831bda169ab" />
同文件下，如果想要修改**飘落的图片**可以首先把**所有想放进去的图片**全部放入到**img文件夹**下，并且命名为**流图1**、**流图2**等等（一定要是jpg文件）。
<img width="2560" height="1429" alt="image" src="https://github.com/user-attachments/assets/740e9c5c-6166-4e6a-8a73-ce169741f2c6" />
## 3.6第六幕修改 ##
在**html文件夹**下的**彩蛋原版.html**中，此处可以修改动态粒子的**文字显示**部分，也可以修改**字体样式**，还可以修改**右下角的文字内容**；
<img width="2545" height="1188" alt="image" src="https://github.com/user-attachments/assets/5a2a0877-33cb-4277-9d1d-2eb1034bc4bd" />
同文件夹下，此处可以修改**背景音乐**。
<img width="2558" height="1186" alt="image" src="https://github.com/user-attachments/assets/7d175404-2ce7-415f-b984-976ea9ffd404" />
## 3.7第七幕修改 ##
在**html文件夹**下的**结尾.html**中，此处可以修**文字内容**、**结尾视频**。
<img width="2553" height="1396" alt="image" src="https://github.com/user-attachments/assets/03254ca7-12cb-4735-b885-1a1554946c6d" />
