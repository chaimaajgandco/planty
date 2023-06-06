import React from 'react'

export default function Cart() {
    const monstera = 8;
    const lierre = 10;
    const bouquet = 15;

    return (
    <div>
        <h1>Panier</h1>
        <ul>
            <li>Monstera : {monstera} euros </li>
            <li>Liere : {lierre} euros </li>
            <li>Bouquet de fleure : {bouquet} euros </li>
        </ul>
        <p>Prix total : {monstera + lierre + bouquet} euros</p>
    </div>
    )
}
