interface IDioBank {
    login: boolean;
}

const dioBank = {
    login: false
}

export const getAllLocalStorage = (): string | null => {
    return localStorage.getItem('diobank')
}

export const createLocalStorage = (): void => {
    localStorage.setItem('dioBank', JSON.stringify(dioBank)) 
}

export const changeLocalStorage = (dioBank: IDioBank): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}