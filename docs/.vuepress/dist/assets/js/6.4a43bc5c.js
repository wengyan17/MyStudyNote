(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{418:function(e,a,r){"use strict";r.r(a);var d=r(23),n=Object(d.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"_6-824"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-824"}},[e._v("#")]),e._v(" 6.824")]),e._v(" "),r("p",[e._v("1.raft的流程\n首先，每个节点启动时，会先初始化节点信息，然后读取持久化节点信息（如日志，版本号，投票信息，快照的最后一个日志的索引和版本号）和持久化快照。然后开启一个协程执行任务。\n当节点没有宕机的时候，将会循环执行，首先会加锁，然后根据节点状态，\n如果是follower，则通过上次收到心跳的时间戳来判断是否心跳超时，如果超时则将节点状态转变为candidate，然后持久化节点信息，并发送投票请求给其他节点，如果没有超时就释放锁\n如果是candidate，则通过上次发起投票的时间戳判断是否选举超时，如果选举超时则将节点状态转变为follower，然后持久化节点信息，并锁。\n如果是leader，则根据上次发送心跳的时间判断是否需要发送心跳，如果需要，则发送心跳给每个节点，如果不需要，则发送日志给每个节点。\n然后sleep一段时间再执行")]),e._v(" "),r("p",[e._v("发送投票请求\ncandidate会并发的向除自己以外的节点发送投票请求，通过RPC调用来实现，candidate如果得到了多半的赞成票，则会将节点状态转变为leader，并立马发送心跳给每个节点\n其他节点收到candidate的投票请求后，首先会加锁，如果收到的投票，版本号不小于他，并且日志不落后于他，那就投票给他，否则就不投票给他。如果自己是candidate,收到了比自己版本号更大的投票，则将节点状态转变为follower")]),e._v(" "),r("p",[e._v("发送心跳请求\nleader会定期发送心跳给每个节点，如果leader收到比自己版本号高的响应，则将节点状态转变为follower")]),e._v(" "),r("p",[e._v("心跳处理\n其他节点收到leader的心跳后，如果收到的版本号不比自己小，则接受该心跳，并将节点状态转变为follower，如果收到的版本号比自己大，则更新自己的版本号，并清空投票情况，否则拒绝。")]),e._v(" "),r("p",[e._v("发送日志同步请求\nleader会定期发送日志给每个节点，如果发现节点需要的日志已经被快照了，则发送快照给该节点。否则发送节点所需要的日志。如果leader收到比自己版本号更大的响应，则将节点状态转为follower\n如果日志同步成功，则更新节点的日志同步信息，并尝试提交日志。否则进行日志快速回退，回退到当前版本的第一个日志")]),e._v(" "),r("p",[e._v("日志同步\n其他节点收到来自leader的日志同步请求后，首先判断收到的版本号是否不小于自己，如果是，则校验收到的日志的前一个位置是否匹配，通过前一个位置的版本号是否相同来确定。如果前一个位置的版本号不相同，则返回当前版本号的第一个日志的索引，用于快速回退。匹配成功则将其追加到指定位置，如果该索引已经存在日志，并且不相同，则将其后的日志全部删除，并追加剩下的日志。并将节点状态转为follower，如果收到的版本号比自己大，则更新版本号并清空投票信息。如果发现leader的提交索引比自己大，则进行日志提交")]),e._v(" "),r("p",[e._v("安装快照\n节点收到快照后，如果发送快照的leader的版本号比自己低，则拒绝快照，如果收到的快照与自己相匹配，则只需要删除到快照最后一个索引的日志，剩下的保留，否则全部删除。")]),e._v(" "),r("p",[e._v("Raft算法的核心是Leader，Raft首先会从servers中选出一个leader，该leader具有管理日志复制的所有权限。\nRaft将共识问题划分为三个子问题，Leader选举(Leader宕机后如何选出新的Leader)，日志复制(leader需要负责添加新的日志和将日志复制到其他server上)，安全性(当一个server的某个索引的日志被执行后，说明每个server该索引的日志都一样)\n每个任期只有一个leader\nfollower负责处理来自leader和candidate的请求\ncandidate用于选举新leader")]),e._v(" "),r("p",[e._v("CAP定理\n一致性，分区容错性，可用性\n在异步网络模型中，不存在一个系统可以同时满足上面三个属性。")]),e._v(" "),r("p",[e._v("如果想要达到强一致性，就必须将请求全部通过单台服务器处理，但这样就很难达到高可用")]),e._v(" "),r("p",[e._v("一致性：要么读到一个最新的数据，要么读取失败\n可用性：任何客户端的请求都能得到响应数据，不会出现响应错误\n分区容错性：系统可以出现网络分区，仍然能够继续运行，不会完全失败")]),e._v(" "),r("p",[e._v("leader什么时候会将日志提交到状态机？\n当属于当前leader任期的日志被复制到多半节点上时，将会提交到状态机")]),e._v(" "),r("p",[e._v("raft如何解决日志不一致的问题?\n通过数据流只能从leader流向follower来解决，如果遇到日志不一致，则直接覆盖")]),e._v(" "),r("p",[e._v("选举限制\ncandidate至少比多半节点的日志一样新，才能成为leader")]),e._v(" "),r("p",[e._v("leader只能提交自己任期的日志\n因为一个leader无法确认自己任期之前的日志是否已经提交过，所以只能提交自己任期的日志，之前任期的日志就可以跟着一起提交了，但是如果一直没有新的日志写入，会导致之前已经复制到多半节点的日志一直不能被提交，所以可以通过no-op日志来实现，即leader选举成功时，追加一个no-op日志。")]),e._v(" "),r("p",[e._v("leader日志提交安全性证明\n假设任期为T的leader提交了一个日志，而任期为U的leader是最小的不包含该日志的任期，\n由于leaderT提交了日志，则说明该日志已经复制到了多半节点上，而LeaderU能成为leader，一定赢得了多半节点的选票，所以一定存在一个节点，既给收到了LeaderT的日志，又给LeaderU投票了\n并且该日志一定在给LeaderU投票之前收到，因为如果收到LeaderU投票之后，该节点就会进入任期U，就会拒绝LeaderT的日志。\n那么在给LeaderU投票之前，一定保存该日志，然后给LeaderU投票的前提是LeaderU至少比他新\n如果LeaderU最后一个日志的任期和他相同，那么LeaderU的日志长度至少和他一样长，所以一定包含该节点的所有日志\n如果LeaderU最后一个日志的任期比他大，根据日志匹配原则，一定包含他")]),e._v(" "),r("p",[e._v("raft如何保证一致性\n1.在Leader选举时，通过任期划分时间，每个任期最多一个Leader\n2.在同一个任期，每个节点只能投票一次，并且只会投给满足up-to-date原则的节点，确保选举出的leader具有所有已知的最新日志条目\n3.在日志复制上，一旦Leader选举出来就会将自己的日志复制给所有的节点\n4.日志复制过程中，收到日志的节点通过日志匹配原则，对日志进行检查，确保之前的日志完全一致，如果不一致，则拒绝请求。Leader会找到一致点的重新进行复制\n5.当日志被复制到大多数节点时，会进行日志提交\n6.提交原则和日志匹配原则保证了安全性")]),e._v(" "),r("p",[e._v("客户端启动的时候会随机化生成一个唯一id,当收到请求时，给请求分配一个请求序号，将客户端id+请求序号，作为请求的唯一id，然后向每一个节点发起请求，如果收到该节点不是Leader的响应，则继续向下一个节点发起请求，直到收到响应，并记录Leader节点的序号。当请求失败时，会循环重试。")]),e._v(" "),r("p",[e._v("服务器启动后首先会初始化节点信息，并加载持久化信息。然后启用两个协程一个负责检测，是否需要压缩日志，如果需要，则发送压缩日志请求给Raft节点\n另一个线程负责执行命令，从通道中读取命令，如果是日志命令，")])])}),[],!1,null,null,null);a.default=n.exports}}]);