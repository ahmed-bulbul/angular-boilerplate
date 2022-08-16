pipeline {
    agent any

    environment {
        registryCredential = 'DockerCredential'
    }

    triggers {
        pollSCM('* * * * *') //polling for changes, here once a minute
    }

    stages {
        stage('S-1: Starting Job') {
            steps {
                echo 'Starting job, cleaning workspace'
                deleteDir()
            }
        }
        stage('S-2: Checkout code') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/bulbul-dev/angular-boilerplate.git']]])
            }
        }

        stage ('Install dependency') {
            bat 'npm install  --legacy-peer-deps'
        }
        stage('S-3: Test') {
            bat 'ng test --no-watch --code-coverage'
        }

        stage('Make Prod Build') {
            bat 'ng build --prod --base-href="/pta/" --deploy-url="/pta/" && cd dist/app && jar -cvf app.war *'
        }

        stage('S-4: Deploy to Tomcat') {
             steps {
               echo 'Start deploy...'
               deploy adapters: [tomcat8(credentialsId: 'TomcatCreds', path: '', url: 'http://localhost:8080/')], contextPath: 'app', war: '**/*.war'
            }
        }
        stage('S-5: Finished Job') {
            steps {
                echo 'Finished Job'
            }
        }

    }
    post {
        always {
            echo 'Finished CI/CD Job'
        }
    }
}

//
