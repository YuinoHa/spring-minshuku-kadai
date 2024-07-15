const stripe = Stripe('pk_test_51PZJoQ2MBNkHiQ5NruMeu73uiQA3VKlGlFJcVxCfM0evTcJGrCO3eZbPQ5UKjFXspAZ0LkvzRUGlF1OF25Pqs1Gk00tI40GzAD');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
  stripe.redirectToCheckout({
    sessionId: sessionId
  })
});
