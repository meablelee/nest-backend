方法1：用 psql 连接查看数据库列表
打开终端，执行：

bash
复制
编辑
psql -U common -d postgres
（这里用你脚本创建的用户 common，连接默认数据库 postgres）

进入 psql 交互界面后，输入：

sql
复制
编辑
\l
它会列出所有数据库，你看列表里是否有 common_test



方法2：用命令行直接查询
bash
复制
编辑
psql -U common -d postgres -c "\l"
这条命令会直接输出所有数据库列表。


方法4：尝试直接连接目标数据库
bash
复制
编辑
psql -U common -d common_test
如果成功进入 psql，说明数据库存在且你有权限。