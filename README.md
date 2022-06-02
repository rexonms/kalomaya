# Development

The monorepo has both Server and the Client Code. For UI development run the Go server and then the React App

**Using Docker**

```bash
$ docker-compose up -d
$ open http://localhost:3000 #for React
$ open http://localhost:8080/api #for Go
```

**Run Go Server**

```bash
$ make dev-watch
$ open http://localhost:8080/health
```

**Run React Client**

```bash
$ make react-watch
$ open http://localhost:3000
```

**Loading the Client bundle build via Go Server**

```bash
$ cd client
$ yarn build
$ open http://localhost:8080 #should load the client bundle via server
```

# Testing

**Go**

```bash
$ make test
```

**Client**

```bash
$ cd client
$ yarn test

```

# Production

- [client](https://kalomaya.com)
- [server](https://api.kalomaya.com/health)

# Commands

```bash
$ go test               # runs all the test that under *_test.go
$ golangci-lint run     # runs linter
$ go build              # Compiles a bunch of go source code files
$ go run                # Complies and executes on or two files
$ go fmt                # Formats all the code in each file in the current directory
$ go install            # Compiles and "installs" a packages
$ go get                # Downloads the raw source code of someone else's packages
$ go test               # Runs any tests associated with the current project
```

# Deployment

- [DigitalOcean](https://cloud.digitalocean.com/apps/a84ca4a3-00f1-4d72-b564-ce2ebf32c56b/overview?i=6e90ac) will trigger a build whenever we merge code to main.

# Docker [builds](https://docs.docker.com/language/golang/build-images/)

```bash
$ docker-compose up --build
$ docker build --tag rexonms/kalomaya .                                         # build an image
$ docker image ls                                                               # display all images
$ docker image rm rexonms/kalomaya:lastest                                      # remove image
$ docker build -t rexonms/kalomaya:multistage -f Dockerfile.multistage .        # multi stage
$ docker ps                                                                     # list containers
$ docker stop {NAME}                                                            # stop a container
```

# Links

- [gqlgen](https://gqlgen.com/getting-started/)
- [gin tutorial - express](https://www.youtube.com/watch?v=LOn1GUsjOF4&ab_channel=DavidAlsh)
- [Go with React](https://medium.com/@synapticsynergy/serving-a-react-app-with-golang-using-gin-c6402ee64a4b)
