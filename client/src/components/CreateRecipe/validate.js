

export default function validate(input){
    let errors = {};

    if(!input.name.trim()){
        errors.name = 'Recipe name required';
    } else if(input.name.length < 4){
        errors.name = 'Name should have at least 4 letters'
    }
    

    if(!input.summary.trim()){
        errors.summary = 'You must provide a summary';
    } else if(input.summary.length < 10){
        errors.summary = 'Summary should have at least 10 letters'
    }
    

    if(input.healthScore < 1 || input.healthScore > 100){
        errors.healthScore = 'HealthScore should have a value between 1 and 100'
    } 

    if(!input.steps.trim()){
        errors.steps = 'You must provide steps'
    } else if(input.steps.length < 10){
        errors.steps = 'Steps should have at least 10 letters'
    } 

    if(input.diets.length < 1){
        errors.diets = 'Select at least one type'
    }

    return errors
};