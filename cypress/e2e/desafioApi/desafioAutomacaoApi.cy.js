/// <reference types="cypress"/>

const Ajv = require("ajv")
const ajv = new Ajv({allErrors: true, verbose: true})

describe('Validar schema json', () => {
    it('Validar schema json', () => {
        cy.api({
            method: 'GET',
            url: 'http://jsonplaceholder.typicode.com/users/1'
        }).then((res) => {
            cy.fixture('schemaApi').then((schemaApi) => {
                const validate = ajv.compile(schemaApi)
                const valid = validate(res.body)
                if (!valid) cy.log(validate.errors).then(()=>{
                    throw new Error('Falha do contrato, Ver log acima')
                })
            })
        })
    })
});
describe('Healthcheck', () => {
    it('Healtcheck', () => {
        cy.api({
            method: 'GET',
            url: 'http://jsonplaceholder.typicode.com/users'
        }).should((res) => {
            expect(res.status).to.equal(200)
            expect(res.statusText).to.equal('OK')
        })
    });
});
describe('GET', () => {
    it('Listar todos registros', () => {
        cy.api({
            method: 'GET',
            url: 'http://jsonplaceholder.typicode.com/users'
        }).should((res) => {
            expect(res.status).to.equal(200)
            expect(res.statusText).to.equal('OK')
            expect(res.body).is.not.empty
        });
    });
    it('Listar registro por id', () => {
        cy.api({
            method: 'GET',
            url: 'http://jsonplaceholder.typicode.com/users/1'
        }).should((res) => {
            expect(res.status).to.equal(200)
            expect(res.statusText).to.equal('OK')
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('id').to.equal(1)
            expect(res.body).to.have.property('name')
            expect(res.body).to.have.property('username')
            expect(res.body).to.have.property('email')
            expect(res.body).to.have.property('address')
            expect(res.body).to.have.property('phone')
            expect(res.body).to.have.property('website')
            expect(res.body).to.have.property('company')
        });
    });
    it('Listar registro com id inválido', () => {
        cy.api({
            method: 'GET',
            url: 'http://jsonplaceholder.typicode.com/users/11',
            failOnStatusCode: false
        }).should((res) => {
            expect(res.status).to.equal(404)
            expect(res.statusText).to.equal('Not Found')
            expect(res.body).is.empty
        });
    });
});
describe('POST', () => {
    it('Inserir registro válido', () => {
        cy.api({
            method: 'POST',
            url: 'http://jsonplaceholder.typicode.com/users',
            body: {
                "id": "",
                "name": "Teste PB",
                "username": "Teste PB",
                "email": "Teste PB@Teste PB",
                "address": {
                    "street": "Teste PB",
                    "suite": "Teste PB. 556",
                    "city": "Teste PB",
                    "zipcode": "92998-3874",
                    "geo": {
                        "lat": "-37.3159",
                        "lng": "81.1496"
                    }
                },
                "phone": "1-770-736-8031 x56442",
                "website": "Teste PB.org",
                "company": {
                    "name": "Teste PB",
                    "catchPhrase": "Teste PB",
                    "bs": "Teste PB"
                }
            }
        }).should((res) => {
            expect(res.status).to.equal(201)
            expect(res.statusText).to.equal('Created')
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('id').to.equal(11)
        })
    });
    it('Inserir registro inválido', () => {
        cy.api({
            method: 'POST',
            url: 'http://jsonplaceholder.typicode.com/users/1', //Como o endpoint aceita com sucesso qualquer coisa no body (até mesmo vazio), a única forma de simular um erro é com uma URL inválida para o método POST.
            body: {
                "id": "",
                "name": "Teste PB",
                "username": "Teste PB",
                "email": "Teste PB@Teste PB",
                "address": {
                    "street": "Teste PB",
                    "suite": "Teste PB. 556",
                    "city": "Teste PB",
                    "zipcode": "92998-3874",
                    "geo": {
                        "lat": "-37.3159",
                        "lng": "81.1496"
                    }
                },
                "phone": "1-770-736-8031 x56442",
                "website": "Teste PB.org",
                "company": {
                    "name": "Teste PB",
                    "catchPhrase": "Teste PB",
                    "bs": "Teste PB"
                }
            },
            failOnStatusCode: false
        }).should((res) => {
            expect(res.status).to.equal(404)
            expect(res.statusText).to.equal('Not Found')
            expect(res.body).is.empty
        })
    });
});
describe('PUT', () => {
    it('Alterar dado de um registro registrado válido', () => {
        cy.api({
            method: 'PUT',
            url: 'http://jsonplaceholder.typicode.com/users/1',
            body: {
                "id": 1,
                "name": "TESTE PB",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "address": {
                    "street": "Kulas Light",
                    "suite": "Apt. 556",
                    "city": "Gwenborough",
                    "zipcode": "92998-3874",
                    "geo": {
                        "lat": "-37.3159",
                        "lng": "81.1496"
                    }
                },
                "phone": "1-770-736-8031 x56442",
                "website": "hildegard.org",
                "company": {
                    "name": "Romaguera-Crona",
                    "catchPhrase": "Multi-layered client-server neural-net",
                    "bs": "harness real-time e-markets"
                }
            }

        }).should((res) => {
            expect(res.status).to.equal(200)
            expect(res.statusText).to.equal('OK')
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('id').to.equal(1);
            expect(res.body).to.have.property('name').to.equal('TESTE PB')

        });
    });
    it('Alterar registro inválido', () => {
        cy.api({
            method: 'PUT',
            url: 'http://jsonplaceholder.typicode.com/users/', //Como o endpoint aceita com sucesso qualquer coisa no body (até mesmo vazio), a única forma de simular um erro é com uma URL inválida para o método PUT.
            body: {
                "id": 1,
                "name": "TESTE PB",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "address": {
                    "street": "Kulas Light",
                    "suite": "Apt. 556",
                    "city": "Gwenborough",
                    "zipcode": "92998-3874",
                    "geo": {
                        "lat": "-37.3159",
                        "lng": "81.1496"
                    }
                },
                "phone": "1-770-736-8031 x56442",
                "website": "hildegard.org",
                "company": {
                    "name": "Romaguera-Crona",
                    "catchPhrase": "Multi-layered client-server neural-net",
                    "bs": "harness real-time e-markets"
                }
            },
            failOnStatusCode: false
        }).should((res) => {
            expect(res.status).to.equal(404)
            expect(res.statusText).to.equal('Not Found')
            expect(res.body).is.empty
        })
    });
});
describe('DELETE', () => {
    it('Apagar registro válido informando id', () => {
        cy.api({
            method: 'DELETE',
            url: 'http://jsonplaceholder.typicode.com/users/1'
        }).should((res) => {
            expect(res.status).to.equal(200)
            expect(res.statusText).to.equal('OK')
            expect(res.body).is.empty;
        })
    });
    it('Apagar registro sem informar id', () => {
        cy.api({
            method: 'DELETE',
            url: 'http://jsonplaceholder.typicode.com/users/',
            failOnStatusCode: false
        }).should((res) => {
            expect(res.status).to.equal(404)
            expect(res.statusText).to.equal('Not Found')
            expect(res.body).is.empty;
        })
    });
});

