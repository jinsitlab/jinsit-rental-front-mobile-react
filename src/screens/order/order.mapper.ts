import type { Order } from "../../domain/order/order.model"
import type { OrderFormState } from "./order.types"

export const mapOrderToForm = (order: Order): OrderFormState => {
	return {
		companyName: order.companyName
	}
}

export const mapFormToOrder = (form: OrderFormState): Order => {
	return {
		companyName: form.companyName
	}	
}