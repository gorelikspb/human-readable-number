module.exports = function toReadable (num) {
    if (num == 0){
        return 'zero'
    }
    let units = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    let tens = [ '', '',  'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];


    num = num.toString()
    num = num.split('').reverse()

    let order = 0
    let out = ''
    for (let dig  of num){
        if (order == 1 && dig == 1){ // .. teen case
            out = units[parseInt(num[1]+num[0])]
        }
        else if (order == 0){
            out = units[parseInt(dig)]
        }
        
        else if (order == 1 && dig !=0){
            out = tens[dig] + ' ' + out
        }

        else if (order == 2){
            // hundreds = 'hundred'
            // if (dig > 1){
            //     hundreds +='s'
            // }
            out = units[dig] + '' +'hundred' + ' ' + out
        }

        order+=1

    }
    return out.trimRight()             
}
