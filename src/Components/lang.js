export const Language = [
    'Java',
    'C++',
    'PHP'
];

export const getLanguages = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Language);
        }, 1000)
        })
    }
