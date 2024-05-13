import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { zustandStorage } from './mmkvStorage';

export interface Transaction {
    id: string;
    name: string;
    amount: number;
    date: Date;
}

export interface TransactionState {
    transactions: Transaction[];
    getBalance: () => number;
    add: (transaction: Transaction) => void;
    clear: () => void;
}

const initialState = { transactions: [] };

export const useTransactionStore = create<TransactionState>()(
    persist(
        (set, get) => ({
            ...initialState,
            getBalance: () =>
                get().transactions.reduce(
                    (acc, transaction) => acc + transaction.amount,
                    0
                ),
            add: (transaction: Transaction) => {
                set({
                    transactions: get().transactions.concat(transaction),
                });
            },
            clear: () => {
                set(initialState);
            },
        }),
        {
            name: 'transaction',
            storage: createJSONStorage(() => zustandStorage),
        }
    )
);
