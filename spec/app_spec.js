var frisby = require('frisby');

//https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4

describe('Bears api', function(){

    it('uses /api', function(){
        frisby.create('/api')
            .get('http://localhost:3000/api')
            .expectStatus(200)
            .expectBodyContains('{"message":"hooray! welcome to our api!"}')
            .toss();
    });

    xit('Creating a bear', function(){
        frisby.create('#bears')
            .get('http://localhost:3000/api/bears')
            .expectStatus(200)
            .toss();
    });

});

