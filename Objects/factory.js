function factory(functionsLibrary, ordersArr) {
    let output = [];

    for (const order of ordersArr) {
        //name it's the name of the obj
        let { name } = order.template;
        //orderFunc are the parts
        let orderFunctions = order.parts;
        let newObj = {
            name,

        }
        order.parts.forEach(ord => {

            switch (ord) {
                case 'print':
                    newObj.print = functionsLibrary.print;
                    break;
                case 'scan':
                    newObj.scan = functionsLibrary.scan;    
                break;
                case 'play': 
                newObj.play = functionsLibrary.play;
                break;
            }
        })
        output.push(newObj);
    }
    // console.log(output);
    return output;
}

factory(library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
}, orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    },
]
);