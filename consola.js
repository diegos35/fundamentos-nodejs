console.log("algo");
console.info("info");
console.error("error");
console.warn("warn");

var table = [
    {
        a: 1,
        b:2
    },
    {
        a: 2,
        b: 'Other key'
    }
]

console.table(table);


function function1  ()  {
    console.group('function1');
    function2();
    console.groupEnd();
}