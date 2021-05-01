interface node { index: number, value: number };

function rob(nums: number[]): number {
    let s: node[] = [];
    let value: number = 0;
    let result: number = 0;
    nums.forEach((num: number, index: number) => {
        if (index === 0 || index === 1) {
            if (result < num) {
                result = num;
            }
            s.push({ index, value: num })
        }
        else {
            s.forEach((p: node) => {
                if (index === p.index + 1) {
                    ;
                }
                else {
                    value = p.value + num;
                    if (result < value) {
                        s.push({ index, value });
                        result = value;
                    }
                }
            })
        }
    })
    return result;
};