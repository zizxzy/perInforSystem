const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/my_data', {
    //useMongoClient您可以在顶层声明许多声明和配置，而无需所有额外的嵌套
    useMongoClient:true
}).then(res => {
    console.log('success')
}).catch(err => console.log(err));
