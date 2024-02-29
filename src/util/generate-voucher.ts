import { randomUUID } from "crypto"

export const generateVoucherCode = () =>  randomUUID().substring(2,7)
