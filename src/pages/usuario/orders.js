import React from 'react';

const UserOrders = () => {

    const orders = [
        {
            id: 1,
            date: '2022-01-01',
            total: '$150.00',
            status: 'Completed'
        },
        {
            id: 2,
            date: '2022-01-02',
            total: '$200.00',
            status: 'Pending'
        },
        {
            id: 3,
            date: '2022-01-03',
            total: '$50.00',
            status: 'Cancelled'
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold text-center mb-6">Tus ordenes</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Order ID</th>
                            <th className="py-3 px-6 text-left">Date</th>
                            <th className="py-3 px-6 text-center">Total</th>
                            <th className="py-3 px-6 text-center">Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {orders.map((order) => (
                            <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left whitespace-nowrap">{order.id}</td>
                                <td className="py-3 px-6 text-left">{order.date}</td>
                                <td className="py-3 px-6 text-center">{order.total}</td>
                                <td className="py-3 px-6 text-center">
                                    <span className={`py-1 px-3 rounded-full text-xs font-semibold ${order.status === 'Completed' ? 'bg-green-200 text-green-700' : order.status === 'Pending' ? 'bg-yellow-200 text-yellow-700' : 'bg-red-200 text-red-700'}`}>
                                        {order.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserOrders;
