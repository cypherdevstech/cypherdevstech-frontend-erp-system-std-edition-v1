type Transaction = {
    id: string;
    transactionCode: string;
    inventoryName: string;
    quantity: number;
    branchName: string;
    amountPaid: string;
    modeOfPayment: string;
    transactionDate: string;
};

const columns = [
    "Transaction Code",
    "Inventory Name",
    "Quantity",
    "Branch Name",
    "Amount Paid",
    "Mode of Payment",
    "Transaction Date",
];

const defaultTransactions: Transaction[] = [
    {
        id: "1",
        transactionCode: "July003-920-887",
        inventoryName: "PS90WiFi Case (red)",
        quantity: 1,
        branchName: "Fayeed Electronics 2",
        amountPaid: "\u20B156.00",
        modeOfPayment: "Cash",
        transactionDate: "3:40 am - July 9, 2023",
    },
    {
        id: "2",
        transactionCode: "July004-755-880",
        inventoryName: "OpenLine Modem",
        quantity: 1,
        branchName: "Fayeed Electronics Main",
        amountPaid: "\u20B198.00",
        modeOfPayment: "Cash",
        transactionDate: "3:40 am - July 5, 2023",
    },
];

export default function LatestTransactionsCard({
    transactions = defaultTransactions,
    totalCount = transactions.length,
    onViewAll,
}: {
    transactions?: Transaction[];
    totalCount?: number;
    onViewAll?: () => void;
}) {
    return (
        <div className="mt-4 rounded-md border border-[#E2E2E2] bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
                <h2 className="text-[15px] font-semibold text-black">Latest Transactions</h2>
                <span className="text-[12px] text-[#4C6FFF]">
                    Showing {totalCount} Transactions
                </span>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] border-collapse text-left">
                    <thead>
                        <tr className="border-b border-[#E2E2E2]">
                            {columns.map((col) => (
                                <th
                                    key={col}
                                    className="whitespace-nowrap px-2 py-2 text-[11px] font-medium uppercase tracking-wide text-[#9A9A9A]"
                                >
                                    {col}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((t) => (
                            <tr key={t.id} className="border-b border-[#F2F2F0]">
                                <td className="whitespace-nowrap px-2 py-3 text-[13px] text-black">{t.transactionCode}</td>
                                <td className="whitespace-nowrap px-2 py-3 text-[13px] text-black">{t.inventoryName}</td>
                                <td className="whitespace-nowrap px-2 py-3 text-[13px] text-black">{t.quantity}</td>
                                <td className="whitespace-nowrap px-2 py-3 text-[13px] text-black">{t.branchName}</td>
                                <td className="whitespace-nowrap px-2 py-3 text-[13px] text-black">{t.amountPaid}</td>
                                <td className="whitespace-nowrap px-2 py-3 text-[13px] text-black">{t.modeOfPayment}</td>
                                <td className="whitespace-nowrap px-2 py-3 text-[13px] text-black">{t.transactionDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <button
                type="button"
                onClick={onViewAll}
                className="mt-4 h-9 cursor-pointer rounded-md bg-[#242423] px-4 text-[13px] font-medium text-white transition-colors hover:bg-black"
            >
                View all Transactions
            </button>
        </div>
    );
}