var bad = document.getElementById('bad'); //坏人节点
        var good = document.getElementById('good'); //好人节点
        var pop = document.getElementById('pop-up'); //投票节点
        var arr = [];
        var input = document.getElementById('dome');
        input.addEventListener("input",function(){
            this.value=this.value.replace(/[^0-9-]+/,'');
            operation();
        });
        


        //弹出框消失
        function cancel() {
            pop.style.display = 'none';
        }
        operation(); //默认值需要运行这个函数

        //判断人数是否超标没超标跳转
        function deal() {   
            var a = document.getElementById('dome').value;
            if (a < 4) {
                pop.style.display = 'block';
            } else if (a > 18) {
                pop.style.display = 'block';
            } else if (a > 3 && a < 19) {
                window.location.href = '4.html';
            }
        }

        //捕捉input值检测 运算符合标准的数组

        function operation() {
            
            var a = document.getElementById('dome').value;        //建立数组a 方便比较
            window.localStorage.setItem('sum', document.getElementById('dome').value);       //存储数据 是纯数字的value值所以没有转换格式
            var b = [];                                           //建立局部空数组方便使用
            if (a < 6 && a > 3) {
                arr[0] = 1;
            } else if (a > 5 && a < 9) {
                arr[0] = 2;
            } else if (a > 8 && a < 12) {
                arr[0] = 3;
            } else if (a > 11 && a < 16) {
                arr[0] = 4;
            } else if (a > 15 && a < 19) {
                arr[0] = 5;
            } else {                              //找不到合适的人数就变为0
                bad.innerText = 0;
                good.innerText = 0;
                return

            }
            arr[1] = a - arr[0];                   //符合条件的值传分配给好人坏人
            bad.innerText = arr[0];
            good.innerText = arr[1];
            for (let i = 0; i < arr[0]; i++) {     //循环出坏人有几个就传入空数组b几个
                b.push('狼人')

            }
            for (let i = 0; i < arr[1]; i++) {     //循环出好人有几个就传入空数组b几个
                b.push('好人')
            }


            var len = b.length;                     //设置变量等于数组长度
            for (var i = 0; i < len - 1; i++) {     //给b数组乱序 使好人坏人随机
                var idx = Math.floor(Math.random() * (len - i));
                var temp = b[idx];
                b[idx] = b[len - i - 1];
                b[len - i - 1] = temp;
            }
            console.log(b);
            window.localStorage.setItem('identity', JSON.stringify(b));   //转换格式 保存数据
            
        }