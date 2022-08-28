// NOTE: IDs are copied via Stripe Dashboard
// ---
import * as Products from "./products";

import type { Product } from "./products";
import type { Stripe } from ".";

export interface Price {
	id: `price_${string}`;
	object: "price";
	active: boolean;
	billing_scheme: "per_unit" | "tiered";
	created: Stripe.Timestamp;
	currency: Stripe.Currency;
	livemode: boolean;
	lookup_key: Nullable<string>;
	metadata: Stripe.Metadata;
	nickname: Nullable<string>;
	product: Product["id"];
	recurring: {
		interval: "day" | "week" | "month" | "year";
		usage_type: "licensed" | "metered";
		interval_count: number;
		aggregate_usage: Nullable<string>;
	};
	type: "one_time" | "recurring";
	tiers_mode?: "graduated" | "volume";
	transform_quantity?: {
		divide_by: number;
		round: "up" | "down";
	};
	unit_amount?: number;
	unit_amount_decimal?: string;
}

export const FREE = {
	id: "price_1LExsGSILCTTf3qcNs3yuzFd" as Price["id"],
	price: "$0.00 USD / month",
	product: Products.FREE,
};

export const STARTUP = {
	id: "price_1LExtbSILCTTf3qc4wYlBR0C" as Price["id"],
	price: "$19.00 USD / month",
	product: Products.STARTUP,
};

export const UNLIMITED = {
	id: "price_1LExvMSILCTTf3qcMVGGpEIV" as Price["id"],
	price: "$99.00 USD / month",
	product: Products.UNLIMITED,
};

export const VANITY = {
	id: "price_1InuAgKRK0hEzFHtuIZNMEJa" as Price["id"],
	price: "$10.00 USD / month",
	product: Products.VANITY,
};
