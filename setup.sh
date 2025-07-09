#!/bin/bash

PG_USER="common"
PG_PASSWORD="secure_password"
PG_DB="common_test"

echo "🚀 安装 PostgreSQL（如果未安装）..."
brew list postgresql >/dev/null 2>&1 || brew install postgresql

echo "✅ 启动 PostgreSQL 服务..."
brew services start postgresql

sleep 5

echo "👤 检查用户是否存在..."
USER_EXISTS=$(psql postgres -tAc "SELECT 1 FROM pg_roles WHERE rolname='$PG_USER'")
if [ "$USER_EXISTS" = "1" ]; then
  echo "✅ 用户 '$PG_USER' 已存在，跳过创建。"
else
  echo "🔧 创建 PostgreSQL 用户..."
  psql postgres -c "CREATE USER $PG_USER WITH PASSWORD '$PG_PASSWORD';"
  psql postgres -c "ALTER USER $PG_USER WITH SUPERUSER;"
fi

echo "📦 检查数据库是否存在..."
DB_EXISTS=$(psql postgres -tAc "SELECT 1 FROM pg_database WHERE datname='$PG_DB'")
if [ "$DB_EXISTS" = "1" ]; then
  echo "✅ 数据库 '$PG_DB' 已存在，跳过创建。"
else
  echo "🔧 创建数据库..."
  createdb -O $PG_USER $PG_DB
fi

echo "🎉 安装和配置完成！连接方式如下："
echo "👉 psql -U $PG_USER -d $PG_DB"
