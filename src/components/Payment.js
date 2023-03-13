import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React ,{useState}from 'react';
import { useSelector } from 'react-redux';
import '../App.css'
// export{CardElement} from "@stripe/react-stripe-js"


const CARD_OPTIONS ={
    iconStyle:"solid",
    style:{
        base:{
            iconColor:"#c4f0ff",
            color:"#fff",
            fontWeight:500,
            fontFamily:"Roboto ,Open Sans , Segoe UI, sans-serif",
            fontSize:"16px",
            fontSmoothing:"antialiased",
            ":-webkit-autofill":{color : "#fce883"},
            "::placeholder": {color : "#87bbfd"}

        },
        invalid:{
            iconColor:"#ffc7ee",
            color:"#ffc7ee"
        }
    }
}

const Payment = () => {
    const totalprice=useSelector((state)=>state.cartreducer.price)
    const [success,setSuccess]=useState(false);
    const stripe=useStripe();
    const elements=useElements();

const handleSubmit = async (e) =>{
    e.preventDefault();
    const {error,paymentMethod}=await stripe.createPaymentMethod({
        type:"card",
        card:elements.getElement(CardElement)
    })

    if(!error){
        try {
            const {id}=paymentMethod
            const response= await axios.post("http://localhost:4000/payment",{
                amount:totalprice,
                id
            })
    
            if(response.data.success){
                console.log("successful transaction");
                setSuccess(true);
    
            }
        } catch (error) {
            console.log("Error",error);
        }
    }else{
    
        console.log(error.message);
    }

}




    return <div>
        {!success ?
        <form onSubmit ={handleSubmit}>
            <fieldset className='formgroup'>
                <div className='formrow'>
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button className='payment-btn'>pay</button>
        </form>
           :
           <div>
            <h2>You just buy a  item.</h2>
            </div>
        }
            
    </div>;
}


export default Payment;