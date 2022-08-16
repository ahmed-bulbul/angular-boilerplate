node {
    stage('Checkout') {
        //from github
        checkout(
            repo: 'https://github.com/bulbul-dev/angular-boilerplate.git',
            branch: 'main'
        )

    }
    stage ('Install dependency') {
        bat 'npm install  --legacy-peer-deps'
    }
    stage ('Testing Stage') {
        bat 'ng test --no-watch --code-coverage'
    }

    stage('Make Prod Build') {
        bat 'ng build --prod --base-href="/app/" --deploy-url="/app/" && jar -cvf app.war *'
    }
    stage ('Deploy on this Server') {
        deploy adapters: [tomcat9(credentialsId: 'TomcatCreds', path: '', url: 'http://localhost:8080')], contextPath: null, war: '**/*.war'
    }
}
