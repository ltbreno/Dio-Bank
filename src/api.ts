const conta = {
    email: 'brenosas2003@gmail.com',
    password: '123456',
    name: 'Breno Lopes' ,
    balance: 2000.00 ,
    id: '1'

}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})