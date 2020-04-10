# Weather-api
Api rest with node and express

# Features
  * Express
  * Rest API
  * Docker
  * Github actions
  
# Requirements
  * node & npm

# Installation
  * git clone https://github.com/MarcosRissottoB/weather-api.git
  * cd weather-api
  * npm install or npm i
  
# Run project
  * npm start

# Run test
  * npm run test
 
# GET Routes
  * visit http://localhost:5000/api/v1
      /location
      /current?city
      /forecast?city
      
# Docker
  * Build images:
    docker build -t node-weather-api .
  * Create container
    docker run -p 5001:5000 -d username/repository:tag
  * Logs
    docker logs
  * Visit url: http://localhost:5001/api/v1
 
# Github action
 * Execute tests in doing push

# Link to Postman collection
https://www.getpostman.com/collections/f4d95c4044ef3330d2d1
