const stampit = require('@stamp/it');

const sharedBase = stampit({
    props: {
        myProp: 'this property is accessible from any page'
    },

    methods: {
        async sharedAction() {
            console.log('this action is accessible from any page');                               
        }
    }
});


const sharedTablet = stampit({
    props: {
        extraTabletProp: 'this property is accesible from any Tablet page'
    }
});

module.exports = { sharedBase, sharedTablet };
