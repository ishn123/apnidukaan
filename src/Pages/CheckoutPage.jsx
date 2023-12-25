import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import AddressForm from '../Components/AddressForm/AddressForm';
import "./pages.css"
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

export default () => {

    return (
        <div className="form-wrapper">
            <div className="form">
            <Elements stripe={stripePromise}>
                <AddressForm></AddressForm>
            </Elements>
            </div>
            
        </div>

    )
}