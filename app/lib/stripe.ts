import { Stripe } from 'stripe'

export const sripe = new Stripe(process.env.STRIPE_API_KEY as string, {
    apiVersion: "2024-09-30.acacia",
    typescript: true,
})