import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postRecipe } from '../../redux/actions/actions';
import { useNavigate } from 'react-router-dom';


export default function useForm(validate) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

        const [input, setInput] = useState({
            name: '',
            summary: '',
            healthScore: '',
            steps: '',
            diets: []
        });

        const [errors, setErrors] = useState({});

        const handleChange = (e) => {
            setInput({
                ...input,
                [e.target.name] : e.target.value
            })
            // console.log(input)
            setErrors(validate(input))
        };

        const handleSubmit = (e) => {
            e.preventDefault()
            // console.log(input)
            dispatch(postRecipe(input))
            alert('Recipe created!')
            navigate('/home')
        };

        const handleDietChange = (e) => {
            let repeat = recipeNotToRepeat(input, e)
            if(repeat){
                alert('You cannot repeat the same diet')
            } else {
                setInput({
                    ...input,
                    diets: [...input.diets, e.target.value]
                })
                setErrors(validate(input))
            }
        };
    
        const onClose = (dietDelete) => {
            setInput({
                ...input,
                diets: input.diets.filter(diet => diet !== dietDelete)
            })
        };

        const cleanInputs = () => {
            setInput({
                name: '',
                summary: '',
                healthScore: '',
                steps: '',
                diets: []
            })
        };

        const recipeNotToRepeat = (input, e) => {
            let repeat = false
            for (let i = 0 ; i < input.diets.length ; i++){
                if (e.target.value === input.diets[i]){
                    repeat = true;
                    break;
                }
            }
            return repeat;
        };

        return {handleChange, 
            input, 
            setInput, 
            handleSubmit, 
            handleDietChange, 
            onClose, 
            errors,
        cleanInputs,
    recipeNotToRepeat}
}
