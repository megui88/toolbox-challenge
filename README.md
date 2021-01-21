# ToolBox Challenge

An attempt is made to cover all requirements, including optional ones. In the process of building the image, the tests are executed. It can be run with or without Docker.

## How to run with docker?

#### Clone the project:

```
git clone --recursive git@github.com:megui88/toolbox-challenge.git
```

#### Run docker-compose:

```
cd toolbox-challenge
docker-compose up
```

#### Enjoy!

Got to [0.0.0.0:8080](http://0.0.0.0:8080/)

```
$ curl -v -X GET "http://0.0.0.0:8081/iecho?text=test" -H "accept:  application/json" 
```

----

## How to run without docker?

#### Clone the project:

```
git clone --recursive git@github.com:megui88/toolbox-challenge.git
```

##### Backend

```
cd toolbox-challenge/backend
npm install
npm start
```

##### Frontend
```
cd toolbox-challenge/fronend
npm install
npm start
```

#### Enjoy!

Got to [0.0.0.0:8080](http://0.0.0.0:8080/)

```
$ curl -v -X GET "http://0.0.0.0:8081/iecho?text=test" -H "accept:  application/json" 
```

----

## How to run the test?

#### Clone the project:

```
git clone --recursive git@github.com:megui88/toolbox-challenge.git
```

##### Backend

```
cd toolbox-challenge/backend
npm install
npm test
```

##### Frontend
```
cd toolbox-challenge/fronend
npm install
npm test
```

----

## Please remember clear your workspace

```
rm -Rf toolbox-challenge/fronend
docker rmi megui88/toolbox-challenge:backend megui88/toolbox-challenge:frontend --force
```