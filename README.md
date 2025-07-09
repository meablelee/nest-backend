# NestJS PostgreSQL CRUD API 示例项目

基于 NestJS + TypeORM + PostgreSQL + @nestjsx/crud 实现的快速增删改查接口示例，集成了 Swagger 自动文档。

---

## 目录

- [项目介绍](#项目介绍)
- [环境准备](#环境准备)
- [安装依赖](#安装依赖)
- [配置环境变量](#配置环境变量)
- [运行项目](#运行项目)
- [接口说明](#接口说明)
- [Swagger 文档](#swagger-文档)
- [常见问题](#常见问题)

---

## 项目介绍

本项目演示如何用 NestJS 快速搭建一个基于 PostgreSQL 的 RESTful CRUD API，利用社区成熟库 `@nestjsx/crud` 自动生成接口，省去手写大量重复代码。

支持分页、排序、过滤等功能，并通过 Swagger 生成在线 API 文档。

---

## 环境准备

- Node.js 16 及以上版本
- PostgreSQL 数据库（已安装并启动）
- npm 或 yarn 包管理工具

---

## 安装依赖

```bash
npm install
# 或者
yarn install


## 初始化数据库（必做）
请务必在首次运行项目之前，先执行本步骤！

项目根目录下提供了 setup.sh 脚本，用于安装 PostgreSQL（如果未安装）、启动服务，创建数据库及用户，并完成必要初始化。

执行：


bash setup.sh
确保数据库已创建且用户权限正确，否则项目无法连接数据库。

配置环境变量
在项目根目录创建 .env 文件，填写数据库连接信息：


DB_HOST=localhost
DB_PORT=5432
DB_USER=common
DB_PASS=secure_password
DB_NAME=common_test
运行项目

npm run start:dev
# 或者
yarn start:dev
启动后，控制台输出：

csharp
复制
编辑
Application is running on: http://localhost:3000
接口说明
/test 资源的自动 CRUD 接口
方法	路径	说明
GET	/test	获取所有数据（支持分页、过滤、排序）
GET	/test/:id	根据 ID 获取单条数据
POST	/test	创建新数据
PUT	/test/:id	全量更新指定 ID 的数据
PATCH	/test/:id	部分更新指定 ID 的数据
DELETE	/test/:id	删除指定 ID 的数据

Swagger 文档
访问 http://localhost:3000/api-docs 查看接口文档。


