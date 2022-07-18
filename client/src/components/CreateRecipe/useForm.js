import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postRecipe } from '../../redux/actions/actions';


export default function useForm(validate) {
    const dispatch = useDispatch()


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
            setErrors(validate({
                ...input,
                [e.target.name]: e.target.value,
            }))
        };

        const handleSubmit = (e) => {
            e.preventDefault()
            dispatch(postRecipe(input))
            alert('Recipe created!')
            console.log(input)
            cleanInputs()
        };

        const handleDietChange = (e) => {
            if (input.diets.includes(e.target.value)) {
                return alert('You have already selected that diet')
            } else {
                setInput({
                    ...input,
                    diets: [...input.diets, e.target.value]
                })
                setErrors(validate({...input,
                diets : [...input.diets, e.target.value]}))
            }
        };
    
        const handleDelete = (dietDelete) => {
            setInput({
                ...input,
                diets: input.diets.filter(diet => diet !== dietDelete)
            })
            setErrors(validate({
                ...input,
                diets: input.diets.filter(diet => diet !== dietDelete)
            }))
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

        

        return {
            handleChange, 
            input, 
            setInput, 
            handleSubmit, 
            handleDietChange, 
            handleDelete, 
            errors,
            cleanInputs,
        }
}
