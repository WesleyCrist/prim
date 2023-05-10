export default class Calc {

    constructor() {}

    public static check = (num: number) => {
        return new Promise((resolve, reject) => {
            if(num < 1 || num > 2147483647) {
                // throw new RangeError('outside acceptable limits')
                reject(new RangeError('outside acceptable limits'))
            } else {
                let res
                let cond = 1
                const cousin = []
                do {
                    if((num % cond) === 0) cousin.push(cond)
                    cond++
                } while(cond <= num)
                resolve({
                    statusCode: 200,
                    sent: num,
                    divisible: cousin,
                    cousin: `${num} is it cousin? ${cousin.length === 2 ? true : false}`
                })
            }
        })
    }
}
