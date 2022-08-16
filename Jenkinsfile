properties(
    [
        [$class: 'BuildDiscarderProperty', strategy:
          [$class: 'LogRotator', artifactDaysToKeepStr: '14', artifactNumToKeepStr: '5', daysToKeepStr: '30', numToKeepStr: '60']],
        pipelineTriggers(
          [
              pollSCM('H/15 * * * *'),
              cron('@daily'),
          ]
        )
    ]
)
node {
    stage('Checkout') {
        //disable to recycle workspace data to save time/bandwidth
        deleteDir()
        checkout scm

        //enable for commit id in build number
        //env.git_commit_id = sh returnStdout: true, script: 'git rev-parse HEAD'
        //env.git_commit_id_short = env.git_commit_id.take(7)
        //currentBuild.displayName = "#${currentBuild.number}-${env.git_commit_id_short}"
    }

    stage('NPM Install') {
      bat 'npm install  --legacy-peer-deps'
    }

    // stage('Test') {
    //     withEnv(["CHROME_BIN=/usr/bin/chromium-browser"]) {
    //       sh 'ng test --progress=false --watch false'
    //     }
    //     junit '**/test-results.xml'
    // }

    // stage('Lint') {
    //     sh 'ng lint'
    // }

    stage('Build') {
        bat 'ng build --prod --base-href="/app/"  && cd dist/app && jar -cvf app.war *'
    }



    stage('Deploy') {
        deploy adapters: [tomcat8(credentialsId: 'TomcatCreds', path: '', url: 'http://localhost:8080')], contextPath: null, war: '**/*.war'
    }
}
