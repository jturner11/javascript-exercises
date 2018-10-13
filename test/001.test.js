// ------------------------------------
// All tests below expect a function 
// called `fn` which takes a single
// parameter `input` and returns
// `output`.
//
// Create fn` within each test,
// above the expectation.
//
// The following examples may
// require to use the following ES6
// features:
// - map
// - string interpolation
// - object literal spreads
//
// Libraries such as lodash should
// *not* be used, requiring you to use
// native functionality provided
// by node.
//
// I have used the very latest version
// of node in these examples.
//
// $ nvm install v10.12.0
// $ node -v
// v10.12.0v
// ------------------------------------

describe('tests', () => {
    it('001 / an array of things in all caps', () => {
        const input = ['one', 'two', 'three'];
        const output = ['ONE', 'TWO', 'THREE'];

        expect(fn(input)).toEqual(output);
    });

    it('002 / an array of things, prefixed with their index + 1 and a dash', () => {
        const input = ['one', 'two', 'three'];
        const output = ['1-one', '2-two', '3-three'];

        expect(fn(input)).toEqual(output);
    });

    it('003 / an array of product names', () => {
        const input = [
            { id: 'p001', name: 'Vitabiotics Feroglobin 200ml' },
            { id: 'p002', name: 'Floradix Liquid iron and vitamin formula 500ml' },
            { id: 'p003', name: 'Berocca Orange - 45 effervescent tablets' },
            { id: 'p004', name: 'JT Vits Re-Energise Orange 20 tablets' },
        ];

        const output = [
            'Vitabiotics Feroglobin 200ml',
            'Floradix Liquid iron and vitamin formula 500ml',
            'Berocca Orange - 45 effervescent tablets',
            'JT Vits Re-Energise Orange 20 tablets',
        ];

        expect(fn(input)).toEqual(output);
    });

    it('004 / object with products key containing products', () => {
        const input = [
            { id: 'p001', name: 'Vitabiotics Feroglobin 200ml' },
            { id: 'p002', name: 'Floradix Liquid iron and vitamin formula 500ml' },
            { id: 'p003', name: 'Berocca Orange - 45 effervescent tablets' },
            { id: 'p004', name: 'JT Vits Re-Energise Orange 20 tablets' },
        ];

        const output = {
            products: [
                { id: 'p001', name: 'Vitabiotics Feroglobin 200ml' },
                { id: 'p002', name: 'Floradix Liquid iron and vitamin formula 500ml' },
                { id: 'p003', name: 'Berocca Orange - 45 effervescent tablets' },
                { id: 'p004', name: 'JT Vits Re-Energise Orange 20 tablets' },
            ]
        }

        expect(fn(input)).toEqual(output);
    });

    it('005 / object with products key containing an array of product names', () => {
        const input = [
            { id: 'p001', name: 'Vitabiotics Feroglobin 200ml' },
            { id: 'p002', name: 'Floradix Liquid iron and vitamin formula 500ml' },
            { id: 'p003', name: 'Berocca Orange - 45 effervescent tablets' },
            { id: 'p004', name: 'JT Vits Re-Energise Orange 20 tablets' },
        ];

        const output = {
            products: [
                'Vitabiotics Feroglobin 200ml',
                'Floradix Liquid iron and vitamin formula 500ml',
                'Berocca Orange - 45 effervescent tablets',
                'JT Vits Re-Energise Orange 20 tablets',
            ]
        }

        expect(fn(input)).toEqual(output);
    });

    it('006 / an object with products key containing products with an `inStock: true` prop', () => {
        const input = [
            { id: 'p001', name: 'Vitabiotics Feroglobin 200ml' },
            { id: 'p002', name: 'Floradix Liquid iron and vitamin formula 500ml' },
            { id: 'p003', name: 'Berocca Orange - 45 effervescent tablets' },
            { id: 'p004', name: 'JT Vits Re-Energise Orange 20 tablets' },
        ];

        const output = {
            products: [
                { id: 'p001', name: 'Vitabiotics Feroglobin 200ml', inStock: true },
                { id: 'p002', name: 'Floradix Liquid iron and vitamin formula 500ml', inStock: true },
                { id: 'p003', name: 'Berocca Orange - 45 effervescent tablets', inStock: true },
                { id: 'p004', name: 'JT Vits Re-Energise Orange 20 tablets', inStock: true },
            ]
        }

        expect(fn(input)).toEqual(output);
    });
});
