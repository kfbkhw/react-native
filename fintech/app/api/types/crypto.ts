export interface Crypto {
    circulating_supply: number;
    cmc_rank: number;
    date_added: string;
    id: number;
    infinite_supply: boolean;
    last_updated: string;
    max_supply: null | number;
    name: string;
    num_market_pairs: number;
    platform: Platform | null;
    quote: Quote;
    self_reported_circulating_supply: null;
    self_reported_market_cap: null;
    slug: string;
    symbol: string;
    tags: string[];
    total_supply: number;
    tvl_ratio: null;
}

export interface Quote {
    USD: USD;
}

export interface USD {
    fully_diluted_market_cap: number;
    last_updated: string;
    market_cap: number;
    market_cap_dominance: number;
    percent_change_1h: number;
    percent_change_24h: number;
    percent_change_30d: number;
    percent_change_60d: number;
    percent_change_7d: number;
    percent_change_90d: number;
    price: number;
    tvl: null;
    volume_24h: number;
    volume_change_24h: number;
}

export interface Platform {
    id: number;
    name: string;
    slug: string;
    symbol: string;
    token_address: string;
}
