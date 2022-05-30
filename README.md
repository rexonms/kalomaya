[site](https://kalomaya-go-9vrl2.ondigitalocean.app/)

# Dev

    // script
    make dev
    make test

    // docker
    $ docker-compose up --build

# Commands

```
    $ go test               // runs all the test that under *_test.go
    $ golangci-lint run     // runs linter
    $ go build              // Compiles a bunch of go source code files
    $ go run                // Complies and executes on or two files
    $ go fmt                // Formats all the code in each file in the current directory
    $ go install            // Compiles and "installs" a packages
    $ go get                // Downloads the raw source code of someone else's packages
    $ go test               // Runs any tests associated with the current project
```

# Deployment

- [DigitalOcean](https://cloud.digitalocean.com/apps/a84ca4a3-00f1-4d72-b564-ce2ebf32c56b/overview?i=6e90ac) will trigger a build whenever we merge code to main.
- ~~[AWS - Elastic Beanstalk](https://us-east-1.console.aws.amazon.com/elasticbeanstalk/home?region=us-east-1#/gettingStarted)~~
- ~~[Build/Run Command settings](https://cloud.digitalocean.com/apps/a84ca4a3-00f1-4d72-b564-ce2ebf32c56b/settings/kalomaya?i=6e90ac) `Commands -> Run Command`~~

# Docker [builds](https://docs.docker.com/language/golang/build-images/)

```
    $ docker build --tag rexonms/kalomaya .                                         // build an image
    $ docker image ls                                                               // display all images
    $ docker image rm rexonms/kalomaya:lastest                                      // remove image
    $ docker build -t rexonms/kalomaya:multistage -f Dockerfile.multistage .        // multi stage
    $ docker ps                                                                     // list containers
    $ docker stop {NAME}                                                            // stop a container
```

# Links

- [gqlgen](https://gqlgen.com/getting-started/)
- [gin tutorial - express](https://www.youtube.com/watch?v=LOn1GUsjOF4&ab_channel=DavidAlsh)
