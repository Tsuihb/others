# mysql
* 定义：数据结构来组织、存储和管理数据的仓库
## 什么是
1. 数据以表格的形式出现
2. 每行为各种记录名称
3. 每列为记录名称所对应的数据域
4. 许多的行和列组成一张表单
5. 若干的表单组成database
## 术语
1. 数据库: 数据库是一些关联表的集合。
2. 数据表: 表是数据的矩阵。在一个数据库中的表看起来像一个简单的电子表格。
3. 列: 一列(数据元素) 包含了相同的数据, 例如邮政编码的数据。
4. 行：一行（=元组，或记录）是一组相关的数据，例如一条用户订阅的数据。
5. 冗余：存储两倍数据，冗余降低了性能，但提高了数据的安全性。
6. 主键：主键是唯一的。一个数据表中只能包含一个主键。你可以使用主键来查询数据。
7. 外键：外键用于关联两个表。
8. 复合键：复合键（组合键）将多个列作为一个索引键，一般用于复合索引。
9. 索引：使用索引可快速访问数据库表中的特定信息。索引是对数据库表中一列或多列的。

## 创建/删除/使用数库
```Javascript
create database <数据库名>;
drop database <数据库名>;
use database <数据库名>;
```
## 数据类型
* 数值：
> 整型类：SMALLINT、INT、BIGINT<br>
> 浮点类：FLOAT、DOUBLE

* 日期与时间：
> DATA 如：yyyy-mm-dd<br>
> TIME 如：hh-mm-ss<br>
> YEAR 如：yyyy<br>
> DATATIME 如 1970-01-01 00:00:00/2038<br>
> TIMESTAMP 如：某一刻的时间点 1970-01-01 00:00:00/2038

* 字符串类型
> CHAR 定长 0-225;<br>
> VARCHAR 增长 0-65535；<br>
> TINYBLOB 0-225 二进制<br>
> BLOB 0-65535 二进制<br>
> LONGBLOB 超长二进制 0-4 294 967 295<br>
> MEDIUMTEXT 文本 0-16 777 215<br>
> LONGTEXT 长文本 	0-4 294 967 295
## 创建表
* 形式: 
> 表名<br>
> 表字段名<br>
> 定义每个表字段

```Javascript
    mysql> CREATE TABLE runoob_tbl(
    -> runoob_id INT NOT NULL AUTO_INCREMENT,
    -> runoob_title VARCHAR(100) NOT NULL,
    -> runoob_author VARCHAR(40) NOT NULL,
    -> submission_date DATE,
    -> PRIMARY KEY ( runoob_id )
    -> )ENGINE=InnoDB DEFAULT CHARSET=utf8;
```
## 删除数据表
* DROP TABLE table_name ;

## 插入数据 
```javascript
INSERT INTO table_name ( field1, field2,...fieldN )
                       VALUES
                       ( value1, value2,...valueN );
```
## 查询数据库
* SELECT column_name,column_name
* FROM table_name
* [WHERE Clause]
* [LIMIT N][ OFFSET M]

## WHERE 语句