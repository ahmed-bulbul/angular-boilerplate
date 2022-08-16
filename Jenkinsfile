properties(
    [
        pipelineTriggers(
          [
              pollSCM('* * * * *'),
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
        withEnv(["NPM_CONFIG_LOGLEVEL=warn"]) {
            bat 'npm install  --legacy-peer-deps'
        }
    }

    // stage('Test') {
    //     bat 'ng test --progress=false --watch false'
    // }

    stage('Build') {
        milestone()
        bat 'ng build --prod --base-href="/app/  && cd dist/app && jar -cvf app.war *'
    }


    stage ('Deploy on this Server') {
        deploy adapters: [tomcat8(credentialsId: 'TomcatCreds', path: '', url: 'http://localhost:8080')], contextPath: null, war: '**/*.war'
    }
}
