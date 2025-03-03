# 使用官方 Node.js 镜像作为基础镜像
FROM node:23-alpine AS builder

# 安装 pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json pnpm-lock.yaml* ./

# 安装依赖
RUN pnpm install

# 复制项目文件
COPY . .

# 构建 Next.js 项目
RUN pnpm run build

# 使用更小的镜像运行应用
FROM node:23-alpine AS runner
WORKDIR /app

# 只复制必要的文件
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# 暴露端口
EXPOSE 3006

# 启动应用
CMD ["pnpm", "start"]