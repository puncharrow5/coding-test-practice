/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let depth = 0;

    for(let i=0; i<logs.length; i++) {
        switch(logs[i]) {
            case "../":
                if(depth > 0){
                    depth --;
                }
                break;
      
            case "./":
                break;

            default:
                depth ++;
                break;
        }
    }

    return depth;
};