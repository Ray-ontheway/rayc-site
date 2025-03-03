pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'rayc-site'
    }

    stages {
        stage('Prepare .env') {
            steps {
                script {
                    // 将 .env 文件写入工作目录
                    withCredentials([file(credentialsId: '4b4cc097-021c-4765-a3af-5e19e4195bf0', variable: 'ENV_FILE')]) {
                        sh 'cp $ENV_FILE .env'
                    }
                    sh 'cat .env'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // 构建 Docker 镜像
                    sh 'docker build -t ${DOCKER_IMAGE}:${BUILD_NUMBER} .'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // 停止并删除旧容器
                    sh 'docker stop rayc-site || true'
                    sh 'docker rm rayc-site || true'

                    // 运行新容器，映射宿主机端口 3006
                    sh '''
                        docker run -d \
                          --name rayc-site \
                          -p 3006:3006 \
                          --env-file .env \
                          ${DOCKER_IMAGE}:${BUILD_NUMBER}
                    '''
                }
            }
        }
    }
}