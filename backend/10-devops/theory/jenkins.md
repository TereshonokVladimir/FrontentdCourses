# Jenkins

## Concept

Jenkins is an open-source automation server for CI/CD. It runs pipelines defined as code (Jenkinsfile) or via UI. It supports plugins for SCM, build tools, cloud providers, and notifications. Self-hosted, highly customizable, and widely used in enterprise environments.

## Why It Matters

Jenkins predates many modern CI tools and remains popular for complex, multi-stage pipelines and integrations. It runs on-prem, supports distributed builds, and has plugins for almost any tool. Understanding it helps when joining teams that use it.

## Key Concepts

- **Pipeline**: Definition of build/test/deploy stages (declarative or scripted)
- **Agent**: Where the pipeline runs (any, docker, specific node)
- **Stages/Steps**: Logical blocks and individual commands
- **Plugins**: Extend Jenkins (Git, Docker, Slack, AWS)
- **Shared libraries**: Reusable pipeline code across projects

## Code Example

```groovy
// Jenkinsfile (Declarative Pipeline)
pipeline {
  agent {
    docker {
      image 'node:20-alpine'
      reuseNode true
    }
  }

  environment {
    NODE_ENV = 'test'
    REGISTRY = 'my-registry.io'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Lint') {
      steps {
        sh 'npm run lint'
      }
    }

    stage('Test') {
      steps {
        sh 'npm test -- --coverage'
      }
      post {
        always {
          junit 'coverage/junit.xml'
        }
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Push Image') {
      when {
        branch 'main'
      }
      steps {
        script {
          docker.build("${REGISTRY}/api:${env.BUILD_NUMBER}")
          docker.withRegistry("https://${REGISTRY}", 'docker-credentials') {
            docker.image("${REGISTRY}/api:${env.BUILD_NUMBER}").push()
          }
        }
      }
    }
  }

  post {
    failure {
      slackSend(color: 'danger', message: "Build ${env.JOB_NAME} #${env.BUILD_NUMBER} failed")
    }
  }
}
```

## Under the Hood

Jenkins master schedules jobs and allocates agents. Agents run the pipeline in a workspace; each stage can run on a different agent. Plugins provide SCM polling, Docker agents, and integrations. Pipeline state is persisted; logs and artifacts are stored on the master.

## Common Mistakes

- Running everything on the master (exhausts resources)
- Storing credentials in plain text
- Not using pipeline-as-code (fragile UI config)
- Skipping `sh` wrapper (Windows compatibility)
- Not cleaning workspace between runs (stale artifacts)

## Best Practices

- Use declarative pipelines in Jenkinsfile
- Run heavy jobs on dedicated agents
- Use Docker agents for isolation
- Store credentials in Jenkins credential store
- Use shared libraries for reusable logic

## Summary

Jenkins is a self-hosted CI/CD server with pipeline-as-code. Use Jenkinsfile, Docker agents, and plugins. Prefer declarative pipelines; store credentials securely.
