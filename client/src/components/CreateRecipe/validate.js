

export default function validate(input){
    let errors = {};

    if(!input.name.trim()){
        errors.name = 'Recipe name required';
    } else if(input.name.length < 3){
        errors.name = 'Name should have at least 4 letters'
    }
    

    if(!input.summary.trim()){
        errors.summary = 'You must provide a summary';
    } else if(input.summary.length < 9){
        errors.summary = 'Summary should have at least 10 letters'
    }
    

    if(input.healthScore <= 0 || input.healthScore >= 100){
        errors.healthScore = 'HealthScore should have a value between 0 and 100'
    } 

    if(!input.steps.trim()){
        errors.steps = 'You must provide steps'
    } else if(input.steps.length < 9){
        errors.steps = 'Steps should have at least 10 letters'
    } 

    if(input.diets.length < 0){
        errors.diets = 'Select at least one type'
    }

    return errors
};