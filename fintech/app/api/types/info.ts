export interface CryptoInfo {
    id: number;
    name: string;
    symbol: string;
    category: string;
    description: string;
    slug: string;
    logo: string;
    subreddit: string;
    notice: string;
    tags: string[];
    'tag-names': string[];
    'tag-groups': string[];
    urls: Object;
    platform: null;
    date_added: string;
    twitter_username: string;
    is_hidden: number;
    date_launched: string;
    contract_address: any[];
    self_reported_circulating_supply: null;
    self_reported_tags: null;
    self_reported_market_cap: null;
    infinite_supply: boolean;
}
