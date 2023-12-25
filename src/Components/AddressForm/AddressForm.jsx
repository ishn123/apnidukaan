import React from 'react'
import { AddressElement } from '@stripe/react-stripe-js';

const AddressForm = () => {
    return (
        <form style={{textAlign:"center"}}>
            <h3>Shipping</h3>
            <AddressElement options={{ mode: 'shipping' }} />
        </form>
    )
}

export default AddressForm