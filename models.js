/*
* Модели баз данных
*/
function defineModels(mongoose, fn) {
    var Schema = mongoose.Schema;

    var pageSchema = new mongoose.Schema({
            title:String,
            body:String,
            date:{ type:Date, default:Date.now },
            hidden:Boolean
        });

    mongoose.model('Page', pageSchema);

    fn();
};

exports.defineModels = defineModels;