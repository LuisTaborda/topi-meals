import ApiService from '../apiservice'

export default class MealService extends ApiService{

    constructor(){
        super('/api/meals');

    }

    findByName(name){
        let params = `?name=${name}`
        return this.get(params)
    }

}