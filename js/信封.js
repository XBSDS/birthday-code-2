let heart = document.querySelector('.heart')
let card = document.querySelector('.card')
let box = document.querySelector('#box')

heart.addEventListener('click', function () {
    // 1. 音乐切换逻辑
    let birthdayMusic = document.getElementById("bgm");
    if (birthdayMusic) {
        birthdayMusic.pause();
        birthdayMusic.remove();
    }

    let letterMusic = document.createElement("audio");
    letterMusic.setAttribute("src", "../music/月球下的人.mp3");
    letterMusic.setAttribute("autoplay", "autoplay");
    letterMusic.setAttribute("loop", "loop");
    // 【修改点 1】给新音乐添加一个固定ID，方便后面获取播放进度
    letterMusic.id = "letter-bgm"; 
    document.body.appendChild(letterMusic);

    // 2. 翻盖动画
    card.classList.add('open');

    // 3. 延时等待跳转
    setTimeout(() => {
        card.style.opacity = '0';
        box.style.zIndex = '50';
        box.style.opacity = '1'; 

        // --- 打字机逻辑 ---
        let i = 0
        let str = '展信颜舒，见字如晤！<'+
        '等着解封的那一刻窜出来<'+
        '你一眨眼，<'+
        '温驯的小鹿有跳动一下，<'+
        '柔软的暖风有轻拂一下，<'+
        '遥远的星星有闪烁一下，<'+
        '我也有心动<却不止一下';
        let strp = ''

        function print() {
            if (str[i] == '<') {
                document.getElementById("box").innerHTML = strp + "<br><br>" + (i < str.length - 1 ? '|' : ''); 
                strp += "<br><br>";
            } else {
                strp += str[i];
                box.innerHTML = strp + (i < str.length - 1 ? '|' : '');
            }
            i++;
        }

        setTimeout(() => {
            let printid = setInterval(() => {
                print();
                if (i == str.length) {
                    clearInterval(printid);
                    // 打字结束，显示按钮
                    showBonusButton();
                }
            }, 190); 
        }, 1500); 

    }, 2200); 
})

// --- 优化后的按钮显示函数 ---
function showBonusButton() {
    let btnContainer = document.createElement("div");
    btnContainer.style.marginTop = "70px"; 
    btnContainer.style.textAlign = "center";
    btnContainer.style.width = "100%";
    btnContainer.style.opacity = "0";
    btnContainer.style.transition = "opacity 2s"; 
    btnContainer.style.flexShrink = "0"; 

    let btn = document.createElement("a");
    // 【修改点 2】去掉 href 属性，改用 JS 点击事件处理跳转
    // btn.href = "贺卡.html"; 
    btn.href = "javascript:void(0);"; // 防止点击后页面跳动
    
    btn.innerText = "✨ 开启下一篇章 ✨"; 
    
    // === 按钮点击事件：获取时间并跳转 ===
    btn.addEventListener('click', function() {
        // 1. 获取正在播放的音乐元素
        let music = document.getElementById("letter-bgm");
        let currentTime = 0;
        
        // 2. 如果音乐存在，获取当前播放的秒数
        if (music) {
            currentTime = music.currentTime;
        }
        
        // 3. 带着时间参数跳转到贺卡页面
        // 贺卡页面会自动读取 ?audioTime=xxx 并从这个位置开始播放
        window.location.href = "贺卡.html?audioTime=" + currentTime;
    });

    // === 样式区域 (保持你之前满意的样式) ===
    btn.style.display = "inline-block";
    btn.style.padding = "12px 45px"; 
    btn.style.fontSize = "24px"; 
    btn.style.fontWeight = "normal"; 
    btn.style.color = "#fff";
    btn.style.background = "rgba(160, 60, 92, 0.9)"; 
    btn.style.borderRadius = "50px";
    btn.style.textDecoration = "none";
    btn.style.fontFamily = "'HanYiShangWei', cursive";
    btn.style.boxShadow = "0 5px 15px rgba(160, 60, 92, 0.4)";
    btn.style.backdropFilter = "blur(5px)";
    btn.style.border = "1px solid rgba(255,255,255,0.7)"; 
    
    btn.onmouseover = function() { 
        this.style.background = "rgba(180, 70, 105, 1)"; 
        this.style.transform = "scale(1.03) translateY(-2px)";
        this.style.boxShadow = "0 8px 20px rgba(160, 60, 92, 0.6)";
    };
    btn.onmouseout = function() { 
        this.style.background = "rgba(160, 60, 92, 0.9)"; 
        this.style.transform = "scale(1)";
        this.style.boxShadow = "0 5px 15px rgba(160, 60, 92, 0.4)";
    };
    btn.style.transition = "all 0.3s ease-in-out";
    btn.style.letterSpacing = "2px"; 

    btnContainer.appendChild(btn);
    box.appendChild(btnContainer);
    
    box.scrollTo({
        top: box.scrollHeight,
        behavior: 'smooth'
    });

    setTimeout(() => {
        btnContainer.style.opacity = "1";
    }, 100);
}