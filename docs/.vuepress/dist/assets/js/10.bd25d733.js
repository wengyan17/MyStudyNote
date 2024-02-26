(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{422:function(_,v,p){"use strict";p.r(v);var n=p(23),l=Object(n.a)({},(function(){var _=this,v=_.$createElement,p=_._self._c||v;return p("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[p("h1",{attrs:{id:"mysql"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[_._v("#")]),_._v(" Mysql")]),_._v(" "),p("p",[_._v("1.Mysql的表空间结构\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("\n1.表空间由行，页，区，段组成。\n2.行代表Mysql中的一行记录\n3.页是由多个连续的行组成的，页是Mysql的读写单位，每个页默认16KB\n3.区是由多个连续的页组成的，以区为单位可以让相邻的页，在物理位置上也相邻，这样就可以使用顺序IO，提高读写性能\n4.段是由多个区组成的，段一般分为数据段，索引段，回滚段。数据段用于存储B+树中叶子节点的区的集合，索引段用于存储B+树中非叶子节点的区的集合，回滚段用于存放回滚数据的区的集合\n")])]),p("p"),_._v(" "),p("p",[_._v("2.varchar(n) n最大为多少?\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("\n首先要知道varchar(n)表示最多存储n个字符\n然后数据库要求一行记录不能超过65535个字节，然后还要减去NULL值列表和变长字段的长度列表，然后还要根据字符集判断，在ascii字符集中，1个字符占一个字节，在UTF-8字符集中，1个字符占3个字节\n")])]),p("p"),_._v(" "),p("p",[_._v("3.Mysql的存储引擎有哪些？他们之间的区别？\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("\nInnoDB,MyISAM,Memory\n1.InnoDB支持事务，MyISAM,Memory不支持事务\n2.InnoDB支持行级锁，MyISAM和Memory只支持表级锁\n3.InnoDB具备崩溃回复能力，通过日志对数据进行恢复。MyISAM缺少崩溃恢复机制。Memory数据存储在内存中，重启或者宕机就会导致数据丢失\n4.InnoDB和MyISAM都支持全文索引,Memory不支持全文索引\n5.InnoDB支持外键，MyISAM和Memory不支持外键\n")])]),p("p"),_._v(" "),p("p",[_._v("4.索引的分类")]),_._v(" "),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("\n1.按数据结构分：B+树索引，哈希索引，全文索引\n2.按物理存储分：聚簇索引，二级索引\n3.按字段数量分: 单列索引，联合索引\n4.按字段特性分：主键索引，唯一索引，普通索引，前缀索引\n")])]),_._v(" "),p("p",[_._v("5.索引的优点和缺点\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("优点")]),_._v(" "),p("p",[_._v("1.可以提高数据检索速度，减少磁盘IO")]),_._v(" "),p("p",[_._v("2.通过索引对数据进行排序，可以减少CPU的消耗")]),_._v(" "),p("p",[_._v("3.可以大大提高查询速度")]),_._v(" "),p("p",[_._v("缺点")]),_._v(" "),p("p",[_._v("1.占用额外的存储空间")]),_._v(" "),p("p",[_._v("2.增加写操作的开销，在进行数据插入，修改，删除时，需要同时更新索引，这会增加写操作的开销")])]),p("p"),_._v(" "),p("p",[_._v("6.索引优化的方法\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("1.使用前缀索引进行优化，使用字符串的前几个字符作为前缀索引，提高查询速度")]),_._v(" "),p("p",[_._v("2.使用覆盖索引优化，使得要查询的数据能够在二级索引得到，从而避免回表")]),_._v(" "),p("p",[_._v("3.采用自增主键，这样可以让插入数据都是追加操作，不用移动数据")]),_._v(" "),p("p",[_._v("4.索引最好设置为NOT NULL，因为设置为NULL会导致优化器跟难进行优化，并且设置为NOT NULL可以节省内存空间")]),_._v(" "),p("p",[_._v("5.防止索引失效。例如左或左右模糊搜索。联合索引非最左匹配。Where子句中 or 前是索引列，or后不是索引列。对索引涅进行了计算，函数，类型转换操作。")])]),p("p"),_._v(" "),p("p",[_._v("7.为什么mysql采用B+树而不是B树\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("1.B+树非叶子节点不存在实际记录的数据，仅存放索引，相比既存储索引又存储记录的B树，B+树的树高更低，从而磁盘IO更少")]),_._v(" "),p("p",[_._v("2.B+树有大量的冗余节点，这让B+树在插入，删除的效率更高，不会像B树一样发生那么大的变化")]),_._v(" "),p("p",[_._v("3.B+树叶子节点之间用链表连接了起来，有利于范围查询，而B树要进行范围查询只能通过树的遍历来完成，查询效率更低")])]),p("p"),_._v(" "),p("p",[_._v("8.索引失效的情况\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("\n1.对索引列进行了计算，函数，类型转换操作\n2.使用左模糊搜索(like '%x')或左右模糊搜索(like '%x%')\n3.联合索引非最左匹配(a,b,c索引,查询b,c)\n4.where 子句中 or 前是索引列, or 后不是索引列\n")])]),p("p"),_._v(" "),p("p",[_._v("9.COUNT(1)，COUNT(*)，COUNT(主键字段)，COUNT(普通字段)的区别\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("性能上 COUNT(字段) < COUNT(主键字段) < COUNT(*) < COUNT(1)")]),_._v(" "),p("p",[_._v("1.COUNT(1) 由于1一定不为NULL，所以不需要读取记录中任何字段的值，直接遍历索引，每读到一条记录就给count+1")]),_._v(" "),p("p",[_._v("2.COUNT(*) mysql会将*转化为0，和COUNT(1)一样 ")]),_._v(" "),p("p",[_._v("3.COUNT(主键字段), mysql会遍历索引，然后读取记录中的主键字段，如果主键字段不为空，则count+1")]),_._v(" "),p("p",[_._v("4.COUNT(字段) mysql会遍历全表，然后读取记录中的主键字段，如果主键字段不为空，则count+1")])]),p("p"),_._v(" "),p("p",[_._v("10.事务的特性?如何保证事务的特性?\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("原子性：一个事务的所有操作，要么全部完成，要么全部不完成，不会结束在某个中间环节。通过undo日志保证")]),_._v(" "),p("p",[_._v("持久性：一个事务，一旦提交，对数据库的修改就是永久的，即使数据库故障也不会丢失。通过redo日志保证")]),_._v(" "),p("p",[_._v("隔离性：数据库允许多个并发事务同时对其数据进行读取和修改的能力，隔离性可以防止多个事务由于交叉执行而导致的不一致性。通过MVCC机制或锁机制保证")]),_._v(" "),p("p",[_._v("一致性：事务操作前后，数据满足完整性约束，数据库保持一致性状态。通过原子性，持久性，隔离性保证")])]),p("p"),_._v(" "),p("p",[_._v("11.脏读，不可重复读，幻读的区别\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("脏读：一个事务读到了另一个未提交事务事务修改的数据，如何未提交的事务发生了回滚，就发生了脏读")]),_._v(" "),p("p",[_._v("不可重复读：在一个事务内多次读取同一个数据，如果出现前后两次读到的数据不一样，就意味着发生了不可重复读")]),_._v(" "),p("p",[_._v("幻读：在一个事务内多次查询记录的数量，如果出现前端两次查询到的记录数不一样的情况，就意味着发生了幻读")])]),p("p"),_._v(" "),p("p",[_._v("12.事务的隔离级别\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("读未提交：一个事务还没提交时，它做的变更就能被其他事务看到。通过每次读取最新的数据实现。")]),_._v(" "),p("p",[_._v("读已提交：一个事务提交后，它做的变更才能被其他事务看到。通过每个语句执行前都重新生成一个Read View实现。")]),_._v(" "),p("p",[_._v("可重复读：一个事务执行过程中看到的数据，一直跟事务启动时看到的数据是一致的。通过在启动事务时生成一个Read View，然后事务执行期间都使用这个Read View来实现")]),_._v(" "),p("p",[_._v("串行化：会对记录加上读写锁，在多个事务对这个记录进行读写操作时，如果发生了读写冲突时，后访问的事务必须等前一个事务执行完才能执行。通过加读写锁来实现。")])]),p("p"),_._v(" "),p("p",[_._v("13.快照读和当前读的区别\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("快照读是指某个时刻的快照数据，通过MVCC机制+Undo log实现")]),_._v(" "),p("p",[_._v("当前读是指读取当前最新的数据，通过临键锁(间隙锁+行记录锁)实现")])]),p("p"),_._v(" "),p("p",[_._v("14.MVCC机制\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("MVCC机制通过在每个记录都维护了两个隐藏列，trx_id，roll_pointer，trx_id表示这个记录是由哪个事务生成的，roll_pointer记录了上一个版本的指针和Read View机制。Read View包含了creator_trx_id, min_trx_id,m_ids,max_trx_id。creator_trx_id表示创建该Read View的事务id，min_trx_id表示创建该Read View时最小的启动且未提交的事务id，m_ids是指启动且未提交的事务id列表，max_trx_id是指创建该Read View时，给下一个事务的id")]),_._v(" "),p("p",[_._v("然后在事务访问记录的过程中，如果该记录的trx_id < min_trx_id，则该记录可见,如果该记录的min_trx_id <= trx_id < max_trx_id， 并且 trx_id 位于 m_ids中，则该记录不可见，如果trx_id不位于 m_ids中，则该记录可见，如果trx_id >= max_trx_id，则该记录不可见。如果读到不可见的数据则会沿着 roll_pointer，找到旧版本的记录 ")])]),p("p"),_._v(" "),p("p",[_._v("15.幻读被完全解决了吗？\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("并没有，还有两种场景。第一种是如果一个事务修改了另一个事务插入的数据，会导致原本不可见的数据，由于修改了该数据，使得该数据的trx_id发生改变，从而可见，导致发生了幻读")]),_._v(" "),p("p",[_._v("第二种是先执行快照读，然后另一个事务插入了一条数据，然后执行当前读，就会读到了另一个事务插入的数据，导致发生了幻读")])]),p("p"),_._v(" "),p("p",[_._v("16.Mysql有哪些锁？\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("1.全局锁：用于数据库备份，InnoDB可以通过Read View实现数据库备份，但是MyISAM只能通过全局锁实现。加锁期间数据库处于只读状态，不能对数据进行增删改，对表结构进行更改")]),_._v(" "),p("p",[_._v("2.表级锁：包括表锁，元数据锁，意向锁，AUTO-INC锁。")]),_._v(" "),p("p",[_._v("2.1 表锁：分为独占锁和共享锁，开启了共享锁，则阻塞对该表的所有写操作，开启了独占锁，则阻塞对该表的所有读写操作")]),_._v(" "),p("p",[_._v("2.2 元数据锁：分为读锁和写锁，当对表进行增删改查操作时，会自动给表加上读锁，当对表结构进行修改时，会自动给表加上写锁。申请元数据锁的操作会形成一个队列，并且写锁获取的优先级更高")]),_._v(" "),p("p",[_._v("2.3 意向锁：用于快速检测表中是否有记录被加锁。分为意向独占锁，意向共享锁，意向锁之间不会发生冲突，只会和表级独占锁和表级共享锁发生冲突")]),_._v(" "),p("p",[_._v("2.4 AUTO-INC锁：用于生成自增主键，当需要插入记录时，加上改该锁，插入后就会被释放。mysql还有一个轻量级锁，插入之前申请该锁，然后给对应的字段赋一个自增的值，然后就可以释放该锁")]),_._v(" "),p("p",[_._v("3.行锁：包括记录锁，间隙锁，临键锁，插入意向锁")]),_._v(" "),p("p",[_._v("3.1 记录锁：分为共享锁和独占锁。共享锁和独占锁互斥，独占锁和独占锁互斥。")]),_._v(" "),p("p",[_._v("3.2 间隙锁：间隙锁之间是兼容的，用于防止插入幻影记录")]),_._v(" "),p("p",[_._v("3.3 临键锁：临键锁是记录锁和间隙锁的组合")]),_._v(" "),p("p",[_._v("3.4 插入意向锁：插入意向锁是一种特殊的间隙锁，用于判断插入位置是否有间隙锁，他会与间隙锁互斥。当需要插入数据时，会先加插入意向锁")])]),p("p"),_._v(" "),p("p",[_._v("17.undo log的作用?\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("1.实现事务回滚，保证事务的原子性")]),_._v(" "),p("p",[_._v("2.实现MVCC机制")])]),_._v("\n18.redo log的作用?\n"),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("1.实现事务的持久性，让 Mysql 有崩溃恢复能力")]),_._v(" "),p("p",[_._v("2.将写操作由随机写变成顺序写")])]),p("p"),_._v(" "),p("p",[_._v("19.redo log 的刷盘时机\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("redo log 会先写入 redo log buffer，而刷盘时机是Mysql 正常关闭，或 redo log buffer 记录写入量已经超过一半或每隔1s，后台线程都会将redo log buffer刷盘，还有一种由系统参数(innodb_flush_log_at_trx_commit)决定")]),_._v(" "),p("p",[_._v("innodb_flush_log_at_trx_commit = 0, 事务提交不触发刷盘。innodb_flush_log_at_trx_commit = 1 事务提交直接写入redo log文件并刷盘。 innodb_flush_log_at_trx_commit = 2，事务提交时直接写入redo log 文件。")])]),p("p"),_._v(" "),p("p",[_._v("20.redo log 满了怎么办？\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("redo log 由两个redo log 文件组成，以循环写的方式工作，形成了一个环形，当将要写的位置，还有没被擦除的数据时， mysql 将会阻塞，将buffer pool 中的数据刷盘")])]),p("p"),_._v(" "),p("p",[_._v("21.binlog的作用\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("用于备份恢复，主从复制")])]),p("p"),_._v(" "),p("p",[_._v("22.binlog和redo log的区别?\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("1.适用对象不同：redo log是 InnoDB存储引擎中的日志，而binlog是mysql server层上的日志，所有引擎都可以使用")]),_._v(" "),p("p",[_._v("2.日志格式不同：binlog有三种日志格式 ")]),_._v(" "),p("p",[_._v("2.1.1 statement： 记录每一条修改数据的SQL。")]),_._v(" "),p("p",[_._v("2.1.2 row：记录行数据最终被修改成什么样了。")]),_._v(" "),p("p",[_._v("2.1.3 mixed：包含了statement和row模式，根据不同的情况自动使用statement模式和row模式。")]),_._v(" "),p("p",[_._v("2.2 redo log 是物理日志，记录的是某个数据页做了什么修改")]),_._v(" "),p("p",[_._v("3.1 写入方式不同 binlog是追加写，写满一个文件，就创建一个新的文件继续写，不会覆盖以前的日志，保存的是全量的日志。")]),_._v(" "),p("p",[_._v("3.2 redo log 是循环写，日志空间大小固定，写满了就从头开始写，保存未被刷盘的脏页日志")]),_._v(" "),p("p",[_._v("4.1 用途不同：binlog用于备份恢复，主从复制")]),_._v(" "),p("p",[_._v("4.2 redo log 用于掉电等故障恢复")])]),p("p"),_._v(" "),p("p",[_._v("23.主从复制如何实现？\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("1.当客户端要提交事务时，发请求给主库，主库写入binlog，然后提交事务，并更新本地存储数据。")]),_._v(" "),p("p",[_._v("2.通过log dump线程发送binlog日志给每个从库，每个从库把binlog写到暂存日志中。")]),_._v(" "),p("p",[_._v("3.回放binlog，并更新存储引擎中的数据")])]),p("p"),_._v(" "),p("p",[_._v("24.binlog 什么时候刷盘？\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("binlog首先会将日志写到binlog cache，等到事务提交的时候才把binlog cache中完整的事务写入binlog文件中，并清空binlog cache")]),_._v(" "),p("p",[_._v("binlog写入磁盘的时机由系统参数(sync_binlog)决定")]),_._v(" "),p("p",[_._v("sync_binlog=0,每次事务提交，只写入binlog文件，不刷盘，具体写入磁盘的时机由操作系统决定")]),_._v(" "),p("p",[_._v("sync_binlog=1,每次事务提交，写入binlog文件，并且刷盘")]),_._v(" "),p("p",[_._v("sync_binlog=n(n>1),每次事务提交，只写入binlog文件，等到积累了n个事务后，再刷盘")])]),p("p"),_._v(" "),p("p",[_._v("25.主从复制有哪些模型?\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("1.同步复制：主库提交事务的线程要等待所有从库的复制成功响应，才能返回客户端结果")]),_._v(" "),p("p",[_._v("2.异步复制：主库提交事务的线程不会等待binlog同步到每个从库，就直接返回客户端结果")]),_._v(" "),p("p",[_._v("3.半同步复制：主库提交事务的线程收到只要一部分从库复制成功的响应，就返回客户端结果")])]),p("p"),_._v(" "),p("p",[_._v("26.如何保证redo log和binlog的一致性\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("通过二阶段提交来实现。二阶段提交将事务提交拆分成两个阶段，准备阶段和提交阶段，使用了内部XA事务，binlog作为协调者,存储引擎作为参与者")]),_._v(" "),p("p",[_._v("1.先将XID写入redo log，然后将redo log对应的事务状态设置为 prepare，然后将redo log刷盘")]),_._v(" "),p("p",[_._v("2.将XID写入binlog，然后将binlog刷盘，再调用存储引擎的提交事务接口，然后将redo log对应的事务状态设置为commit。")]),_._v(" "),p("p",[_._v("如果redo log刷盘后宕机，重启后去binlog中查找redo log中的XID是否存在，如果不存在就回滚事务，否则提交事务")])]),p("p"),_._v(" "),p("p",[_._v("27.二阶段提交的问题\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("1.磁盘I/O次数高：每次事务提交都会刷盘两次")]),_._v(" "),p("p",[_._v("2.锁竞争激烈：为了保证两个日志的提交顺序一致，必须要加锁保证原子性")])]),p("p"),_._v(" "),p("p",[_._v("28.MySQL 为什么要用自增 ID？\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("使用自增ID作为主键可以让插入数据都是追加操作，不用移动数据。不使用自增ID会导致可能产生页分裂从而导致插入效率降低")])]),p("p"),_._v(" "),p("p",[_._v("29.Mysql 如何性能优化？\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("1.使用索引优化查询")]),_._v(" "),p("p",[_._v("2.优化查询语句，select查询时尽量指定需要的列，减少数据传输和处理时间")]),_._v(" "),p("p",[_._v("3.尽量避免全表查询，使用合适的查询条件")]),_._v(" "),p("p",[_._v("4.使用批处理，减少数据库IO次数")]),_._v(" "),p("p",[_._v("5.进行分库分表")]),_._v(" "),p("p",[_._v("6.优化表的数据类型的使用")]),_._v(" "),p("p",[_._v("7.尽量避免用子查询，用join来代替")]),_._v(" "),p("p",[_._v("8.使用limit优化分页")]),_._v(" "),p("p",[_._v("9.binlog日志提交使用组提交，延迟binlog刷盘时机，从而减少刷盘次数")]),_._v(" "),p("p",[_._v("10.修改redo log刷盘参数，不需要每次事务提交都刷盘，而是只写入redo log文件")])]),p("p"),_._v(" "),p("p",[_._v("30.b+树和b树区别\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("1.数据存储方式：B树非叶子节点既存储索引又存储数据。B+树的非叶子节点不存储数据，所有数据存储在叶子节点")]),_._v(" "),p("p",[_._v("2.叶子节点的链接：B树的叶子节点之间没有链接。B+树的叶子节点之间通过链表相连，可以支持范围遍历和顺序遍历")]),_._v(" "),p("p",[_._v("3.范围查询的性能：由于B树的每个节点都存储数据，范围查询需要在整颗树上进行遍历。B+树的范围查询非常高效，因为所有数据都存储在叶子节点上，并且通过链表相链接")]),_._v(" "),p("p",[_._v("4.内存占用和磁盘IO次数：由于B树的每个节点都存储数据，其内存占用大，并且树高会更高，从而磁盘IO次数更多。B+树非叶子节点仅存储索引键值，内存占用较小，并且树高更低，磁盘IO次数更少")]),_._v(" "),p("p",[_._v("5.适用场景：B树更适合随机读写，低内存环境。B+树适合范围查询，大规模数据集场景")])]),p("p"),_._v(" "),p("p",[_._v("31.B+树和B树各自的优势\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("1.1 B树更适用于随机读写：由于B树的每个节点都包含数据，它在进行随机读写操作时可能比B+树更高效，因为可以直接在节点中找到所需的数据记录。")]),_._v(" "),p("p",[_._v("1.2 B树更适用于低内存环境：相对于B+树，B树的节点包含了数据，因此在某些内存受限的情况下，B树可能占用较小的内存空间。")]),_._v(" "),p("p",[_._v("2.1 B+树更适用于范围查询：B+树的所有数据记录都存储在叶子节点上，并通过链表连接，使得范围查询操作更加高效。而B树需要在整棵树上进行遍历，效率较低。")]),_._v(" "),p("p",[_._v("2.2 B+树较少的磁盘IO次数：由于B+树的非叶子节点仅存储索引，数据记录存储在叶子节点上，并且通过链表连接，减少了磁盘IO次数，提高了数据访问的效率。")]),_._v(" "),p("p",[_._v("2.3 B+树更适用于大规模数据集：B+树的叶子节点通过链表连接，可以支持高效的范围查询和顺序遍历，适应了大规模数据存储和索引场景的需求。")]),_._v(" "),p("p",[_._v("2.4 B+树更高的磁盘预读能力：由于B+树的叶子节点通过链表连接，相邻的数据记录在磁盘上也是相邻存储的，能够充分利用磁盘的顺序访问能力，提高了数据的读取效率。")])]),p("p"),_._v(" "),p("p",[_._v("32.主从复制，读写分离的情况下，主库宕机，从库会受到什么影响？\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("1.首先，因为读写分离，主库宕机后，无法进行写操作，因此会导致整个系统不能进行任何插入，更新，删除操作，")]),_._v(" "),p("p",[_._v("2.读操作不会受到影响，因为读操作在从库上进行，因为主从复制有延迟，所以可能丢失主库宕机前的数据")]),_._v(" "),p("p",[_._v("3.主库宕机后，只能手动将某个从库提升为主库")]),_._v(" "),p("p",[_._v("4.如果某个从库被提升为主库后，可能导致数据的不一致性，因为原主库宕机前的一部分数据可能没有同步到从库")])]),p("p"),_._v(" "),p("p",[_._v("33.mysql explain命令\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("explain命令用于查询SQL语句的执行计划。包括查询id，查询类型(简单查询，主键查询，子查询等)，表名，匹配的分区，数据扫描类型(常见类型包括ALL全表查询，INDEX遍历索引树，RANGE范围查询，INDEX_MERGE索引合并,const最多有一个匹配记录等)，可能使用的索引，实际使用的索引，索引长度，索引的那一列被用了，估计要扫描的行，符合查询条件的数据的百分比，附加信息")]),_._v(" "),p("p",[_._v("explain命令需要重点关注数据扫描类型（尽量避免全表扫描和索引全扫描），索引的那一列被用了,可能使用的索引，实际使用的索引（确保索引生效），附加字段（可能有潜在的性能问题），估计要扫描的行(扫描的行数越少越好)")])]),p("p"),_._v(" "),p("p",[_._v("34.聚簇索引，非聚集索引是什么？\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("聚簇索引就是叶子节点中存放的数据就是整张表的行记录数据，主键索引就是聚簇索引")]),_._v(" "),p("p",[_._v("非聚集索引就是叶子节点中存放的数据只有主键和索引值")])]),p("p"),_._v(" "),p("p",[_._v("35.一条sql语句太慢如何处理\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("首先要开启慢查询日志，然后可以通过explain分析执行计划，判断索引使用情况。然后尽量使用索引覆盖，联合索引遵循最左匹配，避免索引失效，")])]),p("p"),_._v(" "),p("p",[_._v("36.分库分表如何处理?\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("1.确定分库分表策略：水平分表(将一张表的数据分到多张表中)，垂直分表(将一些不经常使用的字段分到另一张表上)，水平分库(将一个数据库中的多张表分到多个数据库中，并部署到多个服务器上，从而缓解单个数据库的压力)，垂直分库(将单个表的数据分到多个数据库上)")]),_._v(" "),p("p",[_._v("2.制定数据切分方案：确定分片键，切分规则，数据迁移方案")]),_._v(" "),p("p",[_._v("3.选择合适的分库分表工具")]),_._v(" "),p("p",[_._v("4.进行充分的测试，监控和调优")])]),p("p"),_._v(" "),p("p",[_._v("37.水平分表后如何count\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("1.代码中分别统计多个表中的count")]),_._v(" "),p("p",[_._v("2.使用UNION ALL将多个表的查询结果组合，然后用SUM计算总和")]),_._v(" "),p("p",[_._v("3.使用存储过程，遍历多个表，计算COUNT")])]),p("p"),_._v(" "),p("p",[_._v("38.B+树的缺点\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("维护成本高，占用内存大，单点查询要查到叶子，单点查询效率不高，不适合随机读写")])]),p("p"),_._v(" "),p("p",[_._v("39.Hash索引和BTree索引的区别\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("1.BTree支持等值查询，范围查询，前缀查询，而Hash索引只支持等值查询")]),_._v(" "),p("p",[_._v("2.BTree在范围查询和排序操作中性能更高，而Hash索引在单个等值查询中性能更高")]),_._v(" "),p("p",[_._v("3.BTree可以很好的支持联合索引，而Hash索引不支持")])]),p("p"),_._v(" "),p("p",[_._v("40.数据库范围\n")]),p("details",[p("summary",[_._v("答案")]),_._v(" "),p("p",[_._v("1NF表示每个属性都是不可分的原子项")]),_._v(" "),p("p",[_._v("2NF表示每个非主属性都要完全依赖于主属性")]),_._v(" "),p("p",[_._v("3NF表示非主属性之间不能有依赖关系，必须直接依赖于主属性")]),_._v(" "),p("p",[_._v("BCNF表示主属性之间不能有依赖关系")]),_._v(" "),p("p",[_._v("4NF表示不能存在多对多的依赖关系")]),_._v(" "),p("p",[_._v("5NF表示不能存在不包含候选码的连接依赖")])]),p("p")])}),[],!1,null,null,null);v.default=l.exports}}]);