# HTML5 WebSocket
简介：WebSocket是HTML5开始提供的一种在单个 TCP 连接上进行全双工通讯的协议。
## 基本用法
* 当你获取 Web Socket 连接后，你可以通过 send() 方法来向服务器发送数据，并通过 onmessage 事件来接收服务器返回的数据。

```javascript
var Socket = new WebSocket(url, [protocol] );
```
* ctx中的代理：例 ctx.request.body = ctx.body

## WebSocket 属性
|  属性 | 描叙 | 
|   :-  |  :- |  
| Socket.bufferedAmount | 只读属性 bufferedAmount 已被 send() 放入正在队列中等待传输，但是还没有发出</br>的 UTF-8 文本字节数。| 
| Socket.readyState | 只读属性 readyState 表示连接状态，可以是以下值：</br>0 - 表示连接尚未建立。</br>1 - 表示连接已建立，可以进行通信。</br>2 - 表示连接正在进行关闭。</br>3 - 表示连接已经关闭或者连接不能打开。|
                                                                
## WebSocket 事件
		
|  事件 | 事件处理程序 | 描述 |
|   :-  |  :- |  :- |  
open |	Socket.onopen	| 连接建立时触发
message |	Socket.onmessage |	客户端接收服务端数据时触发
error |	Socket.onerror |	通信发生错误时触发
close |	Socket.onclose |	连接关闭时触发

## WebSocket 方法
| 方法 | 描述 |
|   :-  |  :- |  
| Socket.send() | 使用连接发送数据 |	
| Socket.close() | 关闭连接 |

#### 未完待续。。。