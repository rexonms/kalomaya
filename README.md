# Development

The monorepo has both Server and the Client Code. For UI development run the go server and then the React App

**Run Go Server**

```
$ make dev-watch
```

validate by going to [health route](http://localhost:8080/health)

**Run React Client**

```
$ make react-watch
```

**Using docker**

```bash
$ docker-compose up -d
open http://localhost:3000 #for react
open http://localhost:8080/api #for go
```

validate by going to [client root](http://localhost:3000)

**Loading the Client bundle build via Go Server**

```
$ cd client
$ yarn build
```

validate by going to [server root](http://localhost:8080)

# Testing

**Go**

```
$ make test
```

**Client**

```
$ cd client
$ yarn test

```

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

- [Local and Prod tutorial](https://semaphoreci.com/community/tutorials/how-to-deploy-a-go-web-application-with-docker)

```
$ docker-compose up --build
$ docker build --tag rexonms/kalomaya .                                         // build an image
$ docker image ls                                                               // display all images
$ docker image rm rexonms/kalomaya:lastest                                      // remove image
$ docker build -t rexonms/kalomaya:multistage -f Dockerfile.multistage .        // multi stage
$ docker ps                                                                     // list containers
$ docker stop {NAME}                                                            // stop a container
```

# Links

- [site](https://kalomaya-go-9vrl2.ondigitalocean.app/)
- [gqlgen](https://gqlgen.com/getting-started/)
- [gin tutorial - express](https://www.youtube.com/watch?v=LOn1GUsjOF4&ab_channel=DavidAlsh)

# [Go with React](https://medium.com/@synapticsynergy/serving-a-react-app-with-golang-using-gin-c6402ee64a4b)
