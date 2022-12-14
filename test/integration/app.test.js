const supertest = require('supertest');
const server = require('../../app');


describe("Calculate", () => {
    it('POST /calculate: action: sum', async () => {
        const response = await supertest(server).post('/calculate').send({
            action: 'sum',
            num1: 20,
            num2: 10
        })

       
         console.log({response})
          expect(response.status).toBe(200)
        // expect(response.body).toBe(30)
    })


    //integration testing for subtraction 

    it('POST /calculate: action: subtract', async () => {
        const response = await supertest(server).post('/calculate').send({
            action: 'subtract',
            num1: 20,
            num2: 10
        })

       
         console.log({response})
           expect(response.status).toBe(200)
        //  expect(response.body).toBe({result:30})
    })


    
    //integration testing for divide
    it('POST /calculate: action: divide', async () => {
        const response = await supertest(server).post('/calculate').send({
            action: 'divide',
            num1: 20,
            num2: 10
        })

       
         console.log({response})
           expect(response.status).toBe(200)
        //  expect(response.body).toBe({result:30})
    })


  
    //integration testing for multiply    
    it('POST /calculate: action: multiply', async () => {
        const response = await supertest(server).post('/calculate').send({
            action: 'multiply',
            num1: 20,
            num2: 10
        })

       
         console.log({response})
           expect(response.status).toBe(200)
        //  expect(response.body).toBe({result:30})
    })
});